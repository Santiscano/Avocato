console.log('Happy hacking v2 :)')

const URL = 'https://platzi-avo.vercel.app/api/avo';
const URLbase = 'https://platzi-avo.vercel.app';

const appNode = document.getElementById('containerApp');

const fetchAguacates = async () => {
    const response =  await fetch(URL);
    const data = await response.json();
    const allItems = [];
    const render = data.data.map((item) =>{
        // crear nodos y estilizarlos
        const title = document.createElement('h2');
        title.className = 'text-lg';
        title.textContent = item.name;
        const price = document.createElement('div');
        price.className = "text-gray-600";
        price.textContent = item.price;
        const image = document.createElement('img');
        image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        image.src = `${URLbase}${item.image}`;
        // unir
        const titlePrice = document.createElement('div');
        titlePrice.className = "text-center md:text-left";
        titlePrice.append(title, price);

        const card = document.createElement('div');
        card.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300';
        card.append(titlePrice, image);

        allItems.push(card);
    })
    appNode.append(...allItems);
    console.log(data);
}
fetchAguacates();








