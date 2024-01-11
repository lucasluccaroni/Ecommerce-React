# Ecommerce en React
## _Proyecto final hecho para el curso de React de la plataforma Coderhouse_


Link al proyecto con deploy en Vercel :
[View Deployment](https://3era-entrega-proyecto-final.vercel.app/)


> Ecommerce donde se aplican conocimientos de React.
> Estilado PureCSS muy simple. Lo imporante de este proyecto es la logica programatica.

### Instalación
Leugo de clonar el repositorio, es necesario instalar las dependencias y hacer correr el servidor.

```sh
git clone https://github.com/lucasluccaroni/3era-entrega-proyecto-final.git
cd 3era-entrega-proyecto-final-react
npm install
npm run dev
```

`Archivo ".env.example" dentro del repositorio para copiar credenciales de su Firestore y dejar andando la aplicacion y hacer pruebas. (Quitar el .example)`

## Rutas de la aplicacion

### "/"
El home de la pagina. Esta ruta muestra el `<ItemListContainer/>`, que es un componente donde se enlistan todos los productos.

### "category/:categoryId"
Conduce al componente contenedor `<ItemListContainer/>` y se le aplica un filtro mediante parámetros URL para mostrar los productos la categoria seleccionada. Los mismos tienen un boton para ir a ver el detalle del mismo.

### `"detail/:productId"
Ruta que conduce al componente contenedor `<ItemDetailContainer/>`  que tiene el prodcto en detalle seleccionado, filtrado por parámetros por su ID. Dentro del mismo hay un componente `<ItemCount/>`, el cual da la funcionabilidad de agregar productos a nuestro carrito y luego ir al mismo para finalizar, modificar o eliminar la posible compra.

### "/cart"
Esta ruta conduce al carrito de compras de la aplicación. La misma se compone de un `<CartList/>` que contiene todos los productos agregados al carrito y dentro de este hay un componente `<CartItem/>`, el cual, ademas de mostrar la informacion del producto del carrito nos brinda un subtotal.
El cart puede concluirse mediante un boton que nos dirige a "Checkout" o la opcion de "Vaciar el carrito".

### "/checkout"
Ruta que conduce al componente `<Checkout/>` de salida de la aplicacion, donde dentro se encuentra el `<CheckoutForm>` y usuario completa el formulario para cargar una orden de compra con los productos seleccionados. Acto seguido se procesa la compra y se entrega un numero de orden al usuario. A su vez,la orden se guarda en la base de datos con los datos de la compra + el formulario.


## Tech
Se utilizan dependencias de las siguientes librerias:
 * Firebase
 * react-router-dom
 * react (predeterminada)
 * react-dom (predeterminada)
