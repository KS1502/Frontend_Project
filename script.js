const SERVER_URL = "http://localhost:8080"

async function addUser (email, password){
    let newUser={
        email: email,
        password : password
    }
    let response = (await fetch(SERVER_URL + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }));
    let createdUser = await response.json();
    alert(createdUser);
}


 //Находим ссылки по их id
var loginLink = document.getElementById("loginLink");
var registrationLink = document.getElementById("registrationLink");
// Добавляем обработчики событий
loginLink.addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем стандартное действие (переход по ссылке)
    window.location.href = "login.html"; // Выполняем переход на страницу login.html
});
registrationLink.addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем стандартное действие (переход по ссылке)
    window.location.href = "registration.html"; // Выполняем переход на страницу registration.html
});

//perenapravljaet login/myprofile
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      // Простой пример проверки на валидность (замените на свою логику)
      if (email === 'manager@gmail.com' && password === 'Manager123!') {
          window.location.href = 'myprofile.html'; // Перенаправляем на страницу профиля
      } else {
          alert('Invalid email or password. Please try again.');
      }
  });
});

const express = require('express');
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Разрешенный источник
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Разрешенные HTTP-методы
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Разрешенные заголовки
  next();
});
// Другие настройки вашего сервера...
app.listen(8080, () => {
  console.log('Сервер запущен на порту 8080');
});


//Sapolenija travelbooking

 //Получаем элементы формы по их ID
const form = document.querySelector('form');
const destinationInput = document.getElementById('destination');
const departureDateInput = document.getElementById('departure-date');
const returnDateInput = document.getElementById('return-date');
const numberOfTravelersInput = document.getElementById('number-of-travelers');
// Обработчик события отправки формы
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
    // Получаем значения из полей ввода
    const destination = destinationInput.value;
    const departureDate = departureDateInput.value;
    const returnDate = returnDateInput.value;
    const numberOfTravelers = numberOfTravelersInput.value;
    // Выводим данные в консоль (здесь можно отправить данные на сервер или выполнить другие действия)
    console.log('Destination:', destination);
    console.log('Departure Date:', departureDate);
    console.log('Return Date:', returnDate);
    console.log('Number of Travelers:', numberOfTravelers);
});

//Registration
document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.querySelector('form');
  registrationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      // В этом месте вы можете отправить данные на сервер для регистрации или выполнить другую логику.
      // Пример вывода данных в консоль (замените на вашу логику):
      console.log('Email:', email);
      console.log('Password:', password);
      // После успешной регистрации, перенаправьте пользователя на другую страницу, например, страницу профиля.
      window.location.href = 'myprofile.html';
  });
});