$(document).ready(function() {
  $('#new-todo-textbox').on('keypress', function(e) {
    if(e.which === 13) {
      $('.container').find('li').append('<p><input type="checkbox" value="male" class="checkbox">' + $(this).val() + '</p>');
      $(this).val('');
    }
  });
  $('.container').on('click', '.checkbox',function() {
    if(true) {

    }
  });
});
function findMarriedPeople(people){
    return people.filter(function(person){
        return person.married === true;
    });
}
