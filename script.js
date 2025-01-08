const container = document.getElementById('product-container');
const searchInput = document.querySelector("[data-search]");

const renderProducts = (filteredProducts) => {
  container.innerHTML = ''; 

  filteredProducts.forEach(product => {
    const productLink = document.createElement('a');
    productLink.href = `checkout.html?product=${encodeURIComponent(product.name)}`; 
    productLink.classList.add('product-link'); 

    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    productDiv.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = product.name;
    productDiv.appendChild(name);

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${product.rating.stars} (${product.rating.count} reviews)`;
    productDiv.appendChild(rating);

    const price = document.createElement('p');
    price.textContent = `₹ ${product.priceCents}`;
    productDiv.appendChild(price);

    productLink.appendChild(productDiv);

    container.appendChild(productLink);
  });
};

renderProducts(products);

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  renderProducts(filteredProducts);
});
