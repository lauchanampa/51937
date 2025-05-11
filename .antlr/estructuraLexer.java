// Generated from c:/Users/chana/OneDrive/Documentos/Analizador/estructura.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class estructuraLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PROGRAMA=1, PROCESAR=2, MANEJARERROR=3, IMPRIMIR=4, EQ=5, SEMI=6, PLUS=7, 
		MINUS=8, MUL=9, DIV=10, DOT=11, LPAREN=12, RPAREN=13, LBRACE=14, RBRACE=15, 
		UNDERSCORE=16, COMMI=17, LETRA=18, DIGITO=19, STRING=20, WS=21;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PROGRAMA", "PROCESAR", "MANEJARERROR", "IMPRIMIR", "EQ", "SEMI", "PLUS", 
			"MINUS", "MUL", "DIV", "DOT", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
			"UNDERSCORE", "COMMI", "LETRA", "DIGITO", "STRING", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'programa'", "'procesar'", "'manejarError'", "'imprimir'", "'='", 
			"';'", "'+'", "'-'", "'*'", "'/'", "'.'", "'('", "')'", "'{'", "'}'", 
			"'_'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PROGRAMA", "PROCESAR", "MANEJARERROR", "IMPRIMIR", "EQ", "SEMI", 
			"PLUS", "MINUS", "MUL", "DIV", "DOT", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
			"UNDERSCORE", "COMMI", "LETRA", "DIGITO", "STRING", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public estructuraLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "estructura.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0015\u0081\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0005\u0013t\b\u0013\n\u0013\f\u0013w\t"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0004\u0014|\b\u0014\u000b"+
		"\u0014\f\u0014}\u0001\u0014\u0001\u0014\u0000\u0000\u0015\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015\u0001\u0000\u0004\u0002"+
		"\u0000AZaz\u0001\u000009\u0003\u0000\n\n\r\r\"\"\u0003\u0000\t\n\r\r "+
		" \u0082\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000"+
		"\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000"+
		"\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000"+
		"\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000"+
		"\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000"+
		"\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000"+
		"\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000"+
		"\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000"+
		"!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001"+
		"\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000"+
		"\u0000\u0000\u0001+\u0001\u0000\u0000\u0000\u00034\u0001\u0000\u0000\u0000"+
		"\u0005=\u0001\u0000\u0000\u0000\u0007J\u0001\u0000\u0000\u0000\tS\u0001"+
		"\u0000\u0000\u0000\u000bU\u0001\u0000\u0000\u0000\rW\u0001\u0000\u0000"+
		"\u0000\u000fY\u0001\u0000\u0000\u0000\u0011[\u0001\u0000\u0000\u0000\u0013"+
		"]\u0001\u0000\u0000\u0000\u0015_\u0001\u0000\u0000\u0000\u0017a\u0001"+
		"\u0000\u0000\u0000\u0019c\u0001\u0000\u0000\u0000\u001be\u0001\u0000\u0000"+
		"\u0000\u001dg\u0001\u0000\u0000\u0000\u001fi\u0001\u0000\u0000\u0000!"+
		"k\u0001\u0000\u0000\u0000#m\u0001\u0000\u0000\u0000%o\u0001\u0000\u0000"+
		"\u0000\'q\u0001\u0000\u0000\u0000){\u0001\u0000\u0000\u0000+,\u0005p\u0000"+
		"\u0000,-\u0005r\u0000\u0000-.\u0005o\u0000\u0000./\u0005g\u0000\u0000"+
		"/0\u0005r\u0000\u000001\u0005a\u0000\u000012\u0005m\u0000\u000023\u0005"+
		"a\u0000\u00003\u0002\u0001\u0000\u0000\u000045\u0005p\u0000\u000056\u0005"+
		"r\u0000\u000067\u0005o\u0000\u000078\u0005c\u0000\u000089\u0005e\u0000"+
		"\u00009:\u0005s\u0000\u0000:;\u0005a\u0000\u0000;<\u0005r\u0000\u0000"+
		"<\u0004\u0001\u0000\u0000\u0000=>\u0005m\u0000\u0000>?\u0005a\u0000\u0000"+
		"?@\u0005n\u0000\u0000@A\u0005e\u0000\u0000AB\u0005j\u0000\u0000BC\u0005"+
		"a\u0000\u0000CD\u0005r\u0000\u0000DE\u0005E\u0000\u0000EF\u0005r\u0000"+
		"\u0000FG\u0005r\u0000\u0000GH\u0005o\u0000\u0000HI\u0005r\u0000\u0000"+
		"I\u0006\u0001\u0000\u0000\u0000JK\u0005i\u0000\u0000KL\u0005m\u0000\u0000"+
		"LM\u0005p\u0000\u0000MN\u0005r\u0000\u0000NO\u0005i\u0000\u0000OP\u0005"+
		"m\u0000\u0000PQ\u0005i\u0000\u0000QR\u0005r\u0000\u0000R\b\u0001\u0000"+
		"\u0000\u0000ST\u0005=\u0000\u0000T\n\u0001\u0000\u0000\u0000UV\u0005;"+
		"\u0000\u0000V\f\u0001\u0000\u0000\u0000WX\u0005+\u0000\u0000X\u000e\u0001"+
		"\u0000\u0000\u0000YZ\u0005-\u0000\u0000Z\u0010\u0001\u0000\u0000\u0000"+
		"[\\\u0005*\u0000\u0000\\\u0012\u0001\u0000\u0000\u0000]^\u0005/\u0000"+
		"\u0000^\u0014\u0001\u0000\u0000\u0000_`\u0005.\u0000\u0000`\u0016\u0001"+
		"\u0000\u0000\u0000ab\u0005(\u0000\u0000b\u0018\u0001\u0000\u0000\u0000"+
		"cd\u0005)\u0000\u0000d\u001a\u0001\u0000\u0000\u0000ef\u0005{\u0000\u0000"+
		"f\u001c\u0001\u0000\u0000\u0000gh\u0005}\u0000\u0000h\u001e\u0001\u0000"+
		"\u0000\u0000ij\u0005_\u0000\u0000j \u0001\u0000\u0000\u0000kl\u0005\""+
		"\u0000\u0000l\"\u0001\u0000\u0000\u0000mn\u0007\u0000\u0000\u0000n$\u0001"+
		"\u0000\u0000\u0000op\u0007\u0001\u0000\u0000p&\u0001\u0000\u0000\u0000"+
		"qu\u0005\"\u0000\u0000rt\b\u0002\u0000\u0000sr\u0001\u0000\u0000\u0000"+
		"tw\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000"+
		"\u0000vx\u0001\u0000\u0000\u0000wu\u0001\u0000\u0000\u0000xy\u0005\"\u0000"+
		"\u0000y(\u0001\u0000\u0000\u0000z|\u0007\u0003\u0000\u0000{z\u0001\u0000"+
		"\u0000\u0000|}\u0001\u0000\u0000\u0000}{\u0001\u0000\u0000\u0000}~\u0001"+
		"\u0000\u0000\u0000~\u007f\u0001\u0000\u0000\u0000\u007f\u0080\u0006\u0014"+
		"\u0000\u0000\u0080*\u0001\u0000\u0000\u0000\u0003\u0000u}\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}