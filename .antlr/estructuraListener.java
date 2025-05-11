// Generated from c:/Users/chana/OneDrive/Documentos/Analizador/estructura.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link estructuraParser}.
 */
public interface estructuraListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link estructuraParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(estructuraParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(estructuraParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link estructuraParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(estructuraParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(estructuraParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link estructuraParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(estructuraParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(estructuraParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link estructuraParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignacion(estructuraParser.AsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignacion(estructuraParser.AsignacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link estructuraParser#excepcion}.
	 * @param ctx the parse tree
	 */
	void enterExcepcion(estructuraParser.ExcepcionContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#excepcion}.
	 * @param ctx the parse tree
	 */
	void exitExcepcion(estructuraParser.ExcepcionContext ctx);
	/**
	 * Enter a parse tree produced by {@link estructuraParser#bloque}.
	 * @param ctx the parse tree
	 */
	void enterBloque(estructuraParser.BloqueContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#bloque}.
	 * @param ctx the parse tree
	 */
	void exitBloque(estructuraParser.BloqueContext ctx);
	/**
	 * Enter a parse tree produced by {@link estructuraParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void enterImprimir(estructuraParser.ImprimirContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void exitImprimir(estructuraParser.ImprimirContext ctx);
	/**
	 * Enter a parse tree produced by {@link estructuraParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(estructuraParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(estructuraParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link estructuraParser#termino}.
	 * @param ctx the parse tree
	 */
	void enterTermino(estructuraParser.TerminoContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#termino}.
	 * @param ctx the parse tree
	 */
	void exitTermino(estructuraParser.TerminoContext ctx);
	/**
	 * Enter a parse tree produced by {@link estructuraParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(estructuraParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(estructuraParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link estructuraParser#identificador}.
	 * @param ctx the parse tree
	 */
	void enterIdentificador(estructuraParser.IdentificadorContext ctx);
	/**
	 * Exit a parse tree produced by {@link estructuraParser#identificador}.
	 * @param ctx the parse tree
	 */
	void exitIdentificador(estructuraParser.IdentificadorContext ctx);
}