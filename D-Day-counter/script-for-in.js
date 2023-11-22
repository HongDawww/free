const messageContainer = document.querySelector("#d-day-message");
const conatiner = document.querySelector("#d-day-container");
// conatiner.style.display = 'none';
messageContainer.innerHTML = '<h3>D-day를 입력해주세요</h3>'

const dateFormMaker = function () {
	const inputYear = document.querySelector("#target-year-input").value;
	const inputMonth = document.querySelector("#target-month-input").value;
	const inputDate = document.querySelector("#target-date-input").value;

	const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
	return dateFormat;
  };

  const countMaker = function () {
	const targetDateInput = dateFormMaker();
	const nowDate = new Date();
	const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
	const remainig = (targetDate - nowDate) / 1000;
	
	if(remainig <= 0) {
		messageContainer.innerHTML = '<h3>측정 불가 !! <br> 과거 입니다</h3>'
	} else if (isNaN(remainig)){
		messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다!!</h3>'
	}

	const remainigObj = {
		remainigDate: Math.floor(remainig / 3600 / 24),
		remainigHours: Math.floor(remainig / 3600) % 24,
		remainigMin: Math.floor(remainig / 60) % 60,
		remainigSec: Math.floor(remainig) % 60
	}
	
	const documentObj = {
		days: document.getElementById('days'),
		hours: document.getElementById('hours'),
		min: document.getElementById("min"),
		sec: document.getElementById("sec")
	}

	// for -in문 으로 변경
	const timeKeys = Object.keys(remainigObj);

	let i = 0;
	for (let key in documentObj) {
		documentObj[key].textContent = remainigObj[timeKeys[i]];
		i++;
	}

  };