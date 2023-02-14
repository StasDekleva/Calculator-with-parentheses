const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculator = []
let accumulativeCalculation

function calculate(button) {
    const value = button.textContent
    if(value === "C"){
        calculator = []
        screenDisplay.textContent = ''
    } 
    else if(value === "="){
        screenDisplay.textContent = eval(calculator.join(''))
    }
    else{
        calculator.push(value)
        accumulativeCalculation = calculator.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
}

function parentheses() {
    var sqrbrackets = [];
    let operation = '+';
    let number = 0;
    for (let i = id; i < s.length; i++) {
      let c=s[i];
      if (c>= '0' && c<= '9') {
        num=num * 10 + (c - '0');
      }
      if (!(c>= '0' && c <= '9') || i===s.length-1) {
        switch (operation) {
          case '+':
            sqrbrackets.push(number);
            break;
          case '-':
            sqrbrackets.push(number*-1);
            break;
        }
        operation = c;
        num = 0;
      }
    }
    let ans = 0;
    while (sqrbrackets.length > 0) {
      ans += sqrbrackets.pop();
    }
    return ans;
  }

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
