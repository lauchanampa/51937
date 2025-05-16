import antlr4 from 'antlr4';
import estructuraLexer from './generated/estructuraLexer.js';
import estructuraParser from './generated/estructuraParser.js';

function traducirExpresion(ctx) {
  if (!ctx) return '';

  if (ctx.termino().length === 1) {
    return traducirTermino(ctx.termino(0));
  }

  let resultado = traducirTermino(ctx.termino(0));
  for (let i = 1; i < ctx.termino().length; i++) {
    const operador = ctx.getChild(2 * i - 1).getText();
    const siguiente = traducirTermino(ctx.termino(i));
    resultado = `${resultado} ${operador} ${siguiente}`;
  }
  return resultado;
}

function traducirTermino(ctx) {
  if (ctx.STRING()) {
    return ctx.STRING().getText();
  }
  if (ctx.numero()) {
    return ctx.numero().getText();
  }
  if (ctx.identificador()) {
    return ctx.identificador().getText();
  }
  if (ctx.expresion()) {
    return `(${traducirExpresion(ctx.expresion())})`;
  }
  return '';
}

function traducirInstruccion(ctx) {
  if (!ctx) return '';

  if (ctx.imprimir()) {
    const expr = traducirExpresion(ctx.imprimir().expresion());
    return `console.log(${expr});`;
  }

  if (ctx.asignacion()) {
    const id = ctx.asignacion().identificador().getText();
    const expr = traducirExpresion(ctx.asignacion().expresion());
    return `let ${id} = ${expr};`;
  }

  if (ctx.bloque()) {
    const instrucciones = ctx.bloque().instruccion()
      .map(i => traducirInstruccion(i))
      .join('\n');
    return `{\n${instrucciones}\n}`;
  }

  if (ctx.excepcion()) {
    const bloqueProcesar = ctx.excepcion().bloque(0);
    const idError = ctx.excepcion().identificador().getText();
    const bloqueManejarError = ctx.excepcion().bloque(1);

    const codigoProcesar = bloqueProcesar.instruccion()
      .map(i => traducirInstruccion(i))
      .join('\n');

    const codigoManejarError = bloqueManejarError.instruccion()
      .map(i => traducirInstruccion(i))
      .join('\n');

    return `try {\n${codigoProcesar}\n} catch (${idError}) {\n${codigoManejarError}\n}`;
  }

  return '';
}

async function main() {
  const fs = await import('fs/promises');
  try {
    const input = await fs.readFile('./entrada.txt', 'utf-8');

    const chars = new antlr4.InputStream(input);
    const lexer = new estructuraLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new estructuraParser(tokens);

    parser.buildParseTrees = true;
    const tree = parser.prog();

    const programas = tree.programa();
    let codigoFinal = '';

    for (const prog of programas) {
      const nombreProg = prog.identificador().getText();
      const instrucciones = prog.instruccion();

      codigoFinal += `// Programa: ${nombreProg}\n`;
      for (const instr of instrucciones) {
        codigoFinal += traducirInstruccion(instr) + '\n';
      }
      codigoFinal += '\n';
    }

    console.log('✅ Código JavaScript generado:\n');
    console.log(codigoFinal);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();

