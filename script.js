//First Task
const timeOfDay = prompt("Введите время суток (утро, день, вечер):");

if (typeof timeOfDay === "string" && timeOfDay.trim() !== "") {
   let drink;
   switch (timeOfDay.toLowerCase().trim()) {
      case "утро":
            drink = "кофе";
            break;
      case "день":
            drink = "чай";
            break;
      case "вечер":
            drink = "горячий шоколад";
            break;
      default:
            alert("Ошибка: введите 'утро', 'день' или 'вечер'.");
            break;
   }
   if (drink) {
      alert(`В это время суток лучше всего пить ${drink}.`);
   }
} else {
   alert("Ошибка: вы должны ввести корректное время суток.");
}

//Second Task

const person = {
	name: prompt("Введите ваше имя:"),
	age: Number(prompt("Введите ваш возраст:")),
	subject: prompt("Введите ваш любимый предмет:"),
	grade: prompt("Введите вашу оценку:"),
};

console.log("Изначальный объект:", person);

person.age += 5;

console.log("После увеличения возраста:", person);

//Third Task

const movies = [
	{ title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
	{ title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
	{ title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
	{ title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
	{ title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];

console.log("Режиссер второго фильма:", movies[1].director);

console.log("Жанр четвертого фильма:", movies[3].genre);

//Last Task

let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];

shoppingList.unshift("овощи");
console.log("После добавления в начало:", shoppingList);

shoppingList.pop();
console.log("После удаления последнего элемента:", shoppingList);

shoppingList.splice(2, 1, "йогурт", "орехи");
console.log("После замены третьего элемента:", shoppingList);