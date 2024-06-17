const products = [
    {
        name: "Audifonos Sony WH-1000XM5",
        description: "En negro, azul no me gusta; si no hay, puede ser blanco.",
        imageUrl: "https://www.sony.com.gt/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        productUrl: "https://electronics.sony.com/audio/headphones/headband/p/wh1000xm5-b",
        acquired: false
    },
    {
        name: "Kit de limpieza de armas",
        description: "Ideal que tenga cepillos, seda para limpiar, pasta, lubricante, cepillos de metal, etc.",
        imageUrl: "https://cdn11.bigcommerce.com/s-bbli6tc1w6/images/stencil/original/products/668/4293/FG-SRS-9MM_PKG_REV221003_WEB__96250.1667924402.jpg?c=2",
        productUrl: "https://otistec.com/9mm-38-cal-357-pistol-cleaning-kit-with-brass-rod/",
        acquired: true
    },
    {
        name: "Beretta A300 Ultima Patrol",
        description: "Sencilla pero se agradecen accesorios",
        imageUrl: "https://0isznc85bj26dve98q0gl0q.blob.core.windows.net/hybris/images/1400Wx1400H/a300ultimaPatrol_listing001.webp",
        productUrl: "https://www.beretta.com/en-us/product/a300-ultima-patrol-FA0007",
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
        name: "Casco AGV K6S",
        description: "En blanco o negro, sin tanto diseño.",
        imageUrl: "https://i.ebayimg.com/images/g/-AoAAOSwzAFkJs8b/s-l1200.jpg",
        productUrl: "https://www.usa.philips.com/c-m-pe/oneblade-trim-edge-and-shave",
        acquired: false
    },
    {
        name: "Philips OneBlade",
        description: "Razuradora electrica, existe la versión pro pero siento que cualquiera esta bien.",
        imageUrl: "https://m.media-amazon.com/images/I/71jCSVxS9hL._AC_SL1500_.jpg",
        productUrl: "https://www.agv.com/es/es/agv/k6-s-full-face-helmet.html",
        acquired: false
    },
    {
        name: "Cortinas de cuarto",
        description: "Quiero oscurecer mi cuarto porque ando intentado crear un espacio mas óptimo para dormir, me faltan unas buenas cortinas para oscurecer y tapar la ventana",
        imageUrl: "https://m.media-amazon.com/images/I/71aA4icHEhL._AC_UF894,1000_QL80_.jpg",
        productUrl: "https://www.google.com",
        acquired: false
    },
    {
        name: "Termo/Pachón",
        description: "Termo pachon preferiria termo para llevar cosas calientes pero con un pachon salgo (los pachones que tengo ya estan viejos o son feos) y sinceramente no usare cosas calientes muuuy de vez en cuando",
        imageUrl: "https://walmartgt.vtexassets.com/arquivos/ids/465566/Termo-Mainstays-Doble-Pared-500-ml-1-22126.jpg?v=638419033615200000",
        productUrl: "https://www.google.com",
        acquired: false
    },
    {
        name: "Crocs/Chanclas",
        description: "Para ir a entrenar, ahorita uso los de mi hermano entonces ocupo comprar chanclas o crocs",
        imageUrl: "https://m.media-amazon.com/images/I/812KFeHotyL._AC_SL1500_.jpg",
        productUrl: "https://www.crocs.com/",
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
