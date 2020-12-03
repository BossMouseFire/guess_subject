dictJSON = {};
let numQuesions = 0;
fetch("http://127.0.0.1:5500/track_questions.json").then(async (response) => {
    dictJSON = await response.json();
    for (let key in dictJSON) {
        document.getElementById('mainText').innerHTML = key;
    }
});
searchKey = (index) => {
    for (let key in dictJSON) {
        dictJSON = dictJSON[key][index];
        console.log(dictJSON);
    }
};
funcState = (index) => {
    searchKey(index);
    numQuesions += 1;
    for (let key in dictJSON) {
        if (typeof dictJSON[key] == 'string') {
            let buttons = document.getElementById('buttons');
            buttons.style.display = "none";
            let repeatDiv = document.getElementById('finish');
            repeatDiv.style.display = "flex";
            document.getElementById('numQuesions').innerHTML = String(numQuesions) + "/10";
            let textAnsew = document.getElementById('mainText');
            let answerDescription = document.getElementById('description');
            textAnsew.innerHTML = key;
            answerDescription.style.display = "block";
            descriptionText = dictJSON[key];
            if (descriptionText.length > 368) descriptionText = descriptionText.slice(0, 368) + '...';
            answerDescription.innerHTML = descriptionText;
            textAnsew.style.fontSize = "200%";
        } else {
            for (let key in dictJSON) {
                document.getElementById('mainText').innerHTML = key;
            }
        }
    }
}
funcRepeat = () => {
    window.location.reload();
}