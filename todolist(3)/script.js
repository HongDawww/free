const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector('#todo-list');

const savedTodoList = JSON.parse(localStorage.getItem('saved-items'));

const createTodo = function (storageData) {
	let todoContents = todoInput.value;
	if(storageData) {
		todoContents = storageData.constents
	}
	
	const newLi = document.createElement('li');
	const newSpan = document.createElement('span');
	const newBtn = document.createElement('button');
	
	newBtn.addEventListener('click',()=> {
		newLi.classList.toggle('complete');
		saveItemsFn();
	});

	newLi.addEventListener('dblclick', () => {
		newLi.remove();
		saveItemsFn();

	});

	if(storageData?.complete) {
		newLi.classList.add('complete');
	}

	newSpan.textContent = todoContents;
	newLi.appendChild(newBtn);
	newLi.appendChild(newSpan);
	todoList.appendChild(newLi);
	todoInput.value = '';
	saveItemsFn();
}

const keyCodeCheck = function () {
	if (window.event.keyCode === 13 && todoInput.value.trim() !== '') {
		createTodo();
	}
}

const deleteAll = function () {
	const liList = document.querySelectorAll('li');
	for(let i = 0; i < liList.length; i++) {
		liList[i].remove();
	}
	saveItemsFn();
};

const saveItemsFn = function () {
	const saveItems = [];
	for(let i = 0; i < todoList.children.length; i++) {
		const todoObj = {
			constents: todoList.children[i].querySelector('span').textContent,
			complete: todoList.children[i].classList.contains('complete')
		};
		saveItems.push(todoObj);
	}

	// 삼항 연산자로 변경

	saveItems.length === 0 
	? localStorage.removeItem('saved-items') 
	: localStorage.setItem('saved-items',JSON.stringify(saveItems));

	// if(saveItems.length === 0){
	// 	localStorage.removeItem('saved-items');
	// } else {
	// 	localStorage.setItem('saved-items',JSON.stringify(saveItems));
	// }

};

if(savedTodoList) {
	for(let i = 0; i < savedTodoList.length; i++) {
		createTodo(savedTodoList[i]);
	}
}

const weatherDataActive = function ({ location, weather }) {
	const locationNameTtag = document.querySelector('#location-name-tag');
	locationNameTtag.textContent = location;
}


const weatherSearch = function ({ latitude, longitude }) {
fetch(
	`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bea1fafc881ff0b75f67ce5bf4bdb9b1`
	)
	.then((res) =>{
		return res.json();
	})
	.then((json) => {
		const weatherData = {
			location: json.name,
			weather: json.weather[0].main
		}
		weatherDataActive(weatherData);
	})
	.catch((err) => {
		console.error(err)
	})	
}	

const accessToGeo = function ({ coords }) {
	const { latitude, longitude } = coords
	// shorthand property
	const positionObj = {
		latitude,
		longitude,
	};

	weatherSearch(positionObj);
};

const askForLocation = function () {
	navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
		console.log(err);
	});
};

askForLocation();

// const promiseTest = function () {
// 	return new Promise((resolver,reject) => {
// 		setTimeout(()=> {
// 			resolver(100); // pending상태로 2초 유지
// 			// reject('error');
// 		}, 2000);
// 	});
// }

// promiseTest().then((res)=>{
// 	console.log(res);
// });