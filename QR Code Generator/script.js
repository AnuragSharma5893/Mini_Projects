const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

 generateBtn.addEventListener("click", () => {
    let qrvalue = qrInput.value;
    if(!qrvalue) return; //...if the input is empty then just return form here 
    generateBtn.innerText = "Generating QR Code..." 
    // getting a QR code of user enterd value using qrserver 
     // api and passing the api returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue} `;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
    
 });

 // removing the active class from wrapper of the input field is empty 

 qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
 });