import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/newsInterfaces';
//Plugins
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx'
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'], 
})
export class ArticleComponent implements OnInit {

  @Input() article:Article;
  @Input() index : number;

  constructor(private iab: InAppBrowser,
              private platform: Platform,
              public actionSheetController: ActionSheetController,
              private socialSharing: SocialSharing,
              private storageService:StorageService) { }

  ngOnInit() {}
  
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

  //action sheat elements 
  async onOpenMenu(){
    

    const normalBtn=[
      
      {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          this.onToogleFav();
        }
      }, 
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]

    const shareBtn =  {
      text: 'Share',
      icon: 'share-outline',
      handler: () => this.onSharerticle()
    }

    if(this.platform.is('capacitor')){
      normalBtn.unshift(shareBtn)
    }
    
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: normalBtn,
    });

  
    await actionSheet.present();
  }

  onSharerticle(){
    const {source,title,url}=this.article
    this.socialSharing.share(
     source.name,
     title,
     null,
     url
    );
  }

  onToogleFav(){
    this.storageService.saveRemoveArticle(this.article);
  }

}
