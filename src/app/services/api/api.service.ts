import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../../../model/category.model';
import {Article} from '../../../model/article.model';
import {Picture} from '../../../model/picture.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static API_URL = environment.apiUrl;

  constructor(public http: HttpClient) {}

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(ApiService.API_URL + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(ApiService.API_URL + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(ApiService.API_URL + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(ApiService.API_URL + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(ApiService.API_URL + '/' + endpoint, body, reqOpts);
  }

  getCategories(): Observable<HttpResponse<Category[]>> {
    return this.http.get<Category[]> (`${ApiService.API_URL}/categories`, {observe: 'response'});
  }

  getAllArticles(): Observable<HttpResponse<Article[]>> {
    return this.http.get<Article[]> (`${ApiService.API_URL}/articles`, {observe: 'response'});
  }

  getAllPictures(): Observable<HttpResponse<Picture[]>> {
    return this.http.get<Picture[]> (`${ApiService.API_URL}/pictures`, {observe: 'response'});
  }

  getArticlesWithPictures(): Observable<HttpResponse<Article[]>> {
    return this.http.get<Article[]> (`${ApiService.API_URL}/search/articles/pictures`, {observe: 'response'});
  }
}
