// Load Mobile Product Data
const loadPhones = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await response.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

// Display Phones
const displayPhones = phones => {
    // Step 1: Get Card Container by ID
    phones.forEach(phone =>{
        // Step 2: Create a div in the Card Container
        // Step 3: Set Inner HTML
        // Step 4: appendChild 
    })
}














loadPhones();