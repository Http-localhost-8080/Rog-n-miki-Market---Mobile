import {INote} from './note.model';
import {IPicture} from './picture.model';
import {ICity} from './city.model';
import {IEtat} from './etat.model';
import {IPannier} from './pannier.model';
import {Category} from './category.model';


export interface IArticle {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  createAt?: Date;
  notes?: INote[];
  pictures?: IPicture[];
  cities?: ICity[];
  etats?: IEtat[];
  users?: Account[];
  panniers?: IPannier[];
  category?: Category;
}

export class Article implements IArticle {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public price?: number,
    public createAt?: Date,
    public notes?: INote[],
    public pictures?: IPicture[],
    public cities?: ICity[],
    public etats?: IEtat[],
    public users?: Account[],
    public panniers?: IPannier[],
    public category?: Category
  ) {}
}
