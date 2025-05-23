//New image info goes here :)
var curimg;
const artArray = [{
    img: "stairs.png",
    title: "Now & Then",
    desc: "Digital - 2025<br>Follow a nomad on their journey."
    },
    {
        img : "punypotluck_1.png",
        title : "Garden Gathering (Part 1)",
        desc : "Goache, Colored Pencils - 2024",
    },
    {
        img : "punypotluck_2.jpg",
        title : "Puny Potluck (Part 2)",
        desc : "Goache, Colored Pencils - 2024",
    },
    {
        img : "punypotluck_3.png",
        title : "Itty-Bitty Banquet (Part 3)",
        desc : "Goache, Colored Pencils - 2024",
    },
    {
        img : "well.png",
        title : "Well Painting",
        desc : "Goache, Colored Pencils - 2024",
    },
    {
        img : "character_select.gif",
        title : "Character Select",
        desc: "Digital, After Effects - 2023 <br> <a href='https://vimeo.com/849971519'>High Quality Version</a>",
    },
    {
        img : "mobos_wallpaper.png",
        title : "Wallpaper for mobOS",
        desc : "Digital - 2024",
    },
    {
        img : "shark.PNG",
        title : "Shark Illustration",
        desc : "Digital - 2023",
    },
    {
        img : "reading.png",
        title : "Reading",
        desc : "Digital - 2023",
    }];
function showLargeImage(obj) {
    document.getElementById("largeImg").src = "art/" + obj.img;
    document.getElementById("largeTitle").innerHTML = obj.title;
    document.getElementById("largeDesc").innerHTML = obj.desc;
    curimg = artArray.indexOf(obj);
    document.getElementById("largeImgHolder").style.display = "flex";
    if (curimg == (artArray.length - 1)) {
        document.getElementById("right").style.visibility = "hidden";
    } else{
        document.getElementById("right").style.visibility = "initial";
    }
        if (curimg == 0) {
        document.getElementById("left").style.visibility = "hidden";
    } else{
        document.getElementById("left").style.visibility = "initial";
    }
}