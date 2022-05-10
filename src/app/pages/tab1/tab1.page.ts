import { Component, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/newsInterfaces';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public articles:Article[]=[];

  constructor( private newService:NewsService ) {}


  ngOnInit(): void {

    //call services of News fron newsServices
    this.newService.getTopHeandline()
    .subscribe(articles => this.articles.push(...articles));

    /* .subscribe((resp) =>{
      console.log(resp);
    }); */
    
  }

}
