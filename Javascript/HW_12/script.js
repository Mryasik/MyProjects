
    const buttons = document.querySelectorAll('.btn');
    const blueBackground = `background-color: blue;`;
    const blackBackground = `background-color: black;`;

    function test(event) {
        const clickedButton = event.code == "Enter" ? event.code : event.code.slice(3);
        debugger
        buttons.forEach(btn => {
            if (btn.textContent == clickedButton ) {
                btn.style.cssText = blueBackground;
            } else {
                btn.style.cssText = blackBackground;
            }
        })
    }

    buttons.forEach((elem) => {
        elem.addEventListener ("mouseup", () => {
            buttons.forEach((btn) => {
                btn.style.cssText = blackBackground;
            });

            elem.style.cssText = blueBackground;
        });
    });

    document.addEventListener("keypress", (event) => test(event));