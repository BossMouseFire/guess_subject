dictJSON = {};
fetch("http://127.0.0.1:5500/questions.json").then(async (response) => {
    dictJSON = await response.json();
    console.log(dictJSON)
});

searchKey = (index) => {
    for (let key in dictJSON) {
        dictJSON = dictJSON[key][index];
    }
};

funcYES = () => {
    searchKey(1);
    console.log(dictJSON);
};
funcNO = () => {
    searchKey(0);
    console.log(dictJSON);
};