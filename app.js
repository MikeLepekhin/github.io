$(document).ready(function() {
  $('#root').append('<ul><li><span>Сделать задание #3 по web-программированию</span> <button id="deleter">Удалить</button> </li></ul>');  
  $('#root').append('<input id="add_task_input"></input><button id="adder"></button>');
  
  $('#adder').click(function() {
    $('#root ul').append("<li><span> </span> <button id='deleter'>Удалить</button> </li>");
    $('#root ul li span').text($("#add_task_input").val());
  });
  
  $('#deleter').click(function() {
    $(this).parent().remove();
  });
});