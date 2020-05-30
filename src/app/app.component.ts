import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {MenuController, Platform} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {Category} from '../model/category.model';
import {ApiService} from './services/api/api.service';
import {Router} from '@angular/router';
import {ParameterService} from './services/parameter.service';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  categories: Category[];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private apiSerivce: ApiService,
    private router: Router,
    public parameter: ParameterService,
    private menuCtrl: MenuController,
    private lottieSplashScreen: LottieSplashScreen
  ) {
    this.categories = new Array<Category>();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      setTimeout(() => {
        this.lottieSplashScreen.hide();
      }, 0);
    });
    this.getCategories();
    this.initTranslate();
  }

  initTranslate() {
    const enLang = 'fr';

    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang(enLang);

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use(enLang); // Set your language here
    }

    // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
    //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    // });
  }

  getCategories() {
    this.apiSerivce.getCategories().subscribe(
      response => {
        this.categories = response.body;
      },
      error => {
        console.log(error);
      }
    );
  }

  onOpenHome() {
    this.menuCtrl.close();
    this.router.navigate(['home']);
  }
}
