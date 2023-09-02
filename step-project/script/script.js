const servicesItem = document.querySelectorAll(".services-list-item");
const servicesCard = document.querySelectorAll(".service-content_card");


servicesItem.forEach(tab => {
    tab.addEventListener("click", () => {
    
        servicesCard.forEach((content) => {
            content.classList.remove("service-content_card_active")
        });

        servicesItem.forEach(t => {
            t.classList.remove("active");
        });

        const idElement = tab.getAttribute("data-service");
    
        const targetContent = document.getElementById(idElement);
        targetContent.classList.add("service-content_card_active");

        tab.classList.add("active");
    });
});





// button-work

const workButton = document.querySelector(".work-btn")
const block2 = document.querySelectorAll(".work-imgItem_block2")
const block3 = document.querySelectorAll(".work-imgItem_block3")

let clickCount = 0;

workButton.addEventListener("click", () => {
    const buttonLoad = document.querySelector("#btn-load");
    const preloader = document.querySelector(".preloader");

    buttonLoad.style.display = "none";
    preloader.style.display = "flex";

    setTimeout(() => {
        buttonLoad.style.display = "flex";
        preloader.style.display = "none";

        if (clickCount === 0) {
            block2.forEach((elem) =>{
                elem.classList.remove("none");
                elem.style.display = "flex";
            })
            clickCount = 1;
        } else if (clickCount === 1) {
            block3.forEach((elem) =>{
                elem.classList.remove("none");
                elem.style.display = "flex";
            })
            workButton.style.display = "none";
            clickCount = 0;
        }
    }, 1000);
});

// nav-work
const workNavitem = document.querySelectorAll(".work-list-item");
const workImgItem = document.querySelectorAll(".work-imgItem_container");
const divWorkList = document.querySelectorAll(".work-imgList")

    workNavitem.forEach(tab => {
        tab.addEventListener("click", () => {
        
            workImgItem.forEach((content) => {
                content.style.display ="none";
            });

            workNavitem.forEach(t => {
                t.classList.remove("work-list-item_active");
            });

            const idElement = "#" + tab.getAttribute("data-item");
            console.log(idElement);
            
            if(idElement == "#all"){
                workImgItem.forEach((content) => {
                    if(content.classList.contains("none")){
                        content.style.display = "none";
                    }else{
                        content.style.display = "flex";
                    }
                });
                workButton.style.display = "flex";
            }else{
                const targetContent = document.querySelectorAll(idElement);
                console.log(targetContent);
                targetContent.forEach((element) => {
                    element.style.display ="flex";
                })
                workButton.style.display = "none";
            }

            tab.classList.add("work-list-item_active");
        });
    });

// about
const aboutItem = document.querySelectorAll(".about-nav-item");
const aboutItemImg = document.querySelectorAll(".about-nav-item_img");
const aboutCard = document.querySelectorAll(".abot-card");
let count = 0;

aboutItem.forEach(tab => {
    tab.addEventListener("click", () => {

        aboutCard.forEach((content) => {
            content.style.display = "none";
        });
        aboutItemImg.forEach((img) => {
            img.classList.remove("about-nav-item_active")
        })

        const idElement = tab.getAttribute("data-name");
        const targetContent = document.getElementById(idElement);
        const idImg = "img-" + idElement;
        const targetImg = document.getElementById(idImg);
        
        count = Array.from(aboutCard).findIndex((elem) => elem.id == idElement);
    
        targetContent.style.display = "flex";
        targetImg.classList.add("about-nav-item_active");
    });

});


const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
console.log(arrowRight);
console.log(arrowLeft);



arrowRight.addEventListener("click", () => {

    aboutCard.forEach((content) => {
        content.style.display = "none";
    });
    aboutItemImg.forEach((img) => {
        img.classList.remove("about-nav-item_active")
    })
    
    count++;

    if (count == 4) {
        count = 0;
    }

    aboutCard[count].style.display = "flex";
});

arrowLeft.addEventListener("click", () => {

    aboutCard.forEach((content) => {
        content.style.display = "none";
    });
    aboutItemImg.forEach((img) => {
        img.classList.remove("about-nav-item_active")
    })
    
    count--;

    if (count < 0) {
        count = 3;
    }

    aboutCard[count].style.display = "flex";
});


