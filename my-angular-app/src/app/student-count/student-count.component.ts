import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent {

  @Input()
  all:number | undefined;

  @Input()
  male:number | undefined;

  @Input()
  female:number | undefined;

  selectedRadioButtonValue:string = 'ALL';

  @Output()
  countRadioButtonSelectionChanged:EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange(){
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
  }

}
