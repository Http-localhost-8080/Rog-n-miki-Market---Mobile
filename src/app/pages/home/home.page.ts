import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {ApiService} from '../../services/api/api.service';
import {ParameterService} from '../../services/parameter.service';
import {ToastService} from '../../services/toast.service';
import {LoadingService} from '../../services/loading.service';
import {Picture} from '../../../model/picture.model';
import {Router} from '@angular/router';
import {Article} from '../../../model/article.model';
import {LoginService} from '../../services/login/login.service';
import {AccountService} from '../../services/auth/account.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  account: Account;
  articles: Article[];

  constructor(
    public navController: NavController,
    private accountService: AccountService,
    private apiService: ApiService,
    private loginService: LoginService,
    public parameter: ParameterService,
    private alertCtrl: AlertController,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAccount();
    this.getAllArticles();
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  logout() {
    this.loginService.logout();
    this.goBackToHomePage();
  }

  private goBackToHomePage(): void {
    this.toastService.presentToast('Vous êtes déconnectés !');
    this.navController.navigateBack('');
  }

  getAccount() {
    if (this.parameter.getUserConnected() === undefined) {
      this.accountService.identity().then(account => {
        if (account === null) {
          this.goBackToHomePage();
        } else {
          this.account = account;
          this.parameter.setUserConnected(account);
          console.log(this.parameter.getUserConnected());
        }
      });
    }
  }

  getAllArticles() {
    this.apiService.getArticlesWithPictures().subscribe(
      response => {
        console.log(response.body);
        this.articles = response.body;
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllPictures() {
    this.loadingService.present();
    this.apiService.getAllPictures().subscribe(
      response => {
        console.log(response.body);
        this.articles = response.body;
        this.loadingService.dismiss();
      },
      error => {
        console.log(error);
        this.loadingService.dismiss();
      }
    );
  }

  async confirmLogout() {
    const alert = await this.alertCtrl.create({
      message: 'Voulez-vous vous déconnecter ?',
      mode: 'ios',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    return await alert.present();
  }

  onShowDetail(article: Picture) {
    this.parameter.setArticle(article);
    this.router.navigateByUrl('/detail-article');
  }
}
