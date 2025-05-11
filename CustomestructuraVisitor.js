import estructuraVisitor from './generated/estructuraVisitor.js';

export default class CustomestructuraVisitor extends estructuraVisitor {
  constructor() {
    super();
    this.variables = {};
  }

  visitProg(ctx) {
    // Visita todos los programas definidos
    return ctx.programa().map(p => this.visit(p));
  }

  visitPrograma(ctx) {
    const instrucciones = ctx.instruccion();
    for (let instr of instrucciones) {
      this.visit(instr);
    }
  }

  visitAsignacion(ctx) {
    const id = ctx.identificador().getText();
    const valor = this.visit(ctx.expresion());
    this.variables[id] = valor;
  }

  visitImprimir(ctx) {
    const valor = this.visit(ctx.expresion());
    console.log(valor);
  }

  visitExpresion(ctx) {
    if (ctx.termino().length === 1) {
      return this.visit(ctx.termino(0));
    }

    let resultado = this.visit(ctx.termino(0));
    for (let i = 1; i < ctx.termino().length; i++) {
      const operador = ctx.getChild(2 * i - 1).getText();
      const siguiente = this.visit(ctx.termino(i));
      if (operador === '+') {
        resultado += siguiente;
      } else if (operador === '-') {
        resultado -= siguiente;
      } else if (operador === '*') {
        resultado *= siguiente;
      } else if (operador === '/') {
        resultado /= siguiente;
      }
    }
    return resultado;
  }

  visitTermino(ctx) {
    if (ctx.STRING()) {
      return ctx.STRING().getText().slice(1, -1); // quitar comillas
    }

    if (ctx.numero()) {
      return parseFloat(ctx.numero().getText());
    }

    if (ctx.identificador()) {
      const id = ctx.identificador().getText();
      if (this.variables[id] === undefined) {
        throw new Error(`Variable no definida: ${id}`);
      }
      return this.variables[id];
    }

    if (ctx.expresion()) {
      return this.visit(ctx.expresion());
    }
  }

  visitExcepcion(ctx) {
    try {
      this.visit(ctx.bloque(0));
    } catch (error) {
      // console.error("Error capturado:", error.message);
      this.variables[ctx.identificador().getText()] = error.message;
      this.visit(ctx.bloque(1));
    }
  }

  visitBloque(ctx) {
    for (let instr of ctx.instruccion()) {
      this.visit(instr);
    }
  }
}
