import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/services/login/login.service';
import {Account} from '../../../model/account.model';
import {ToastService} from '../../services/toast.service';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  // The account fields for the login form.
  account: { username: string; password: string; rememberMe: boolean } = {
    username: '',
    password: '',
    rememberMe: false
  };

  // Our translated text strings
  private loginErrorString: string;
  private user: Account;

  constructor(
    public translateService: TranslateService,
    public loginService: LoginService,
    private loading: LoadingService,
    public navController: NavController,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.translateService.get('LOGIN_ERROR').subscribe(value => {
      this.loginErrorString = value;
    });
  }

  doLogin() {
    this.loading.present();
    this.loginService.login(this.account).then(
      () => {
        this.loading.dismiss();
        this.toastService.presentToast('Bienvenue !', 'success');
        this.navController.navigateRoot('/home');
      },
      err => {
        // Unable to log in
        this.loading.dismiss();
        this.account.password = '';
        this.toastService.presentToast('Username ou mot de passe incorrecte !', 'danger');
      }
    );
  }
}
