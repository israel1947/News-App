import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from '../../interfaces/newsInterfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public categories:string[]=[
    'business', 
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ]

  public article:Article[]=[];

  //show a selected option by default
  public selectCategory:String = this.categories[2];


  constructor( private newService:NewsService) {}

  ngOnInit(): void {
  
     this.newService.getNewsByCategory(this.selectCategory)
      .subscribe(article =>{
        this.article =[...this.article, ...article]
      }); 
  }
  
  //get value for category when click in buttom
  segmentChanged(category:any){
    this.selectCategory = category.detail.value;//get value of button
    this.newService.getNewsByCategory(this.selectCategory)
    .subscribe(article =>{
      this.article =[ ...article]
      console.log(article);
    });
    
  }

  
}
 