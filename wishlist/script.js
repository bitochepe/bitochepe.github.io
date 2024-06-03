const products = [
    {
        name: "Audifonos Sony WH-1000XM5",
        description: "En negro, azul no me gusta; si no hay, puede ser blanco.",
        imageUrl: "https://www.sony.com.gt/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        productUrl: "https://electronics.sony.com/audio/headphones/headband/p/wh1000xm5-b",
        acquired: false
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
        productUrl: "https://www.agv.com/es/es/agv/k6-s-full-face-helmet.html",
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
