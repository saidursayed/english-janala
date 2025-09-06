const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(resData => displayLesson(resData.data))
}
loadLesson()

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWord(data.data))
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    // wordContainer.innerHTML = "";

    words.forEach(word => {
        // console.log(word)
        const card = document.createElement("div");
        card.innerHTML= `
            <p>${word.word}</p>
        `;
        
        wordContainer.append(card);
    });
}
const displayLesson = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";


    for (let lesson of lessons){
        // console.log(lesson)
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
            <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
        `
        levelContainer.append(btnDiv)
    }
    
}