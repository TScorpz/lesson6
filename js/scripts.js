$(document).ready(function(){
  var ToDoList = function(name) {
    this.el = list = document.querySelector('[data-list="' + name +'"]');
    this.childs = this.el.querySelectorAll('li');

    this.input = document.querySelector('[data-input="' + name +'"]');

    this.addEntry = function(entry) {
      this.el.innerHTML += '<li>' + entry + '</li>';
    }

    this.init = function() {
      this.addByInput();
      this.addByArray([]);
      this.changeStatus();
      this.removeCompleted();
      this.showAll();
      this.showActive();
      this.showCompleted();
    }
  }

  ToDoList.prototype.addByArray = function(array) {
    this.array = array;
    var list = this;
    array.forEach(function (item) {
      console.log(item);
      list.addEntry(item);
    });
  }

  ToDoList.prototype.addByInput = function() {
    this.input.addEventListener('keyup', function(e) {
      e.preventDefault();
      if(e.keyCode === 13 && e.target.value.length > 0) {
        this.addEntry(e.target.value);
        e.target.value = null;
      }
      $(".todo-ammount").html(updateTodoAmmount() + " jobs not done");
    }.bind(this));
  }

  ToDoList.prototype.removeCompleted = function() {
    var clearBtn = document.getElementsByClassName("button clear-all");
    clearBtn[0].addEventListener('click', function(e) {
      $('.completed').remove();
      $(".todo-ammount").html(updateTodoAmmount() + " jobs not done");
    });
  }

  ToDoList.prototype.changeStatus = function() {
    this.el.addEventListener('click', function(e) {
      if(e.target.nodeName === 'LI') {
        e.target.classList.toggle("completed");
        $(".todo-ammount").html(updateTodoAmmount() + " jobs not done");
      }
    }.bind(this));
  }

  ToDoList.prototype.showAll = function() {
    var showAllBtn = document.getElementsByClassName("button show-all");
    showAllBtn[0].addEventListener('click', function(e) {
      var elements = document.getElementsByTagName("li");
      for(var i = 0, len = elements.length; i < len; i++) {
        elements[i].classList.remove("hidden");
      }
    });
  }

  ToDoList.prototype.showActive = function() {
    var showActiveBtn = document.getElementsByClassName("button show-active");
    showActiveBtn[0].addEventListener('click', function(e) {
      var elements = document.getElementsByTagName("li");
      for(var i = 0, len = elements.length; i < len; i++) {
        if(elements[i].classList.contains("completed")) {
          elements[i].classList.add("hidden");
        }
        else {
          elements[i].classList.remove("hidden");
        }
      }
    });
  }

  ToDoList.prototype.showCompleted = function() {
    var showCompletedBtn = document.getElementsByClassName("button show-completed");
    showCompletedBtn[0].addEventListener('click', function(e) {
      var elements = document.getElementsByTagName("li");
      for(var i = 0, len = elements.length; i < len; i++) {
        if(!elements[i].classList.contains("completed")) {
          elements[i].classList.add("hidden");
        }
        else {
          elements[i].classList.remove("hidden");
        }
      }
    });
  }

  updateTodoAmmount = function() {
    var uncompleted = 0;
    var elements = document.getElementsByTagName("li");
    for (var i = 0, len = elements.length; i < len; i++) {
      if(!elements[i].classList.contains("completed")) {
        uncompleted++;
      }
    }
    return uncompleted;
  }

  var lists = {};

  lists.todos = lists.todos || new ToDoList('todos').init();
});
