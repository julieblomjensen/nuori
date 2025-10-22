
const el = document.querySelector(".product-grid") || document.querySelector("#product-container");

// Hent id fra URL: product.html?id=1
const params = new URLSearchParams(window.location.search);
const id = params.get("id");


    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(product => {
      el.innerHTML = `
        <div class="product-container">
          <div class="products-img">
            <img src="${product.thumbnail || (product.images && product.images[0])}">
          </div>

        <div class="produkt-tekst">
          <p>${product.brand}</p>
          <h1>${product.title}</h1>
          <p class="product-price">${product.price},-</p>


            <div class="quantity-btn">
            <div class="quantity">
              <button class="minus">-</button>
              <span class="number">1</span>
              <button class="plus">+</button>
            </div>
            <button class="q-btn">Tilføj til kurv</button>
          </div>

         <h2 class="product-h2">Produktdetaljer</h2>

            <p>${product.description}</p>
          </div>
        </div>
      `;
    })

    

