const ourServicesBtn = document.querySelector('.service-list-btns');
console.log(ourServicesBtn);

const ourServicesAllButtons = document.querySelectorAll(".service-list-btn");
console.log(ourServicesAllButtons);

const serviceListDescription = document.querySelectorAll('.service-description-js');
console.log(serviceListDescription);

ourServicesBtn.addEventListener("click", (e) => {

    e.preventDefault();

    for (let i = 0; i < ourServicesAllButtons.length; i++) {
        
      if (ourServicesAllButtons[i].classList.contains("service-btn-active")) {
        ourServicesAllButtons[i].classList.remove('service-btn-active');
      }
    }

    e.target.classList.add('service-btn-active');

    for (let i = 0; i < serviceListDescription.length; i++) {

        console.log(serviceListDescription[i]);
        serviceListDescription[i].style.display = "none";

        if (serviceListDescription[i].dataset.name === e.target.dataset.name) {
            serviceListDescription[i].style.display = "block";
             }
    }

    

    
})