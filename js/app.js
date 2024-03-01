// Load Mobile Product Data
const loadPhones = async (searchText='13') => {
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

    // Display Show All Button if product > 9

    const showAllProductContainer = document.getElementById('showAllProductContainer');
    if(phones.length > 9) {
        showAllProductContainer.classList.remove('hidden');
    }
    else {
        showAllProductContainer.classList.add('hidden');
    }

    // display only 9 proudct
    phones = phones.slice(0,9);

    phones.forEach(phone =>{
        // console.log(phone);
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
            <button onclick="showDetails('${phone.slug}')">Show Details</button>
        </div>
        `
        // Step 4: appendChild
        productContainer.appendChild(productSingleCard);
    });

    // Hide search loading bar
    toggleSearchLoader(false);
}

// Show Product Details Handle
const showDetails = async (productID) => {
    // Load single product data
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${productID}`);
    const data = await response.json();
    displayProductSingleData(data.data);
}

// Display Product Data
const displayProductSingleData = (phone) => {
    console.log(phone);
    const modalPhoneName = document.getElementById('modal-phone-name');
    modalPhoneName.innerText = phone.name;
    // show modal
    productDetails.showModal();
}

// handle Search Button
const handleSearch = () => {
    toggleSearchLoader(true);
    const searchField = document.getElementById('searchInput');
    const searchText = searchField.value;
    loadPhones(searchText);
}

// Toggle Search Loader
const toggleSearchLoader = (isLoading) => {
    const loadingSpinner = document.getElementById('search-loader');
    if(isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}

loadPhones();