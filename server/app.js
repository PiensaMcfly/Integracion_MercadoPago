const mp = new MercadoPago('YOUR_PUBLIC_KEY',{
    locale:"es-AR",
})

document.getElementById("checkout-btn").addEventListener("click", async()=>{

const orderData = {
    title: document.getElementById("name"),
    quanty:1,
    price:document.getElementById("price"),
};



})