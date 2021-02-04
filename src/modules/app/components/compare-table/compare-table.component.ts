import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Pic } from 'src/modules/app/interfaces/pic';

@Component({
  selector: 'app-compare-table',
  templateUrl: './compare-table.component.html',
  styleUrls: ['./compare-table.component.scss']
})
export class CompareTableComponent implements OnInit, OnChanges 
{
  @Input() comparePicsList: Pic[]= [];
  private changeState: string= "icon";
  private tableTitle: string[]= ['Id', 'Photo', 'Title', 'URL'];
  
  constructor() { }

  ngOnChanges(chnage: SimpleChanges)
  {
  }

  ngOnInit() { }

  changeView()
  {
    if(this.changeState== 'icon')
    {
      this.changeState= 'table';
    }
    else
    {
      this.changeState= 'icon';
    }
  }

}
