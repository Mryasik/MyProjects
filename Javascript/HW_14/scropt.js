const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const form = document.querySelector(".form-container");

let backgroundImage = localStorage.getItem("backgroundImage");

    function updateColor () {
        if (backgroundImage) {
        body.style.cssText = `
            background-image: none;
            background-color: #022263;
        `;
        form.style.cssText = `
            background: pink;
        `;
    } else {
        body.style.cssText = `
            background-image: url(./image/background.png);
            background-repeat: none;
            background-size: cover;
        `;
        form.style.cssText = `
            background: #FFF;
        `;
    };
    };

    updateColor ();

    button.addEventListener("click", () => {
        backgroundImage = !backgroundImage;
        localStorage.setItem("backgroundImage", backgroundImage);
        updateColor();
    });





