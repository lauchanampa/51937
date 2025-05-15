import antlr4 from 'antlr4';
import estructuraLexer from './generated/estructuraLexer.js';
import estructuraParser from './generated/estructuraParser.js';
import CustomestructuraVisitor from './CustomestructuraVisitor.js';
import fs from 'fs';

// Leer archivo de entrada
const input = fs.readFileSync('./entrada.txt', 'utf8');

// Crear flujo de caracteres
const chars = new antlr4.InputStream(input);

// Lexer
const lexer = new estructuraLexer(chars);

// Obtener todos los tokens antes de que sean consumidos
const allTokens = lexer.getAllTokens();

// Tabla de Tokens y Lexemas
if (allTokens.length === 0) {
    console.error("❌ No se generaron tokens. Verifica la entrada.");
    process.exit(1);
}

console.log("📄 Tabla de Tokens y Lexemas:");
console.log("--------------------------------------------------");
console.log("| Lexema         | Token                         |");
console.log("--------------------------------------------------");
for (const token of allTokens) {
    const tipo = estructuraLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
    console.log(`| ${token.text.padEnd(14)} | ${tipo.padEnd(30)}|`);
}
console.log("--------------------------------------------------\n");

// ⚠️ IMPORTANTE: volver a crear lexer y token stream, porque getAllTokens() consume el flujo
const freshLexer = new estructuraLexer(new antlr4.InputStream(input));
const tokens = new antlr4.CommonTokenStream(freshLexer);

// Parser
const parser = new estructuraParser(tokens);

// Acumulador de errores sintácticos
let erroresSintacticos = [];

// Custom error listener para capturar línea y descripción
class CustomErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        erroresSintacticos.push(`- Línea ${line}, columna ${column}: ${msg}`);
    }
}

// Quitar el listener por defecto y usar el personalizado
parser.removeErrorListeners();
parser.addErrorListener(new CustomErrorListener());

// Obtener el árbol desde la regla inicial 'prog'
const tree = parser.prog();

// Verificación de errores sintácticos
if (erroresSintacticos.length > 0) {
    console.error("❌ Errores de sintaxis encontrados:");
    erroresSintacticos.forEach(error => console.error(error));
} else {
    console.log("✅ Análisis sintáctico exitoso: Entrada válida.");
    console.log("Árbol de derivación:");
    console.log(tree.toStringTree(parser.ruleNames));

    console.log("\n");

    // Crear instancia del visitor personalizado
    const visitor = new CustomestructuraVisitor();

    // Visitar el árbol y ejecutar el programa
    console.log("Resultado del programa: "); 
    visitor.visit(tree);
}

console.log("\n");