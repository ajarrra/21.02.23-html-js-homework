//1. У нас есть массив ["Banana", "Cola", "Cat"] вывести их на страницу в виде карточек.
let example3 = document.querySelector(".card");
for (let i = 0; i < example3.length; i++) {
    let card = example3[i];

}

//2. У нас есть массив ["hand", "leg", "head", "finger", "eye"] вывести элементы массива в виде списка.

let hand = ["hand", "leg ", " head ", " finger", "eye"];
let example1 = document.createElement("ul")//создает эл но не заполняет 
document.body.prepend(example1);//заполняет 
for (i = 0; i < hand.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = hand[i];
    listItem.style.color = " rgb(178, 114, 238)"
    listItem.style.fontFamily = " 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
    example1.append(listItem)
}

//3. У нас есть массив ["hi", "hello", "bonjour"] вывести элементы массива в виде кнопок.
let hello = ["hi", "hello", " bonjour "];
let example2 = document.createElement("button")//создает эл но не заполняет 
document.body.append(example2);//заполняет 
for (i = 0; i < hello.length; i++) {
    let listItem = document.createElement("button");
    listItem.textContent = hello[i];
    listItem.style.color = "aliceblue"
    listItem.style.padding = "10px 15px"
    listItem.style.margin = "10px"
    listItem.style.backgroundColor = "rgb(152, 130, 130)"
    listItem.style.borderRadius = "30px"
    example2.append(listItem)
}

//У нас есть массив [["1", "2", "3", "4", "5", "6"], ["7", "8", "9", "10", "11", "12"], ["13", "14", "15", "16", "17", "18"], 
//["19", "20", "21", "22", "23", "24"], ["25", "26", "27", "28", "29", "30"]] вывести этот массив в виде таблицы.

let num = [["1", "2", "3", "4", "5", "6"], ["7", "8", "9", "10", "11", "12"], ["13", "14", "15", "16", "17", "18"],
["19", "20", "21", "22", "23", "24"], ["25", "26", "27", "28", "29", "30"]];
let example4 = document.createElement("table")
document.body.append(example4);
for (i = 0; i < num.length; i++) {
    let listItem = document.createElement("td");
    listItem.textContent = num[i];
    example4.append(listItem)
}



//У нас есть массив [["Table", "2", "3", "4", "5"], ["2", "4", "6", "8", "10"], ["3", "6", "9", "12", "15"],
// ["4", "8", "12", "16", "20"], ["5", "10", "15", "20", "25"]] вывести этот массив в виде таблицы.

let numm = [["Table", "2", "3", "4", "5"], ["2", "4", "6", "8", "10"], ["3", "6", "9", "12", "15"],
["4", "8", "12", "16", "20"], ["5", "10", "15", "20", "25"]];
let example5 = document.createElement("table")
document.body.append(example5);
for (i = 0; i < numm.length; i++) {
    let listItem = document.createElement("th");
    listItem.textContent = numm[i];
    example5.append(listItem)
}


