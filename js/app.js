// Load Mobile Product Data
const loadPhones = async (searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

// Display Phones
const displayPhones = phones => {
    // Step 1: Get Card Container by ID
    const productContainer = document.getElementById('product-container');
    // Clear product container before search new product
    productContainer.innerHTML = ''; 

    phones.forEach(phone =>{
        console.log(phone);
        // Step 2: Create a div in the Card Container
        const productSingleCard = document.createElement('div');
        productSingleCard.classList = `product-single`;
        // Step 3: Set Inner HTML
        productSingleCard.innerHTML = `
        <div class="product-thumbnail">
            <img src="${phone.image}">
        </div>
        <div class="product-content">
            <h2>${phone.phone_name}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <p class="product-price">$999</p>
            <button>Show Details</button>
        </div>
        `
        // Step 4: appendChild
        productContainer.appendChild(productSingleCard);
    })
}

// handle Search Button
const handleSearch = () => {
    const searchField = document.getElementById('searchInput');
    const searchText = searchField.value;
    loadPhones(searchText);
}

// loadPhones();