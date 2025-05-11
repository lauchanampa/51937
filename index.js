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

// Token stream
const tokens = new antlr4.CommonTokenStream(lexer);

// Parser
const parser = new estructuraParser(tokens);

// Obtener el árbol desde la regla inicial 'prog'
const tree = parser.prog();

// Mostrar árbol de derivación
console.log("Árbol de derivación:");
console.log(tree.toStringTree(parser.ruleNames));


// salto de linea
console.log("\n");

// Crear instancia del visitor personalizado
const visitor = new CustomestructuraVisitor();

// Visitar el árbol y ejecutar el programa
visitor.visit(tree);

// salto de linea
console.log("\n");

