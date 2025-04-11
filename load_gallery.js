var galdiv;
var galimg;
var indiv;
var divArray = [ ];
for (let i = 0; i < artArray.length; i ++) {
    indiv = document.createElement("div");
    galdiv = document.createElement("div");
    galimg = document.createElement("img");
    indiv.classList.add("thumb-inside");
    galdiv.classList.add("thumbnail","shadow");
    galimg.src = "art/" + artArray[i].img;
    galdiv.setAttribute("onclick", "showLargeImage(artArray[" + i + "])");
    indiv.appendChild(galdiv);
    document.getElementById("gallery").appendChild(indiv);
    galdiv.appendChild(galimg);
}
document.addEventListener("keydown", (event) => {
    const key = event.key;
    switch (key) {
        case "ArrowLeft":
        case "Left":
            showLargeImage(artArray[curimg - 1]);
            break;
        case "ArrowRight":
        case "Right":
            showLargeImage(artArray[curimg + 1]);
            break;
    }
});