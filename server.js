const express = require('express');
const app = express();
const port = 3000; // Вы можете выбрать любой доступный порт
// Маршрут обработки корневого URL
app.get('/', (req, res) => {
    res.send('Привет, мир!');
});
// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});