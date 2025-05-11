grammar estructura;

//Gramática
prog: programa+;

programa : PROGRAMA identificador LBRACE instruccion* RBRACE ;

instruccion 
    : asignacion
    | excepcion
    | bloque
    | imprimir
    ;

asignacion : identificador EQ expresion SEMI ;

excepcion : PROCESAR bloque MANEJARERROR LPAREN identificador RPAREN bloque ;

bloque : LBRACE (instruccion)* RBRACE ;

imprimir : IMPRIMIR LPAREN expresion RPAREN SEMI ;

expresion : termino ( (PLUS | MINUS | MUL | DIV) termino )* ;

termino 
    : numero               
    | identificador
    | LPAREN expresion RPAREN
    | STRING
    ;

numero : DIGITO+ (DOT DIGITO+)? ;

identificador : LETRA (LETRA | DIGITO | UNDERSCORE)* ;

//Lexer
// Palabras clave
PROGRAMA     : 'programa' ;
PROCESAR     : 'procesar' ;
MANEJARERROR : 'manejarError' ;
IMPRIMIR     : 'imprimir' ;

// Símbolos
EQ        : '=' ;
SEMI      : ';' ;
PLUS      : '+' ;
MINUS     : '-' ;
MUL       : '*' ;
DIV       : '/' ;
DOT       : '.' ;
LPAREN    : '(' ;
RPAREN    : ')' ;
LBRACE    : '{' ;
RBRACE    : '}' ;
UNDERSCORE: '_' ;
COMMI : '"';

// Caracteres básicos
LETRA     : [a-zA-Z] ;
DIGITO    : [0-9] ;
STRING : '"' (~["\r\n])* '"' ;

// Ignorar espacios y saltos de línea
WS        : [ \t\r\n]+ -> skip ;