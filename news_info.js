const newsArray = [
    {
        title: "Website Making Progress!",
        content: "<p>Thats right folks! There has been a lot of progress on this website so far! Just a couple more thing left to make :-).</p>",
        moodimg: "news_happy.png",
        mood: "Excited!",
        date: "4/4/25",
    },
    {
        title: "Puppies 2",
        content: "<p>Large Puppies Are Sweet And Big and Sometimes Loud</p>",
        moodimg: "news_love.png",
        mood: "Puppy Love",
        date: "4/8/25",
    },
    {
        title: "Explode this Person",
        content: "<p>So I saw someone who shoved a large dog into the infinte suffer pit and liiiiiiiiiike... wierd right?</p> <hr> <p>So I'm making an executive order to have the man exploded exploded exploded, head to knee exploded. Whatever.</p>",
        moodimg: "news_roll.png",
        mood: "Fed. Up.",
        date: "4/24/25",
    },
    {
        title: "Used the Toilet",
        content: "<p>Had a tinkle winkle! Just a binkle dinkle :-)</p>",
        moodimg: "news_happy.png",
        mood: "Tee Hee",
        date: "The first thing ever.",
    },
    {
        title: "My Peons Continue to Defy Me",
        content: "<p>I'm not getting enough LIKES on my ART. I just want MONEY and to be FAMOUS. That's all art means to me... heh heh heh...</p><p>*peels grapes* touch this.</p>",
        moodimg: "news_mad.png",
        mood: "Betrayed",
        date: "99/99/9999",
    },
    {
        title: "im not mad",
        content: "<p>I am not mad, stop posting that I'm mad Im actulaly so chill</p><br> <p>stop</p>",
        moodimg: "news_cool.png",
        mood: "im so good",
        date: "1",
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