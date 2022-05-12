import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/newsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private _storageArticle:Article[]=[];

  constructor(private storage:Storage) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
  
  async saveRemoveArticle(article:Article){
    this._storageArticle=[article,...this._storageArticle];//save article from the oldest to the newest
    this._storage.set('articles',this._storageArticle)
  }

}
