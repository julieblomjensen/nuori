const ProductListContainer = document.querySelector(".grid-products")

fetch(`https://dummyjson.com/products/category/beauty`)
.then((response) => response.json())
.then(data => {
    allData = currentDataSet = data;
    showProducts(allData);
})


    
function showProducts(allData){
    ProductListContainer.innerHTML = "";
    allData.products.forEach(element=> {
        console.log(element);
        ProductListContainer.innerHTML += ` <div class="product-card">
          <p class="brand-name">${element.brand}</p>
            <a href="product.html?id=${element.id}"><img src="${element.thumbnail}" alt="produkt" /></a>
          <p>${element.title}</p>
          <p>${element.price},-</p>
          <img class="basket-dark" src="assets/Basket dark.png" alt="basket" />
        </div>`;
    })}

    
  