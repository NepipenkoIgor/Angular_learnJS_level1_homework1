import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() public selectedRecreation: Recreation;

  constructor() { }

  public get temperature(): string {
    return (this.selectedRecreation) ? this.selectedRecreation.weather.temperature.toString() : '';
  }

  public get water(): string {
    return (this.selectedRecreation) ? this.selectedRecreation.weather.water.toString() : '';
  }

  public get additional_decription(): string {
    return (this.selectedRecreation) ? this.selectedRecreation.additional_decription.toString() : '';
  }

  ngOnInit() {
  }

}
