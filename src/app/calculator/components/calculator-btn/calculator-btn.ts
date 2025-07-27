import { ChangeDetectionStrategy, Component, HostBinding, input, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-btn',
  imports: [],
  standalone: true,
  templateUrl: './calculator-btn.html',
  styleUrl: './calculator-btn.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorBtn {
  public isCommand = input(false, {
    transform: (value: boolean | '') => value === true || value === ''
  })
  public size = input('1',{
    transform: (value: '1'|'2' | '3' | '4') => {
      switch (value) {
        case '2':
          return 'w-2/4';
        case '3':
          return 'w-3/4';
        case '4':
          return 'w-4/4';
        default:
          return 'w-1/4';
      }
    }
  })

  @HostBinding('class') get hostClasses() {
    return `w-1/4 border-r border-b border-indigo-400 ${this.size()}`;
  }
}
