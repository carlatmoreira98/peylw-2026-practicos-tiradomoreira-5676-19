# TP4 - Reflexión sobre CSS avanzado y Responsive Design

## 1. ¿Cómo se logra la animación de rotación del logo?

La animación se realiza mediante la propiedad `transition`, que permite que la transformación ocurra de manera gradual. Al pasar el cursor sobre el logo, la propiedad `transform: rotateY(360deg)` lo hace girar sobre su eje vertical.

```css
.logo-curza {
    transition: transform 1s ease-in-out;
}

.logo-curza:hover {
    transform: rotateY(360deg);
}
```

## 2. ¿Por qué es necesario definir un color de fondo en un elemento con `position: sticky`?

El color de fondo evita que el texto y los elementos que se desplazan por detrás del título se vean a través de él. Esto mejora la legibilidad y permite distinguir claramente el encabezado mientras permanece fijo durante el desplazamiento.
