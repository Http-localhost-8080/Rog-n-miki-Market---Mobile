import {Note} from './note.model';
import {Pannier} from './pannier.model';

export class Account {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public notes: Note[],
    public panniers: Pannier[],
    public email: string,
    public firstName: string,
    public langKey: string,
    public lastName: string,
    public telephone: string,
    public typeCompte: string,
    public login: string,
    public imageUrl: string
  ) {}
}
