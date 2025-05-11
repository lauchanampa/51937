// Generated from c:/Users/chana/OneDrive/Documentos/Analizador/estructura.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import estructuraListener from './estructuraListener.js';
import estructuraVisitor from './estructuraVisitor.js';

const serializedATN = [4,1,21,110,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,4,0,24,8,0,11,0,
12,0,25,1,1,1,1,1,1,1,1,5,1,32,8,1,10,1,12,1,35,9,1,1,1,1,1,1,2,1,2,1,2,
1,2,3,2,43,8,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,
5,5,5,60,8,5,10,5,12,5,63,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,
7,5,7,76,8,7,10,7,12,7,79,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,88,8,8,1,9,
4,9,91,8,9,11,9,12,9,92,1,9,1,9,4,9,97,8,9,11,9,12,9,98,3,9,101,8,9,1,10,
1,10,5,10,105,8,10,10,10,12,10,108,9,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,
18,20,0,2,1,0,7,10,2,0,16,16,18,19,112,0,23,1,0,0,0,2,27,1,0,0,0,4,42,1,
0,0,0,6,44,1,0,0,0,8,49,1,0,0,0,10,57,1,0,0,0,12,66,1,0,0,0,14,72,1,0,0,
0,16,87,1,0,0,0,18,90,1,0,0,0,20,102,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,
24,25,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,1,1,0,0,0,27,28,5,1,0,0,28,
29,3,20,10,0,29,33,5,14,0,0,30,32,3,4,2,0,31,30,1,0,0,0,32,35,1,0,0,0,33,
31,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,33,1,0,0,0,36,37,5,15,0,0,37,3,
1,0,0,0,38,43,3,6,3,0,39,43,3,8,4,0,40,43,3,10,5,0,41,43,3,12,6,0,42,38,
1,0,0,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,5,1,0,0,0,44,45,3,20,
10,0,45,46,5,5,0,0,46,47,3,14,7,0,47,48,5,6,0,0,48,7,1,0,0,0,49,50,5,2,0,
0,50,51,3,10,5,0,51,52,5,3,0,0,52,53,5,12,0,0,53,54,3,20,10,0,54,55,5,13,
0,0,55,56,3,10,5,0,56,9,1,0,0,0,57,61,5,14,0,0,58,60,3,4,2,0,59,58,1,0,0,
0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,61,1,0,0,0,
64,65,5,15,0,0,65,11,1,0,0,0,66,67,5,4,0,0,67,68,5,12,0,0,68,69,3,14,7,0,
69,70,5,13,0,0,70,71,5,6,0,0,71,13,1,0,0,0,72,77,3,16,8,0,73,74,7,0,0,0,
74,76,3,16,8,0,75,73,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,
15,1,0,0,0,79,77,1,0,0,0,80,88,3,18,9,0,81,88,3,20,10,0,82,83,5,12,0,0,83,
84,3,14,7,0,84,85,5,13,0,0,85,88,1,0,0,0,86,88,5,20,0,0,87,80,1,0,0,0,87,
81,1,0,0,0,87,82,1,0,0,0,87,86,1,0,0,0,88,17,1,0,0,0,89,91,5,19,0,0,90,89,
1,0,0,0,91,92,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,100,1,0,0,0,94,96,5,
11,0,0,95,97,5,19,0,0,96,95,1,0,0,0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,
0,0,0,99,101,1,0,0,0,100,94,1,0,0,0,100,101,1,0,0,0,101,19,1,0,0,0,102,106,
5,18,0,0,103,105,7,1,0,0,104,103,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,
106,107,1,0,0,0,107,21,1,0,0,0,108,106,1,0,0,0,10,25,33,42,61,77,87,92,98,
100,106];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class estructuraParser extends antlr4.Parser {

    static grammarFileName = "estructura.g4";
    static literalNames = [ null, "'programa'", "'procesar'", "'manejarError'", 
                            "'imprimir'", "'='", "';'", "'+'", "'-'", "'*'", 
                            "'/'", "'.'", "'('", "')'", "'{'", "'}'", "'_'", 
                            "'\"'" ];
    static symbolicNames = [ null, "PROGRAMA", "PROCESAR", "MANEJARERROR", 
                             "IMPRIMIR", "EQ", "SEMI", "PLUS", "MINUS", 
                             "MUL", "DIV", "DOT", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "UNDERSCORE", "COMMI", "LETRA", "DIGITO", 
                             "STRING", "WS" ];
    static ruleNames = [ "prog", "programa", "instruccion", "asignacion", 
                         "excepcion", "bloque", "imprimir", "expresion", 
                         "termino", "numero", "identificador" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = estructuraParser.ruleNames;
        this.literalNames = estructuraParser.literalNames;
        this.symbolicNames = estructuraParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, estructuraParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.programa();
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, estructuraParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(estructuraParser.PROGRAMA);
	        this.state = 28;
	        this.identificador();
	        this.state = 29;
	        this.match(estructuraParser.LBRACE);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 278548) !== 0)) {
	            this.state = 30;
	            this.instruccion();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 36;
	        this.match(estructuraParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, estructuraParser.RULE_instruccion);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.asignacion();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.excepcion();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.bloque();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 41;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, estructuraParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.identificador();
	        this.state = 45;
	        this.match(estructuraParser.EQ);
	        this.state = 46;
	        this.expresion();
	        this.state = 47;
	        this.match(estructuraParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	excepcion() {
	    let localctx = new ExcepcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, estructuraParser.RULE_excepcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(estructuraParser.PROCESAR);
	        this.state = 50;
	        this.bloque();
	        this.state = 51;
	        this.match(estructuraParser.MANEJARERROR);
	        this.state = 52;
	        this.match(estructuraParser.LPAREN);
	        this.state = 53;
	        this.identificador();
	        this.state = 54;
	        this.match(estructuraParser.RPAREN);
	        this.state = 55;
	        this.bloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, estructuraParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(estructuraParser.LBRACE);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 278548) !== 0)) {
	            this.state = 58;
	            this.instruccion();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 64;
	        this.match(estructuraParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, estructuraParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(estructuraParser.IMPRIMIR);
	        this.state = 67;
	        this.match(estructuraParser.LPAREN);
	        this.state = 68;
	        this.expresion();
	        this.state = 69;
	        this.match(estructuraParser.RPAREN);
	        this.state = 70;
	        this.match(estructuraParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, estructuraParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.termino();
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1920) !== 0)) {
	            this.state = 73;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1920) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 74;
	            this.termino();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, estructuraParser.RULE_termino);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.numero();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.identificador();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 82;
	            this.match(estructuraParser.LPAREN);
	            this.state = 83;
	            this.expresion();
	            this.state = 84;
	            this.match(estructuraParser.RPAREN);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 86;
	            this.match(estructuraParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, estructuraParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 89;
	            this.match(estructuraParser.DIGITO);
	            this.state = 92; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===19);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 94;
	            this.match(estructuraParser.DOT);
	            this.state = 96; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 95;
	                this.match(estructuraParser.DIGITO);
	                this.state = 98; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===19);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, estructuraParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(estructuraParser.LETRA);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 851968) !== 0)) {
	            this.state = 103;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 851968) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

estructuraParser.EOF = antlr4.Token.EOF;
estructuraParser.PROGRAMA = 1;
estructuraParser.PROCESAR = 2;
estructuraParser.MANEJARERROR = 3;
estructuraParser.IMPRIMIR = 4;
estructuraParser.EQ = 5;
estructuraParser.SEMI = 6;
estructuraParser.PLUS = 7;
estructuraParser.MINUS = 8;
estructuraParser.MUL = 9;
estructuraParser.DIV = 10;
estructuraParser.DOT = 11;
estructuraParser.LPAREN = 12;
estructuraParser.RPAREN = 13;
estructuraParser.LBRACE = 14;
estructuraParser.RBRACE = 15;
estructuraParser.UNDERSCORE = 16;
estructuraParser.COMMI = 17;
estructuraParser.LETRA = 18;
estructuraParser.DIGITO = 19;
estructuraParser.STRING = 20;
estructuraParser.WS = 21;

estructuraParser.RULE_prog = 0;
estructuraParser.RULE_programa = 1;
estructuraParser.RULE_instruccion = 2;
estructuraParser.RULE_asignacion = 3;
estructuraParser.RULE_excepcion = 4;
estructuraParser.RULE_bloque = 5;
estructuraParser.RULE_imprimir = 6;
estructuraParser.RULE_expresion = 7;
estructuraParser.RULE_termino = 8;
estructuraParser.RULE_numero = 9;
estructuraParser.RULE_identificador = 10;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_prog;
    }

	programa = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProgramaContext);
	    } else {
	        return this.getTypedRuleContext(ProgramaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_programa;
    }

	PROGRAMA() {
	    return this.getToken(estructuraParser.PROGRAMA, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LBRACE() {
	    return this.getToken(estructuraParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(estructuraParser.RBRACE, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	excepcion() {
	    return this.getTypedRuleContext(ExcepcionContext,0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_asignacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	EQ() {
	    return this.getToken(estructuraParser.EQ, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	SEMI() {
	    return this.getToken(estructuraParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExcepcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_excepcion;
    }

	PROCESAR() {
	    return this.getToken(estructuraParser.PROCESAR, 0);
	};

	bloque = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BloqueContext);
	    } else {
	        return this.getTypedRuleContext(BloqueContext,i);
	    }
	};

	MANEJARERROR() {
	    return this.getToken(estructuraParser.MANEJARERROR, 0);
	};

	LPAREN() {
	    return this.getToken(estructuraParser.LPAREN, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	RPAREN() {
	    return this.getToken(estructuraParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterExcepcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitExcepcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitExcepcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_bloque;
    }

	LBRACE() {
	    return this.getToken(estructuraParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(estructuraParser.RBRACE, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_imprimir;
    }

	IMPRIMIR() {
	    return this.getToken(estructuraParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(estructuraParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(estructuraParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(estructuraParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(estructuraParser.PLUS);
	    } else {
	        return this.getToken(estructuraParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(estructuraParser.MINUS);
	    } else {
	        return this.getToken(estructuraParser.MINUS, i);
	    }
	};


	MUL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(estructuraParser.MUL);
	    } else {
	        return this.getToken(estructuraParser.MUL, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(estructuraParser.DIV);
	    } else {
	        return this.getToken(estructuraParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_termino;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LPAREN() {
	    return this.getToken(estructuraParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(estructuraParser.RPAREN, 0);
	};

	STRING() {
	    return this.getToken(estructuraParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(estructuraParser.DIGITO);
	    } else {
	        return this.getToken(estructuraParser.DIGITO, i);
	    }
	};


	DOT() {
	    return this.getToken(estructuraParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = estructuraParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(estructuraParser.LETRA);
	    } else {
	        return this.getToken(estructuraParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(estructuraParser.DIGITO);
	    } else {
	        return this.getToken(estructuraParser.DIGITO, i);
	    }
	};


	UNDERSCORE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(estructuraParser.UNDERSCORE);
	    } else {
	        return this.getToken(estructuraParser.UNDERSCORE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof estructuraListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof estructuraVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




estructuraParser.ProgContext = ProgContext; 
estructuraParser.ProgramaContext = ProgramaContext; 
estructuraParser.InstruccionContext = InstruccionContext; 
estructuraParser.AsignacionContext = AsignacionContext; 
estructuraParser.ExcepcionContext = ExcepcionContext; 
estructuraParser.BloqueContext = BloqueContext; 
estructuraParser.ImprimirContext = ImprimirContext; 
estructuraParser.ExpresionContext = ExpresionContext; 
estructuraParser.TerminoContext = TerminoContext; 
estructuraParser.NumeroContext = NumeroContext; 
estructuraParser.IdentificadorContext = IdentificadorContext; 
