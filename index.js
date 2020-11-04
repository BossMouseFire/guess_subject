dictJSON = {};
let numQuesions = 0;
fetch("http://127.0.0.1:5500/questions.json").then(async (response) => {
    dictJSON = await response.json();
    for (let key in dictJSON) {
        document.getElementById('mainText').innerHTML = key;
    }
});
searchKey = (index) => {
    for (let key in dictJSON) {
        dictJSON = dictJSON[key][index];
    }
};
funcState = (index) => {
    searchKey(index);
    numQuesions += 1;
    if (typeof dictJSON == 'string') {
        let buttons = document.getElementById('buttons');
        buttons.style.display = "none";
        let repeatDiv = document.getElementById('finish');
        repeatDiv.style.display = "flex";
        document.getElementById('numQuesions').innerHTML = String(numQuesions) + "/10";
        let textAnsew = document.getElementById('mainText');
        textAnsew.innerHTML = dictJSON;
        textAnsew.style.fontSize = "240%";
    } else {
        for (let key in dictJSON) {
            document.getElementById('mainText').innerHTML = key;
        }
    }
}
funcRepeat = () => {
    window.location.reload();
}