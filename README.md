# Creador

- **Nombre**: Lautaro Chanampa André Olivares  
- **Legajo**: 51937  
- **Tema**: 25914_2


## Analizador Sintáctico con ANTLR y Node.js

### Descripción

Este proyecto es un **analizador sintáctico** para un lenguaje de programación simple, creado con **ANTLR** y **Node.js**. Lo que hace el código de "estructura.g4" es definir un lenguaje sencillo y estructurado orientado a la programación básica con soporte para variables, expresiones aritméticas, impresión en pantalla y manejo de errores mediante bloques try-catch personalizados.

### Aclaraciones Importantes

- Para ejecutar correctamente el proyecto, debes seguir los siguientes pasos:
  
#### 1. Clonar el Repositorio

En la consola, ejecuta el siguiente comando para clonar el repositorio:

git clone https://github.com/lauchanampa/51937.git

#### 2. Abrir el Proyecto en VS Code
Una vez clonado el repositorio, abre el proyecto en Visual Studio Code con:

cd 51937

code .

#### 3. Archivos Importantes
estructura.g4: El archivo que contiene la gramática ANTLR para el analizador.

entrada.txt: El archivo de entrada donde podrás colocar los códigos de prueba. Hay ejemplos de entradas correctas e incorrectas que puedes utilizar, lo que tienes que hacer para poder utilizar estos códigos, es simplemente entrar a esos archivos .txt, copiar su contenido y pegarlo en "entrada.txt", guardar los cambios y probarlo.

#### 4. Probar el Proyecto
Opción 1: Usando F5: 
Presiona F5 estando en "estructura.g4" para ejecutar el código en VS Code. Esto generará el árbol de derivación.

Opción 2: Usando la Consola: 
Si prefieres usar la consola, abre la terminal situandote en el archivo y ejecuta el siguiente comando:

node index.js

Esto generará el arbol de derivación, la tabla de tokens y lexemas, hará un análisis léxico y sintáctico, como también mostrara el resultado del programa de 'entrada.txt'.
##### Aclaración
Además para poder ver la tradución de el código fuente al lenguaje JavaScript, deberas necesariamente ejecutar el siguiente comando:

node index2.js

Es decir, creé un "index2.js" para poder ejecutar por separado la traducción, sino, me generaba problemas el "index.js".

Conclusión, con "node index.js" generarás el arbol de derivación, la tabla de tokens y lexemas, hará un análisis léxico y sintáctico, como también mostrara el resultado del programa de 'entrada.txt' y luego con "node index2.js" generarás la tradución de el código fuente al lenguaje JavaScript
