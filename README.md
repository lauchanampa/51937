# Creador

- **Nombre**: Lautaro Chanampa André Olivares  
- **Legajo**: 51937  
- **Tema**: 25914_5


## Analizador Sintáctico con ANTLR y Node.js

### Descripción

Este proyecto es un **analizador sintáctico** para un lenguaje de programación simple, creado con **ANTLR** y **Node.js**. El analizador procesa un archivo de entrada con instrucciones específicas y genera un **árbol de derivación** junto con los resultados de ejecución.

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

entrada.txt: El archivo de entrada donde podrás colocar los códigos de prueba. Hay ejemplos de entradas correctas e incorrectas que puedes utilizar.

#### 4. Probar el Proyecto
Opción 1: Usando F5
Presiona F5 para ejecutar el código en VS Code. Esto generará el árbol de derivación.

Opción 2: Usando la Consola
Si prefieres usar la consola, abre la terminal situandote en el archivo y ejecuta el siguiente comando:

node index.js

Esto generará tanto el árbol de derivación como el resultado de la ejecución según el contenido de entrada.txt.