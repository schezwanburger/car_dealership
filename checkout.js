const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('product');

window.addEventListener("load",()=>{
    document.querySelector('.car-name').innerText =  productName;
    products.forEach((product,index)=>{
    if(products[index].name === productName){
        document.querySelector(".car-price-rating").innerText = `₹ ${products[index].priceCents} | ${products[index].rating.stars} stars`;
        document.querySelector(".hero-section").style.backgroundImage = `url("${products[index].image}")`;
        document.querySelector(".hero-section p").innerText = `${products[index].name} by Ignite Wheelz`; 
        products[index].features.highlightIcons.forEach((feature)=>{
            document.querySelector(".product-details p").innerHTML += `${feature}, `
        })
        const details = document.querySelectorAll(".detail");
        details[0].innerText = `${products[index].transmission}` 
        details[1].innerText = `${products[index].engine}` 
        details[2].innerText = `${products[index].driveType}` 
        details[3].innerText = `${products[index].bodyType}` 
    }
})
})
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    
    const overlay = document.getElementById('overlay');
    const messageBox = document.getElementById('message-box');
    const messageContent = document.getElementById('message-content');
    messageContent.innerText = ` Dear Sir/Madam
        Thank you for your interest in ${productName} !
        
        You will receive a call from our side within 24 hours to disscuss the further process.
        
        Once the payment is done, you will receive your invoice on ${email}.

        And your order will be delivered to ${address}.`
    ;

    overlay.classList.remove("display-none");
    messageBox.classList.remove("display-none"); 

    document.getElementById('checkout-form').reset();

    document.getElementById('close-button').onclick = function() {
        messageBox.classList.add("display-none"); 
        overlay.classList.add("display-none");
        window.location.href = '/'; 
    };
});