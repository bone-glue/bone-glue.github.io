const newsArray = [
    {
        title: "Welcome to my New Website!",
        content: "<p>Heya! If you're reading this post, that means you've not only found yourself on my humble, hand-crafted website, but you also have begun to explore it. Thank you!</p> <hr> <p>This website will serve as the cornerstone of all my creative projects, allowing you to follow updates, view my ever updating gallery of art pieces, and maybe more...? You can also contact me, whether you are a potential client, or you just wanted to reach out and say anything :v), my inbox is open. On top of that, there seems to be something odd in the 'GAME' page, maybe you can scout it out? (I'm too scared to)</p> <hr> <p>Happy browsing!</p>",
        moodimg: "news_happy.png",
        mood: "Excited!",
        date: "5/5/25",
    },
    
];
function createNewsItem(title,content,moodimg,mood,date) {
    let newsItem = document.getElementById("news-reel").appendChild(document.createElement("div"));
    newsItem.classList.add("news-item");
    let newsBlob = newsItem.appendChild(document.createElement("img"));
    let newsFace = newsItem.appendChild(document.createElement("img"));
    newsFace.classList.add("news-face");
    newsFace.src = "news/" + moodimg;
    newsBlob.classList.add("news-blob");
    newsBlob.src = "news/news_blob.png";
    let moodTextDiv = newsItem.appendChild(document.createElement("div"));
    moodTextDiv.classList.add("mood-text-div");
    let moodText = moodTextDiv
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("p"));
    let newsRec = newsItem.appendChild(document.createElement("div"));
    newsRec.classList.add("news-rec");
    let newsTitle = document.createElement("h2");
    let newsCont = document.createElement("div");
    newsRec.appendChild(newsCont);
    newsRec.insertBefore(newsTitle,newsCont);
    let newsDate = newsItem.appendChild(document.createElement("p"));
    newsDate.classList.add("date");
    newsCont.innerHTML = content;
    newsTitle.textContent = title;
    moodText.innerHTML = "<u>Feelin':<u><br>" + mood;
    newsDate.textContent = date;
}