//1. У нас есть массив ["Banana", "Cola", "Cat"] вывести их на страницу в виде карточек.



//2. У нас есть массив ["hand", "leg", "head", "finger", "eye"] вывести элементы массива в виде списка.

let hand = ["hand", "leg ", " head ", " finger", "eye"];
let example1 = document.createElement("ul")//создает эл но не заполняет 
document.body.prepend(example1);//заполняет 
for (i = 0; i < hand.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = hand[i];
    example1.append(listItem)
}

//3. У нас есть массив ["hi", "hello", "bonjour"] вывести элементы массива в виде кнопок.
let hello = ["hi", "hello", " bonjour "];
let example2 = document.createElement("button")//создает эл но не заполняет 
document.body.prepend(example2);//заполняет 
for (i = 0; i < hello.length; i++) {
    let listItem = document.createElement("button");
    listItem.textContent = hello[i];
    example2.append(listItem)
}