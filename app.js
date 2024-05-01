function btnVal(val){
    display.value += val;
}


function clearDisplay() {
    document.getElementById('display').value = '';
  }


  function correction() {
    var display = document.getElementById('display');
    var currentValue = display.value;

    if (currentValue.length > 0) {

        display.value = currentValue.slice(0, -1);
    }
}

function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }