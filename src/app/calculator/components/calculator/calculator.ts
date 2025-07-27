import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorBtn } from '../calculator-btn/calculator-btn';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorBtn],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Calculator {

}
