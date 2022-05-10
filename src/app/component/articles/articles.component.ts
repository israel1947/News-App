import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/newsInterfaces';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  @Input() articles:Article[]=[];
 
  constructor() { }

  ngOnInit() {}

}
