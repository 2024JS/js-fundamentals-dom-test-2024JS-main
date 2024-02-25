// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl
firstEl = document.getElementById('list').firstElementChild.innerHTML;
lastEl = document.getElementById('list').lastElementChild.innerHTML;
secondtEl = document.getElementById('list').children[1].innerHTML;
thirdtEl = document.getElementById('list').children[2].innerHTML;
fourthEl = document.getElementById('list').children[3].innerHTML;

module.exports = {
  firstEl,
  lastEl,
  secondtEl,
  fourthEl,
  thirdtEl,
};
