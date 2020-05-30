import {IArticle} from './article.model';


export interface IPicture {
  id?: number;
  nameContentType?: string;
  name?: any;
  article?: IArticle;
}

export class Picture implements IPicture {
  constructor(public id?: number, public nameContentType?: string, public name?: any, public article?: IArticle) {}
}
