$(document).ready(function() {
  $('#root').append('<ul><li><span>Сделать задание #3 по web-программированию</span> <button class="remove">Удалить</button> </li></ul>');  
  $('#root').append('<input id="add_task_input"></input><button id="adder"></button>');
  
  $('#adder').click(function() {
    $('#root ul').append("<li><span> </span> <button class='remove'>Удалить</button> </li>");
    $('#root ul li:last-child span').text($("#add_task_input").val());
  });
  
  $('html').on("click", ".remove", function() {
    $(this).parent().remove();
  });
});