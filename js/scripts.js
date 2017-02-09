$(document).ready(function() {
  todoNumber = 0;
  var completedJobs = 0;
  //add new item to the list
  $('#new-todo-textbox').on('keypress', function(e) {
    if(e.which === 13 && $(this).val() != "") {
      $('.container').find('li').append('<p><input type="checkbox" value="male" class="checkbox">' + $(this).val() + '</p>');
      todoNumber++;
      $(this).val('');
      if(!$('#todos-ammount').is(':visible')) {
        $('#todos-ammount').css('display', 'inline');
      }
      $('#todos-ammount').html(todoNumber - completedJobs + ' jobs left');
    }
  });
  //check if job is done and decorate text accordingly
  $('.container').on('click', '.checkbox',function() {
    if($(this).is(':checked')) {
      $(this).parent().addClass("completed");
      $('#todos-ammount').html(todoNumber - ++completedJobs + ' jobs left');
    }
    else {
      $(this).parent().removeClass("completed");
      $('#todos-ammount').html(todoNumber - --completedJobs + ' jobs left');
    }
    //check if no jobs are done then hide the "clear-completed-btn" button
    if(completedJobs == 0) {
      $('#clear-completed-btn').css('display', 'none');
    }
    else {
      $('#clear-completed-btn').css('display', 'inline');
    }
  });
  //clear all completed items
  $('.container').on('click', '#clear-completed-btn', function() {
    $('p').each(function(index, element) {
      if($(this).find(".checkbox").is(':checked')) {
        completedJobs--;
        todoNumber--;
        $(this).remove();
      }
      if(completedJobs == 0) {
        if(todoNumber == 0) {
          $('#todos-ammount').css('display', 'none');
        }
        $('#clear-completed-btn').css('display', 'none');
      }
    });
  });
  //"All" filter enabled
  $(".container").on('click', '#show-all-btn', function() {
    $('p').each(function(index, element) {
      $(this).removeClass("hidden");
      $(this).addClass("visible");
    });
  });
  //"Active" filter enabled
  $(".container").on('click', '#show-active-btn', function() {
    $('p').each(function(index, element) {
      $(this).removeClass("visible hidden");
      if($(this).hasClass("completed")) {
        $(this).removeClass("visible");
        $(this).addClass("hidden");
      }
    });
  });
  //"Completed" filter enabled
  $(".container").on('click', '#show-completed-btn', function() {
    $('p').each(function(index, element) {
      $(this).removeClass("visible hidden");
      if(!$(this).hasClass("completed")) {
        $(this).removeClass("visible");
        $(this).addClass("hidden");
      }
    });
  });
});
