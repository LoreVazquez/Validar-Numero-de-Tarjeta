# Tarjeta de Crédito Válida #

## Descripción ##

Es una web que pide el número de una tarjeta de crédito y confirma su validez según el *algoritmo sw Luhn*.


## Pseudocódigo ##

En este apartado se describe la funcionalidad del programa en pasos.

1. Ingresar los 16 números de la tarjeta.

2. Validar entrada del número. No ingresar campo vacío.

3. Validar mediante una función si es correcto el número utilizando el *algoritmo de Luhn*.
  - Multiplicar por 2 las posiciones pares del número de 16 dígitos.
  - Los número mayores a 10 se suman sus 2 dígitos.
  - Se suman los 16 dígitos.
  - Se divide entre 10 y si el residuo es 0 es un número válido.


    4. Retorna si el número ingresado es válido o inválido.


## Diagrama de Flujo ##

Representación gráfica del flujo del programa.

![Diagrama de flujo](/assets/image/DiagramaFlujoValidarTarjeta.png)
