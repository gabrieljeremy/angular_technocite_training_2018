import { Component, OnInit, HostBinding, Input } from '@angular/core';
// Pour pouvoir binder des données, il faut importer Input
// HostBinding : pouvoir attribuer des classes à des éléments HTML
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass= 'row';
  @Input() article: Article;

  // title: string;
  // link: string;
  // votes: number;
  constructor() {
    // this.votes = 30;
    // this.link = 'http://angular.io';
    // this.title = 'Angular the best framework of the universe';
    // this.article = new Article('Angular is the best', 'http://angular.io', 30);

  }

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
