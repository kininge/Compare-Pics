import { Component } from '@angular/core';
import { Pic } from '../../interfaces/pic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  private projectName: string = 'Compare-Pics';
  public comparePics: Pic[]= [];

  incomePics(pics: Pic[])
  {
    this.comparePics= pics;
  }
}
