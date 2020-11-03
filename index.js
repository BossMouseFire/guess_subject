dictJSON = {};
let numQuesions = 0;
fetch("http://127.0.0.1:5500/questions.json").then(async (response) => {
    dictJSON = await response.json();
    console.log(dictJSON)
    for (let key in dictJSON) {
        document.getElementById('mainText').innerHTML = key;
    }
});
searchKey = (index) => {
    for (let key in dictJSON) {
        dictJSON = dictJSON[key][index];
        console.log('---', dictJSON);
    }
};

funcYES = () => {
    searchKey(1);
    numQuesions += 1;
    if (typeof dictJSON == 'string') {
        document.getElementById('mainText').innerHTML = dictJSON;
    } else {
        for (let key in dictJSON) {
            document.getElementById('mainText').innerHTML = key;
        }
    }
};
funcNO = () => {
    searchKey(0);
    numQuesions += 1;
    if (typeof dictJSON == 'string') {
        document.getElementById('mainText').innerHTML = dictJSON;
    } else {
        for (let key in dictJSON) {
            document.getElementById('mainText').innerHTML = key;
        }
    }
};