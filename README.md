# naranja-challenge
> Task provided via Codility from NaranjaX

Se me solicitó la resolución de tres tareas utilizando código en *Javascript* corriendo sobre *Node.JS*

Las diferentes funciones creadas fueron utilizadas para correr testeos predefinidos con *Jest*, los cuales se intentarán reproducir de la forma más cercana a la planteada dentro de la plataforma de *Codility*.

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

Si se desea correr algún testeo en particular se puede realizar como
```
npm test -- <fileName> --verbose
```

## Primera tarea
Escribir una función que devuelva todos los números primos anteriores al número pasado por parámetro.

Prueba 1:

- Input: 30
- Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

Prueba 2:

- Input: 5
- Output: [2, 3]

Prueba 3:

- Input: 0
- Output: []

## Segunda tarea
Escribir una función que dado un número N, retorne el máximo valor posible al borrar uno de sus dígitos 5 de la representación decimal de N. Debe estar garantizado que N contenga al menos un dígito 5.

El rango de valores aceptados son entre [-999.995 y 999.995].

N cotiene al menos un dígito 5 y esta compuesto de al menos dos dígitos.

Ejemplos:
- Si el número ingresado es 15859 entonces la función deberá retornar el número 1859.
- Si el número ingresado es el -5752 entonces la función deberá retornar el número -572.
- Si el número ingresado es el -5000 entonces la función deberá retornar 0.

## Tercera tarea
Escribir una función que recibe un par de llave-valor (por ejemplo: { 3.5: 40 }) donde la llave es la nota y el valor es el porcentaje de la respectiva nota. La función retorna un objeto con dos propiedades:
- *accumulatedPercentage* es igual a la suma de todos los porcentajes
- *accumulatedNote* es igual a la suma de los productos de las notas con su respectivo porcentaje

Requerimientos:
- La función solo debe aceptar objetos. Arrays no estan permitidos.
- Llaves o valores *null*, *undefined* o vacíos no estan permitidos.
- Cada llave debe ser un número mayor que cero pero menor que cinco.
- Cada valor debe ser un número mayor que cero pero menor que cien.
- La suma total de valores no puede superar el cien.
- La salida debe ser si o si, un objeto con las propiedades *accumulatedPercentage* y *accumulatedNote* .
- Existirán errores particulares según las pruebas a realizar.