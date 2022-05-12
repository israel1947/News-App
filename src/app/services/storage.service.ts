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

  get getLocalArticles(){
    return [...this._storageArticle]
  }

  async init() {
    const storage = await this.storage.create(); 
    this._storage = storage;
    this.loadFavorites();
  }
  
  //save articles in the storage
  async saveRemoveArticle(article:Article){
    //verificar si el articulo se encuentra en la lista de favoritos
    const exist =  this._storageArticle.find(localStorage=>localStorage.title===article.title);
    if(exist){
      this._storageArticle = this._storageArticle.filter(localStorage=>localStorage.title !== article.title);
    }else{
      this._storageArticle=[article,...this._storageArticle];//save article from the oldest to the newest
    }
    this._storage.set('articles',this._storageArticle)
  }

  //load articles in the favorite page
  async loadFavorites(){
    try {
      const article = await this._storage.get('articles');
      this._storageArticle = article || [];
    } catch (error) {
      
    }
  }

  //how to know if an article is in favorites
  articleInFavorite(article:Article){
    return !!this._storageArticle.find(localStorage=>localStorage.title===article.title);
  }

}
