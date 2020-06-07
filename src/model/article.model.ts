import {INote} from './note.model';
import {IPicture} from './picture.model';
import {IEtat} from './etat.model';
import {IPannier} from './pannier.model';
import {ICity} from './city.model';
import {ICategory} from './category.model';


class IUser {
}

export interface IArticle {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  createAt?: Date;
  notes?: INote[];
  pictures?: IPicture[];
  city?: ICity;
  etat?: IEtat;
  users?: IUser[];
  panniers?: IPannier[];
  category?: ICategory;
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
    public city?: ICity,
    public etat?: IEtat,
    public users?: IUser[],
    public panniers?: IPannier[],
    public category?: ICategory
  ) {}
}
