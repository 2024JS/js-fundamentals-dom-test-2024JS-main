// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

// Ваш код ..
const name = document.getElementsByClassName('arr')[0].value;
const phoneNumber = document.getElementsByClassName('arr')[1].value;
const dataOfBirth = document.getElementsByClassName('arr')[2].value;
const emailAddress = document.getElementsByClassName('arr')[3].value;

module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};
