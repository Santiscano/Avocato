console.log('Happy hacking v2 :)')

const URL = 'https://platzi-avo.vercel.app/api/avo';
const URLbase = 'https://platzi-avo.vercel.app';

const appNode = document.getElementById('containerApp');

// llamada fetch
const fetchData = async () =>{
    const respuesta = await fetch(URL);
    const datos = await respuesta.json();
    console.log(datos);
    const allItems = [];
    const renderAll = datos.data.map(item =>{

        // titulo
        const titulo = document.createElement('h2');            // crear nodo
        titulo.className = 'text-lg'                           // estilizar
        titulo.textContent = item.name;                         // contenido

        // precio
        const precio = document.createElement('div');
        precio.className = "text-gray-600"
        precio.textContent = item.price;

        // imagen
        const imagen = document.createElement('img');
        imagen.src = `${URLbase}${item.image}`
        imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        
        // union titulo precio
        const precioYTitulo = document.createElement('div');
        precioYTitulo.className = "text-center md:text-left";
        precioYTitulo.append(precio, titulo) ;
        
        // union con imagen
        const tarjeta = document.createElement('div');
        tarjeta.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300';
        tarjeta.append(precioYTitulo, imagen);
        
        // push
        allItems.push(tarjeta);
    });
    appNode.append(...allItems);
}
fetchData();