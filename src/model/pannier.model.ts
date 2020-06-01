import {IArticle} from './article.model';


export interface IPannier {
  id?: number;
  quantite?: number;
  priceTotal?: number;
  articles?: IArticle[];
  user?: Account;
}

export class Pannier implements IPannier {
  constructor(public id?: number,
              public quantite?: number,
              public priceTotal?: number,
              public articles?: IArticle[],
              public user?: Account) {}
}
