import { Injectable } from '@angular/core';
import {Account} from '../../model/account.model';
import {Picture} from '../../model/picture.model';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {
  private userConnected: Account;
  private article: Picture;

  constructor() { }

  public setArticle(article: Picture): void {
    this.article = article;
  }

  public getArticle() {
    return this.article;
  }

  public setUserConnected(user: Account): void {
    this.userConnected = user;
  }

  public getUserConnected() {
    return this.userConnected;
  }
}
