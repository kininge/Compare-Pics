import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pic } from 'src/modules/app/interfaces/pic';

@Component({
  selector: 'app-pic-stack',
  templateUrl: './pic-stack.component.html',
  styleUrls: ['./pic-stack.component.scss']
})
export class PicStackComponent implements OnInit 
{
  @Output() sendComparePics= new EventEmitter<Pic[]>();

  private page: number= 1;
  private stackOfPics: Pic[]= [];
  private presentPics: Pic[]= [];

  private comparedPics: Pic[]= [];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() 
  {
    // Get all pics from jsonplaceholder
    this.httpClient.get<Pic[]>("https://jsonplaceholder.typicode.com/photos")
    .subscribe
    (
      result=>
      {
        this.stackOfPics= result;

        for(const pic of this.stackOfPics)
        {
          if(pic.albumId=== this.page)
          {
            pic.isSelected= false;
            this.presentPics.push(pic);
          }
        }

        console.log(this.presentPics);
      },
      error=> 
      {
        console.log(error);
      }
    )
  }

  addOrRemovePic(forWhat: string, index: number, id: number)
  {
    let pic: Pic= this.presentPics[index];

    if(forWhat=== 'add')
    {
      this.presentPics[index].isSelected= true; 
      this.comparedPics.push(pic);
    }
    else
    {
      this.presentPics[index].isSelected= false;
      const ind: number= this.comparedPics.indexOf(pic);
      this.comparedPics.splice(ind, 1);
    }

    this.sendComparePics.emit(this.comparedPics);

  }

}
