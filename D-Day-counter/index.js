const messageContainer = document.querySelector("#d-day-message");
messageContainer.textContent = 'D-day를 입력해주세요'

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
		console.log('타이머 종료');
	} else if (isNaN(remainig)){
		console.log('xxx');
	}

	const remainigDate = Math.floor(remainig / 3600 / 24);
	const remainigHours = Math.floor(remainig / 3600) % 24;
	const remainigMin = Math.floor(remainig / 60) % 60;
	const remainigSec = Math.floor(remainig) % 60;

	console.log(remainigDate, remainigHours, remainigMin, remainigSec);
  };