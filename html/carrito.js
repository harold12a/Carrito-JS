// variables
const productos = [
    { id: 1, nombre: '#0001', precio: 70000, img: '../imagenes/bolsotejido.jpg' },
    { id: 2, nombre: '#0002', precio: 72000, img: '../imagenes/bolsos/bolso8.jfif' },
    { id: 3, nombre: '#0003', precio: 73000, img: '../imagenes/bolsos/bolso7.jfif' },
    { id: 4, nombre: '#0004', precio: 81000, img: '../imagenes/bolsos/bolso6.jfif' },
    { id: 5, nombre: '#0005', precio: 85000, img: '../imagenes/bolsos/bolso5.jfif' },
    { id: 6, nombre: '#0006', precio: 80000, img: '../imagenes/bolsos/bolso4.jfif' },
    { id: 7, nombre: '#0007', precio: 89000, img: '../imagenes/bolsos/bolso3.jfif' },
    { id: 8, nombre: '#0008', precio: 99000, img: '../imagenes/bolsos/bolso2.jfif' },
    { id: 9, nombre: '#0009', precio: 98000, img: '../imagenes/bolsos/bolso1.jfif' },
    { id: 10, nombre: '#0010', precio: 100000, img: '../imagenes/bolsos/bolso9.jfif' },
    { id: 11, nombre: '#0011', precio: 82000, img: '../imagenes/bolsos/bolso10.jfif' },
    { id: 12, nombre: '#0012', precio: 70000, img: '../imagenes/bolsos/bolso11.jfif' },
    { id: 13, nombre: '#0013', precio: 76000, img: '../imagenes/bolsos/bolso12.jfif' },
    { id: 14, nombre: '#0014', precio: 72000, img: '../imagenes/bolsos/bolso13.jfif' },
    { id: 15, nombre: '#0015', precio: 88000, img: '../imagenes/bolsos/bolso14.jfif' },
    { id: 16, nombre: '#0016', precio: 82000, img: '../imagenes/bolsos/bolso15.jfif' },
    { id: 17, nombre: '#0017', precio: 98000, img: '../imagenes/bolsos/bolso16.jfif' },
    { id: 18, nombre: '#0018', precio: 75000, img: '../imagenes/bolsos/bolso17.jfif' },
    { id: 19, nombre: '#0019', precio: 75000, img: '../imagenes/bolsos/bolso18.jfif' },
    { id: 20, nombre: '#0020', precio: 78000, img: '../imagenes/bolsos/bolso19.jfif' },
    { id: 21, nombre: '#0021', precio: 78000, img: '../imagenes/bolsos/bolso20.jfif' },
    { id: 22, nombre: '#0022', precio: 70000, img: '../imagenes/bolsos/bolso21.jfif' },
    { id: 23, nombre: '#0023', precio: 82000, img: '../imagenes/bolsos/bolso22.jfif' },
    { id: 24, nombre: '#00024', precio: 93000, img: '../imagenes/bolsos/bolso23.jfif' },
    { id: 25, nombre: '#0025', precio: 81000, img: '../imagenes/bolsos/bolso24.jfif' },
    { id: 26, nombre: '#0026', precio: 95000, img: '../imagenes/bolsos/bolso25.jfif' },
    { id: 27, nombre: '#0027', precio: 98000, img: '../imagenes/bolsos/bolso26.jfif' },


];

const contenedorProductos = document.querySelector('.contenedor-productos');
const listadoProductos = document.querySelector('.listado-productos');


// eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
})

// funciones

function mostrarProductos() {
    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('card');

        const imgProducto = document.createElement('img');
        imgProducto.src = producto.img;
        imgProducto.classList.add('imagen-producto');

        const tituloProducto = document.createElement('h3');
        tituloProducto.textContent = producto.name;

        const btn = document.createElement('button');

        btn.className = "btn btn-primary";
        btn.textContent = " Agregar a favorito";
        btn.onclick = () => {
            agregarAFavorito(producto.id);
        };

        divProducto.appendChild(imgProducto);
        divProducto.appendChild(tituloProducto);
        divProducto.appendChild(btn);

        listadoProductos.appendChild(divProducto);

    })

}

function agregarAFavorito(id) {
    const productoSeleccionado = productos.find(producto => producto.id === id);
    console.log(productoSeleccionado)

}