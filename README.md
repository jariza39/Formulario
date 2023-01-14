# Formulario
Este formulario es producto de una prueba realizada por una empresa llamada Sofka, en la cual se utilizaron las siguientes tecnologías: HTML, CSS, Bootstrap y JavaScript. Su objetivo es realizar validaciones en los campos de nombre, cédula, teléfono y email. Además, cuenta con un estilo aplicado cuando la validación falla y un campo de operación que hace una llamada a una API (https://api.mathjs.org/) para realizar operaciones matemáticas.

En los siguientes párrafos se describirá cómo se valida cada campo:

1.NOMBRE: Se valida que el nombre esté compuesto por al menos tres palabras y que cada una de ellas empiece con mayúscula.

2.CÉDULA: Se valida que la cédula sea mayor a 1000000000.

3.TELÉFONO: Se valida que el teléfono inicie con 3 y tenga una longitud de 10 dígitos.

4.EMAIL: Se valida que el email sea válido.

5.OPERACIÓN: En este campo se valida que tenga una operación matemáticas, pero cuenta con un botón con un icono de igualdad que al presionarlo, consume una API utilizando el método GET para realizar operaciones matemáticas y mostrar el resultado en pantalla.

Este formulario es una herramienta útil para la recolección de información del usuario, asegurando la calidad de los datos recolectados mediante las validaciones mencionadas anteriormente.