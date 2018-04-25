import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent {

  @Input() public selectedRecreation: Recreation;

  constructor() { }

  public get title(): string {
    return (this.selectedRecreation) ? this.selectedRecreation.social_info.title.toString() : '';
  }
  public get img(): string {
    return (this.selectedRecreation) ? this.selectedRecreation.social_info.img.toString() : '';
  }
  public get followers(): string {
    return (this.selectedRecreation) ? this.selectedRecreation.social_info.followers.toString() : '';
  }
  public get following(): string {
    return (this.selectedRecreation) ? this.selectedRecreation.social_info.following.toString() : '';
  }

}
