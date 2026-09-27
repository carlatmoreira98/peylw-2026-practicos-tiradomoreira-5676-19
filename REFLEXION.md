# Reflexión Aplicada — Laboratorio 3

## 1. Código HTML del campo Código Postal

El código HTML utilizado para definir el campo del Código Postal es:

```html
<label for="codigo-postal">Código Postal:</label>
<input type="text" id="codigo-postal" name="codigo-postal"
       pattern="^[A-Z]\d{4}[A-Z]{3}$"
       title="Ingrese el código postal con una letra mayúscula, cuatro dígitos y tres letras mayúsculas. Ejemplo: R8500AAF">
```

El atributo `pattern` establece el formato que debe cumplir el código postal, mientras que `title` informa al usuario cuál es el formato requerido.

## 2. Uso de la etiqueta label

La etiqueta `<label>` sirve para identificar el campo de un formulario y describir qué dato debe ingresar el usuario. Se asocia correctamente a un campo mediante el atributo `for`, cuyo valor debe coincidir con el `id` del campo de entrada.

Por ejemplo, `<label for="nombre">Nombre:</label>` se asocia con el campo que tiene `id="nombre"`.

## 3. Comportamiento de los botones radio

Cuando varios botones `radio` comparten el mismo atributo `name`, forman un grupo de opciones excluyentes, por lo que solo se puede seleccionar una opción a la vez.

En cambio, cuando tienen diferentes valores de `name`, pertenecen a grupos distintos y se pueden seleccionar varias opciones, una de cada grupo.
