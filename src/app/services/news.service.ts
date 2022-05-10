import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces/newsInterfaces';

//call the api key defined in the enviroment
const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
/*  'business', 
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology' */
  private articlesByCategory={
    
  }
  constructor(private http:HttpClient) { }

  //get all news
  getTopHeandline():Observable<Article[]>{
    return this.http.get<NewsResponse>(`${apiUrl}popularity`,
      { params:{apiKey}}
    ).pipe(
      map(resp => resp.articles) //getting the list of items
    );
  }

  //get news for category
  getNewsForCategory(category:String):Observable<Article[]>{
    return this.http.get<NewsResponse>(`${apiUrl}${category}`,
    { params:{apiKey}}
  ).pipe(
    map(resp => resp.articles) //getting the list of items
  );

  }
}
