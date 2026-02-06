# SailorDental - E-commerce React + Firebase

Proyecto de tienda online desarrollada con **React js** y **Firebase** para el curso de CoderHouse de React.

---

## 🔧 Tecnologías usadas

- **React**: Librería para construir interfaces de usuario interactivas.
- **React Router**: Gestión de rutas y navegación entre componentes.
- **Bootstrap**: Framework CSS para crear interfaces responsive y modernas.
- **React Bootstrap**: Componentes Bootstrap reescritos en React.
- **Firebase**: Backend para almacenar productos, crear pedidos y autenticación de usuarios.

---

## Funcionalidades

**Listado de productos**  
- Los productos se obtienen desde Firestore en tiempo real.

**Filtro por categoría**  
- Las categorías de productos se cargan desde Firestore, y cada categoría muestra productos específicos. Al hacer clic en una categoría, se actualizan los productos en pantalla.

**Detalle de producto**  
- Muestra una vista detallada de cada producto. Esta vista incluye una imagen, nombre, descripción, y precio.
- Los usuarios pueden seleccionar la cantidad que desean comprar.

---

## Uso de rutas

- `/` → **Home**: Página principal que muestra todos los productos de la tienda.
- `/categoria/:categoria` → **Productos filtrados por categoría**: Página que muestra los productos de una categoría específica.
- `/item/:id` → **Detalle del producto**: Página que muestra el detalle de un solo producto, con la opción de agregar al carrito.
- `/carrito` → **Carrito de compras**: Página que muestra los productos agregados al carrito.
- `/checkout` → **Formulario de compra**: Página para que el usuario ingrese sus datos para completar la compra.
