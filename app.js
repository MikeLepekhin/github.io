$(document).ready(function() {
  $('#root').append('<ul><li><span>Сделать задание #3 по web-программированию</span> <button id="deleter">Удалить</button> </li></ul>');  
  $('#root').append('<input id="add_task_input"></input><button id="adder"></button>');
  
  $('#adder').click(function() {
    $('#root ul').append("<li><span> </span> <button id='deleter'>Удалить</button> </li>");
    $('#root ul li:last-child span').text($("#add_task_input").val());
  });
  
  $('#root ul li button').click(function() {
    $(this).parent().remove();
  });
});