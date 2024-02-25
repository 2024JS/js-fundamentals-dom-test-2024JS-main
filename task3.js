
// Напишіть скрипт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()

function applyStyles() {
    const createElements = document.getElementsByClassName("create_elements");
    const newItem = document.createElement("main");

    newItem.classList.add('check', 'mainClass', 'item');
    createElements[0].append(newItem);

        
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'myDiv');
    newItem.append(newDiv);

    const newP = document.createElement('p');    
    newP.textContent = 'First paragraph';
    newDiv.append(newP);
}

module.exports = applyStyles;
