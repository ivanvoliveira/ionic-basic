import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public post = {
    titulo: "Ivan Viana",
    date: "November 5, 1955",
    descricao: "Agora ta dando bom.",
    likes: 25,
    comentarios: 12,
    instante: "11h ago"
  };

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10, 99);
    this.movieProvider.getPopularMovies().subscribe(
      data=>{
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(data);
      }, error=>{
        console.log(error);
      });
  }

}
