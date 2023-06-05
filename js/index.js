const ourServicesBtn = document.querySelector('.service-list-btns');
console.log(ourServicesBtn);

const ourServicesAllButtons = document.querySelectorAll(".service-list-btn")
console.log(ourServicesAllButtons);

ourServicesBtn.addEventListener("click", (e) => {


    for (let i = 0; i < ourServicesAllButtons.length; i++) {
        
      if (ourServicesAllButtons[i].classList.contains("service-btn-active")) {
        ourServicesAllButtons[i].classList.remove('service-btn-active');
      }
    }

    e.target.classList.add('service-btn-active');
    
})