import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/newsInterfaces';
//Plugins
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx'
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'], 
})
export class ArticleComponent implements OnInit {

  @Input() article:Article;
  @Input() index : number;

  constructor(private iab: InAppBrowser,
              private platform: Platform) { }

  ngOnInit() {}
  
  onClick(){
    
  }
  
  //open article in browser
  openArticle(){
    //open in browser in case that a phone ios or android
    if(this.platform.is('ios') || this.platform.is('android')){
      const browser = this.iab.create(this.article.url);
      browser.show;
      return;
    }
    //open in case that is a pc or laptop
    window.open(this.article.url,'_blank');
   
  }

}
