import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{

  result = 0;

  // @ts-ignore
  cal(param1, param2, operator) {
    console.log(param2 + ',' + param1 + ',' + operator);
    param1 = Number(param1);
    param2 = Number(param2);
    if (isNumber(param1) && isNumber(param2)) {
      switch (getOperator(operator)) {
        case Operator.SUB:
          this.result = param1 - param2;
          break;
        case Operator.PLUS:
          this.result = param1 + param2;
          break;
        case Operator.MULTIPLE:
          this.result = param1 * param2;
          break;
        case Operator.DIVINE:
          this.result = param1 / param2;
          break;
      }
    } else {
      this.result = 0;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

enum Operator {
  PLUS,
  MULTIPLE,
  SUB,
  DIVINE
}

function isNumber(n:any) {
  return !Number.isNaN(Number(n));
}

// @ts-ignore
function getOperator(operator) {
  switch (operator) {
    case '+':
      return Operator.PLUS;
    case '-':
      return Operator.SUB;
    case 'x':
      return Operator.MULTIPLE;
    case ':':
      return Operator.DIVINE;
  }
}

