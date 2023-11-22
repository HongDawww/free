let persons = [
	{name: "철수",age: 17},
	{name: "영희",age: 22},
	{name: "도우너",age: 5},
	{name: "그루트",age: 65},
	{name: "도비",age: 3}
]

for(let count = 0; count < persons.length; count++) {
	if(persons[count].age >= 19) {
		console.log(persons[count].name + " " + "성인");
	} else{
		console.log (persons[count].name + " " + "미성년");;
	}
}

const fruit = [
    {number: 1, title: "레드향1"}, 
    {number: 2, title: "레드향2"}, 
    {number: 3, title: "레드향3"}, 
    {number: 4, title: "레드향4"}, 
    {number: 5, title: "레드향6"}, 
    {number: 6, title: "레드향6"}, 
    {number: 7, title: "레드향7"}, 
    {number: 8, title: "레드향8"}, 
    {number: 9, title: "레드향9"}, 
    {number: 10, title: "레드향10"}
]

for(let i = 0; i < fruit.length; i++) {
	console.log(fruit[i].number + " " + fruit[i].title)
}


for(let i = 0; i < fruit.length; i++) {
	console.log(`${fruit[i].number} ${fruit[i].title}`)
}