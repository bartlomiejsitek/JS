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


  var ex2_text = document.getElementById('ex2_text');
  ex2_text.oninput = function() {
    var ex2_content = document.getElementById('ex2_content');
    var value = ex2_text.value;

    if (value.length !== 9) {
      ex2_content.innerHTML = 'dlugosc musi byc rowna 9';
    } else if (!/^\d+$/.test(value)) {
      ex2_content.innerHTML = 'zawiera litery lub znaki specjalne';
    } else {
      ex2_content.innerHTML = 'numer telefonu jest poprawny';
    }
  }
})();