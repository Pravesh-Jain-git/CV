const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

btn.addEventListener("click", () => {
    nav.classList.toggle("active")
    btn.classList.toggle("active")
})



function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    let itemlist = ["💲", "❤️", "♾️"]

    let rand = Math.floor(Math.random() * 3)
    heart.innerText = itemlist[rand];
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 - 4 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.fontSize = Math.random() * 23 + 9 + "px"
    setTimeout(() => {
        heart.remove();

    }, 4600);
}

setInterval(createHeart, 180);



