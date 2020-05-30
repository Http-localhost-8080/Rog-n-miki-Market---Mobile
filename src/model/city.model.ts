import {IArticle} from './article.model';


export interface ICity {
  id?: number;
  name?: string;
  articles?: IArticle[];
}

export class City implements ICity {
  constructor(public id?: number, public name?: string, public articles?: IArticle[]) {}
}
