const products = [
    
    // {
    //     name: "attr",
    //     description: "attr",
    //     imageUrl: "attr",
    //     productUrl: "attr",
    //     acquired: false
    // },   
    {
        name: "Rompecabezas Ola de Hokusai",
        description: "Rompecabezas de la Ola de Hokusai. Si no hubiera unos dos o tres de 500 piezas para tener varios en el jugueton hay como de a 80 cada uno asi como el big ben, coliseo romano, taj mahal, etc. Si no tambien uno grande de unas 2000 piezas por ahi.",
        imageUrl: "https://siman.vtexassets.com/arquivos/ids/6196365-1600-auto?v=638632591151230000&width=1600&height=auto&aspect=true",
        productUrl: "https://gt.siman.com/clementoni-pzl-1000-museo-la-grande-ola-de-hokusai-104697767/p",
        acquired: false
    },
    {
        name: "Termo/Pachón",
        description: "Termo o pachon preferiria termo para llevar cosas calientes pero con un pachon salgo (No tengo pachon propio) y sinceramente no usare cosas calientes muuuy de vez en cuando. La idea es que quiero poder llevarlo y empezar a tomar mas agua",
        imageUrl: "https://walmartgt.vtexassets.com/arquivos/ids/465566/Termo-Mainstays-Doble-Pared-500-ml-1-22126.jpg?v=638419033615200000",
        productUrl: "",
        acquired: false
    },    
    {
        name: "Set lego",
        description: "Me gustan los lego pero como son algo caros y nunca he comprado uno de pocas piezas como el del AMG estaria bien",
        imageUrl: "https://cemacogt.vtexassets.com/arquivos/ids/716013-1600-1600?v=638445250146500000&width=1600&height=1600&aspect=true",
        productUrl: "https://www.cemaco.com/auto-de-carreras-mercedes-amg-f1-w14-pull-back-42165-technic-240-pzas-lego-1126442/p",
        acquired: false
    }, 
    {
        name: "Covertor para moto",
        description: "Covertor para moto o carro la cosa es cubrir mi moto par que no se este mojando porque se esa oxidando",
        imageUrl: "https://walmartgt.vtexassets.com/arquivos/ids/255743-1200-900?v=637832255597830000&width=1200&height=900&aspect=true",
        productUrl: "https://www.walmart.com.gt/cobertor-para-carro-auto-drive-talla-l-unidad/p",
        acquired: false
    }, 
    {
        name: "Jordan 4 Retro UNC",
        description: "El jordan 4 retro me gusta mucho, pero los unc son los que mas quiero. Hay otros colores y sería de verlos porque hay colores feos (como el morado)",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzD-XP_tIqYp0H8bVaISRwwfwXyl1ym5W4rQ&s",
        productUrl: "https://stockx.com/air-jordan-4-retro-university-blue",
        acquired: false
    },
    {
        name: "Cortinas de cuarto",
        description: "Quiero oscurecer mi cuarto porque ando intentado crear un espacio mas óptimo para dormir, me faltan unas buenas cortinas para oscurecer y tapar la ventana",
        imageUrl: "https://m.media-amazon.com/images/I/71aA4icHEhL._AC_UF894,1000_QL80_.jpg",
        productUrl: "https://www.google.com",
        acquired: false
    }, 
];

document.addEventListener('DOMContentLoaded', function() {
    renderWishlist();
});

function renderWishlist() {
    const wishlist = document.getElementById('wishlist');
    wishlist.innerHTML = ''; // Clear existing content

    products.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.classList.toggle('acquired', product.acquired);
        
        const productImage = document.createElement('img');
        productImage.src = product.imageUrl;
        productImage.alt = product.name;
        
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        
        listItem.appendChild(productImage);
        listItem.appendChild(productName);
        listItem.appendChild(productDescription);
        
        listItem.addEventListener('click', function() {
            window.open(product.productUrl, '_blank');
        });

        listItem.addEventListener('dblclick', function(event) {
            event.stopPropagation();
            toggleAcquired(index);
        });
        
        wishlist.appendChild(listItem);
    });
}

function toggleAcquired(index) {
    products[index].acquired = !products[index].acquired;
    renderWishlist();
}
