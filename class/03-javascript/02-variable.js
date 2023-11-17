const profile = {
    name: "철수",
    age: 1,
    school: "다람쥐초등학교"
}

if(profile.age >= 20){
    "성인"
}else if(profile.age >= 8){
    "학생"
}else if(profile.age > 0){
    "어린이"
}else {
	"잘못입력"
}

const children = ["철수","영희","훈이"]

for(let i = 0; i < 3; i ++){
    console.log(children[i]+"입니다")
}