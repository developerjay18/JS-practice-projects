console.log('script running...');

// function which open whatsapp
function openWhatsapp() {
  let phoneNumber = '6351468706';
  let message = 'Hey, I want to hire you as my website developer';
  let whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, '_blank');
}

// fetching elements
let button = document.querySelector('button');

// calling event listner
button.addEventListener('click', () => {
  openWhatsapp();
});
