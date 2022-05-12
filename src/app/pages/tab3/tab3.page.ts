import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Article } from 'src/app/interfaces/newsInterfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  image:string="https://acortar.link/lsdVwO";

  get articles():Article[]{
    return this.storageService.getLocalArticles;
  }

  constructor( private storageService:StorageService) {}

}
 