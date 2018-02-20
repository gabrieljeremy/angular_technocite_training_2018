import { Component } from '@angular/core';
import { Article } from './article/article.model';
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
      new Article('Angular', 'https://www.angular.io', 50),
      new Article('Vue.js', 'https://www.vuejs.org', 40),
      new Article('Ember', 'https://www.emberjs.com', 30),
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new Article(title.value, link.value, Math.floor(Math.random() * 40)));
    title.value = ''; // efface les valeurs du formulaire
    link.value = '';
    // console.log(title.value, link.value);
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
