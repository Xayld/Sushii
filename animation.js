

const scroll = () => {
    const item = document.querySelectorAll(".row-item"); //получили все элементы

    const boxRolls = document.querySelector(".boxRolls");

    const glow = document.querySelector(".glow");
    
    let boxRollsTop = boxRolls.getBoundingClientRect().top; //получили расстояние до верха страницы

    let glowTop = glow.getBoundingClientRect().top; // от glow до верха страницы

    let windowHeigh = window.innerHeight; //получили высоту экрана
    if(boxRollsTop < windowHeigh){
        boxRolls.classList.add("boxRolls-visible");
        glow.classList.add("glow-visible")
    } else {
        boxRolls.classList.remove("boxRolls-visible");
        glow.classList.remove("glow-visible");
    }

    item.forEach((elem) => {
        let boxTop = elem.getBoundingClientRect().top
        console.log(boxTop)

        let windowHeigh = window.innerHeight; //высота экрана
        console.log(windowHeigh);

        if (boxTop < windowHeigh) {
            elem.classList.add("row-item-visible")
        } else {
            elem.classList.remove("row-item-visible")
        }
    });
}


scroll();
window.addEventListener("scroll", scroll);

