import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recreation',
  templateUrl: './recreation.component.html',
  styleUrls: ['./recreation.component.css']
})
export class RecreationComponent implements OnInit {

  @Input() public recreation: Recreation;

  @Output() public emitSelectedRecreation: EventEmitter<Recreation> = new EventEmitter();

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public selectThisRecreation(): void {
    this.emitSelectedRecreation.emit(this.recreation);
  }

}
