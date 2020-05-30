import {IArticle} from './article.model';


export interface IPannier {
  id?: number;
  quantite?: number;
  priceTotal?: number;
  articles?: IArticle[];
}

export class Pannier implements IPannier {
  constructor(public id?: number, public quantite?: number, public priceTotal?: number, public articles?: IArticle[]) {}
}
