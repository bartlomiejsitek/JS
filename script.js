(function() {
  var ex1_button = document.getElementById('ex1_button');
  ex1_button.onclick = function() {
    var numbers = [];
    for (var i = 0; i <= 9; i++) {
      numbers.push(i);
    }
    var ex1_content = document.getElementById('ex1_content');
    ex1_content.innerHTML = numbers.join(', ');
  }
})();