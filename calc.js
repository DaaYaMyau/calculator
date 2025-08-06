document.addEventListener('DOMContentLoaded', () => {

    document.querySelector(".close-btn").addEventListener('click', () => {
        document.querySelector(".note").style.display = 'none';
        document.querySelector(".stars").style.display = 'block';
    })


    const display = document.querySelector(".display")
    const buttons = Array.from(document.querySelectorAll("button"))

    buttons.map((button) => {
        button.addEventListener('click', (e) => {
            switch (e.target.innerText) {
                case "AC":
                    display.innerText = "0";
                    break;

                case "del":
                    if (display.innerText.length > 1) {
                        display.innerText = display.innerText.slice(0, -1);
                    } else {
                        display.innerText = "0";
                    }
                    break;

                case "%":
                    display.innerText = eval(display.innerText + "/100");
                    break;

                case "÷":
                    display.innerText = display.innerText + "/";
                    break;

                case "X":
                    display.innerText = display.innerText + "*";
                    break;

                case "=":
                    display.innerText = eval(display.innerText).toFixed(3);
                    floatPoint = display.innerText.split(".")[1]
                    if (floatPoint == "000") {
                        display.innerText = display.innerText.split(".")[0]
                    }
                    break;

                default:
                    if (display.innerText == "0" && e.target.innerText !== ".") {
                        display.innerText = e.target.innerText;
                    } else if (display.innerText == "Infinity" || display.innerText == "NaN") {
                        display.innerText = e.target.innerText;
                    } else {
                        display.innerText += e.target.innerText;
                    }
            }
        })
    })



})
