import { Component } from '@angular/core';
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 50),
      new Article('Vue.js', 'http://vuejs.io', 40),
      new Article('Ember', 'http://ember.com', 30),
    ]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(title.value, link.value);
    return false;
  }
}
