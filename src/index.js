console.log('Happy hacking :)')

const URL = 'https://platzi-avo.vercel.app/api/avo';
const URLbase = 'https://platzi-avo.vercel.app';

const appNode = document.getElementById('containerApp');

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN',{
        style: 'currency',
        currency: 'USD'
    }).format(price)

    return newPrice;
};
// web API
// window.fetch(URL)

// convertir en json
// .then(response => response.json())

// json => data => renderizar
// .then(data => console.log(data.data[0].name))

//Async & await
const fetchData = async () => {
    const response = await fetch(URL);
    const datos = await response.json();
    const allItems = []; // esto esta vacio porque se llenara con el map
    const renderAll = datos.data.map( item => {

        // imagen
        const imagen = document.createElement('img');   // document.body.appendChild(imagen);
        imagen.src = `${URLbase}${item.image}`;         // creo url base concateno con url API
        imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

        // titulo
        const titulo = document.createElement('h2');    // document.body.appendChild(titulo);
        titulo.textContent = item.name;                 // renderizo el titulo
        titulo.className = "text-lg ";

        // precio
        const precio = document.createElement('div');   // document.body.appendChild(precio); remplazo estos 3 por 1 append
        precio.textContent = formatPrice(item.price);   // renderizo precio
        precio.className = "text-gray-600"

        // Creamos un contenedor el título y el precio
        const precioYTitulo = document.createElement("div") 
        precioYTitulo.className = "text-center md:text-left";
        precioYTitulo.append(titulo, precio);               // appendChild solo pone 1 append varios
        
        // creamos y guardamos todo dentro de una tarjeta                         CICLO CREATIVO
        const tarjeta = document.createElement("div");                          //creamos
        tarjeta.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";//estilizamos
        tarjeta.append(imagen, precioYTitulo);                             //agregamos
        
        // agrego los contenedores a el array
        allItems.push(tarjeta)
    });
    // renderizo 1 sola vez el array y no 1 por cada ciclo
    appNode.append(...allItems);

    console.log(renderAll);
} 
fetchData();
