# naranja-challenge
> Task provided via Codility from NaranjaX

Se me solicitó la resolución de tres tareas utilizando código en *Javascript* corriendo sobre *Node.JS*

Las diferentes funciones creadas fueron utilizadas para correr testeos predefinidos con *Jest*, los cuales se intentarán reproducir de la forma más cercana a la planteada dentro de la plataforma de *Codility*.

* * *

# Como correr

Para poder ejecutar el siguiente código, es necesario previamente poseer el entorno de ejecución de [*Node.JS*](https://nodejs.org/es/) (estas pruebas se corrieron bajo la versión 14.17.5)

Una vez clonado el repositorio, instalaremos todas las dependencias ejecutando

```
npm install
```

Finalmente, podemos correr todos nuestros testeos con el comando
```
npm test
```

* * *
## Primera tarea

Escribir una function que devuelva todos los números primos anteriores al número pasado por parámetro.

Prueba 1:

- Input: 30
- Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

Prueba 2:

- Input: 5
- Output: [2, 3]

Prueba 3:

- Input: 0
- Output: []