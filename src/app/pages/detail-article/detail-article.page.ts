import { Component, OnInit } from '@angular/core';
import {ParameterService} from '../../services/parameter.service';
import {Picture} from '../../../model/picture.model';
import {AlertController} from '@ionic/angular';
import {ToastService} from '../../services/toast.service';
import {Article} from '../../../model/article.model';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.page.html',
  styleUrls: ['./detail-article.page.scss'],
})
export class DetailArticlePage implements OnInit {
  article: Article;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    loop: true
  };

  constructor(
    private parameter: ParameterService,
    private alertCtrl: AlertController,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.article = this.parameter.getArticle();
  }

  async addPannier() {
    const alert = await this.alertCtrl.create({
      header: 'Quantité',
      inputs: [
        {
          name: 'quantite',
          type: 'number',
          min: 1,
          placeholder: 'Entrez la quantité'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('TEST');
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log(data.quantite);
            if (data.quantite < 1) {
              this.toastService.presentToast('Quantité invalide! Veuillez réessayer !');
            } else {
              // this.pannier.qte = data.quantite;
              // this.pannier.item = this.article;
              // this.parameter.addPannierProduct(this.pannier);
              this.toastService.presentToast('Article ajouté au pannier avec succès!');
            }
          }
        }
      ]
    });
    return await alert.present();
  }
}
