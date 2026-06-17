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
        desc : "Gouache, Colored Pencils - 2024",
    },
    {
        img : "punypotluck_2.jpg",
        title : "Puny Potluck (Part 2)",
        desc : "Gouache, Colored Pencils - 2024",
    },
    {
        img : "punypotluck_3.png",
        title : "Itty-Bitty Banquet (Part 3)",
        desc : "Gouache, Colored Pencils - 2024",
    },
    {
        img : "well.png",
        title : "Well Painting",
        desc : "Gouache, Colored Pencils - 2024",
    },
    {
        img : "dogputer.png",
        title : "World Wide Woof",
        desc : "3D Model (Blender) - 2026",
    },
    {
        img : "doug.png",
        title : "The Dog in my Soul",
        desc : "Digital - 2026",
    },
    {
        img : "office_concept.png",
        title : "Game Concept",
        desc : "Digital - 2024",
    },
    {
        img : "color_mario.png",
        title : "Color Me (a.k.a. Moldy) Mario",
        desc : "Digital - 2024",
    },
    {
        img : "puppet_paint.png",
        title : "Puppet Character Painting 1",
        desc : "Gouache - 2024",
    },
    {
        img : "puppet_digital.png",
        title : "Puppet Character Painting 2",
        desc : "Digital - 2024",
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
    document.getElementById("largeImg").src = "graphics/loading_gif.gif";
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