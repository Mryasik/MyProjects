  
    const icons = document.querySelectorAll(".fas");

    const inputs = document.querySelectorAll("input");

    const button = document.querySelector('.btn');


    icons.forEach((icon, index) => {
        icon.addEventListener("mousedown", () => {
            icon.classList.toggle("fa-eye");
            icon.classList.toggle("fa-eye-slash");
            
            if (inputs[index].getAttribute("type") === "password") {
                inputs[index].setAttribute("type", "text");
            } else {
                inputs[index].setAttribute("type", "password");
            }
        });
        icon.addEventListener("mouseup", () => {
            icon.classList.toggle("fa-eye");
            icon.classList.toggle("fa-eye-slash");
            if (inputs[index].getAttribute("type") === "text") {
                inputs[index].setAttribute("type", "password");
            } else {
                inputs[index].setAttribute("type", "text");
            }
        
    });
});

    button.addEventListener("click", (event) => {
        event.preventDefault();
        if (inputs[0].value === inputs[1].value){
            alert("You are welcome");
        } else {
            alert("Потрібно ввести однакові значення");
        }
        
    });

    //Є баг коли зажимаеш на іконці та прибераешь з поля інпут то воно не змінює назад, Підскажіть як вирішити будь ласка
    
    
    // Також можна зробити через click 

    // const icons = document.querySelectorAll(".fas");
    // const inputs = document.querySelectorAll("input");
    // const button = document.querySelector('.btn');
    
    // icons.forEach((icon, index) => {
    //     icon.addEventListener("click", () => {
    //         icon.classList.toggle("fa-eye");
    //         icon.classList.toggle("fa-eye-slash");
            
    //         if (inputs[index].getAttribute("type") === "password") {
    //             inputs[index].setAttribute("type", "text");
    //         } else {
    //             inputs[index].setAttribute("type", "password");
    //         }
    //     });
    // });
    
    // button.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     if (inputs[0].value === inputs[1].value){
    //         alert("You are welcome");
    //     } else {
    //         alert("Потрібно ввести однакові значення");
    //     }   
    // });
