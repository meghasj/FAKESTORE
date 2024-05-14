const fetchData = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products', { method: "GET" });
        if (!response.ok) {
            console.log('Network response was not ok');
        }
        let data = await response.json();
        const container = document.getElementById('product-container');
        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" style="width:300px; height:300px;">
                <h3>${product.title}</h3>
                <p>${product.description.substring(0,50)+"...."}</p>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.log('Error fetching data:', error);
    }
};

fetchData(); 