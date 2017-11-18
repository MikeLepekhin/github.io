var rt = document.getElementById('root');
rt.innerHTML = '<ul><li class="bad_li"> <span>Сделать задание #3 по web-программированию</span> <button id = "del_btn">Удалить</button> </li></ul>';
rt.innerHTML += '<input id="add_task_input"></input><button id="add_task">Добавить</button>';

var db = document.getElementById('del_btn');
var ab = document.getElementById('add_task');

db.addEventListener("click", function() {
  var elem = document.getElementById('bad_li');
  elem.parentNode.removeChild(elem);  
});

ab.addEventListener("click", function() {
  var nwText = document.getElementById('add_task_input').value;
  alert(nwText);
  document.getElementById('root').innerHtml += '<ul><li class="bad_li"> <span>' + nwText + '</span></li></ul>');
});