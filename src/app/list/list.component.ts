import { Component } from '@angular/core';
import { recreation$ } from '../data/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  exportAs: 'recreationsList'

})
export class ListComponent {

  public recreations$: Observable<Recreation[]> = recreation$;
  public filterList: string[] = [];
  public applyFilterIndicator: boolean = false;
  private selectedRecreation: Recreation;

  public constructor() {
  }

  public getSelectedRecreation(): Recreation {
    return this.selectedRecreation;
  }

  public toggleFilter(filterName: string): void {
    if (this.filterList.includes(filterName)) {
      this.filterList.splice(this.filterList.indexOf(filterName), 1);
    } else {
      this.filterList.push(filterName);
    }

    this.applyFilterIndicator = !this.applyFilterIndicator;// special, because angular dont' check changes in array
  }

  public isFilterSelected(filterName: string): boolean {
    return this.filterList.includes(filterName);
  }


  public set setSelectedRecreation(recreation: Recreation) {
    this.selectedRecreation = recreation;
  }
}
