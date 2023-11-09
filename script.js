const querryText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const GenerateBtn=document.getElementById('GenerateBtn');
const DownloadBtn=document.getElementById('DownloadBtn');
const querryContainer=document.querySelector('.qr-body');

let size=sizes.value;
GenerateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
});

DownloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        DownloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        DownloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    if(querryText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate your QR code");
    }
//     qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}

function generateQRCode(){
    querryContainer.innerHTML="";
    new QRCode(querryContainer,{
        text:querryText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}
