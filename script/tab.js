'use strict'
function Tabs() {
    var bindAll = function() {
      var toggleElement = document.querySelectorAll('[data-tab]');
      
      for(var i = 0; i < toggleElement.length ; i++) {
        toggleElement[i].addEventListener('click', change, false);
      }
    }
  
    var clear = function() {
      var toggleElement = document.querySelectorAll('[data-tab]');
      for(var i = 0; i < toggleElement.length ; i++) {
        toggleElement[i].classList.remove('active');
        var id = toggleElement[i].getAttribute('data-tab');
        document.getElementById(id).classList.remove('active');
      }
    }
  
    var change = function(e) {
      clear();
      e.target.classList.add('active');
      var id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
    }
  
    bindAll();
  }
var connectTabs = new Tabs();