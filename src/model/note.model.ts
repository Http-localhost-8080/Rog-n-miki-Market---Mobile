import {IArticle} from './article.model';


export interface INote {
  id?: number;
  note?: number;
  article?: IArticle;
  user?: Account;
}

export class Note implements INote {
  constructor(public id?: number,
              public note?: number,
              public article?: IArticle,
              public user?: Account) {}
}
