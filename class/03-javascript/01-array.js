let classmates = [ "철수","영희","훈이"]
classmates
classmates[0]
classmates[1]
classmates[2]
classmates.includes("훈이")
classmates.includes("맹구")
classmates.length
classmates.push("맹구")

let developer = ["프론트","백","자바스크립트","디자인","취업"];
console.log(developer[0]);

let dream = ["커리어점프","성공","할수있다"];
developer.concat(dream)

let result = developer.concat(dream)

console.log(result)

const email = "codecamp@gmail.com"

email.includes("@")
//  email 형식인지 확인

email.split("@")
//  분리

let userMail = email.split("@")[0]

let company = email.split("@")[1]

let maskingMail = []

maskingMail.push(userMail[0])

maskingMail.push(userMail[1])

maskingMail.push(userMail[2])

maskingMail.push(userMail[3])

maskingMail.push("*")

maskingMail.push("*")

maskingMail.push("*")

maskingMail.push("*")

maskingMail.join("")


let res = maskingMail.join("") + "@" + company
