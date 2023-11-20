const startWord = () => {
	let myword = document.getElementById("myword").value
	let word = document.getElementById("word").innerText

	let lastword = word[word.length - 1]
	let firstword = myword[0]

	if(lastword === firstword) {
		document.getElementById("result").innerText = "정답입니다!"
		document.getElementById("word").innerText = myword
		document.getElementById("myword").value = ""
	} else {
		document.getElementById("result").innerText = "땡!"
		document.getElementById("myword").value = ""
	}
}

const generateLottoNumbers = () => {
    let lottoNumbers = document.getElementById("lottoNumbers");

    let numbers = [];
    while (numbers.length < 6) {
        let randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
     lottoNumbers.innerHTML = numbers.map(num => `<span>${num}</span>`).join(" ");
}