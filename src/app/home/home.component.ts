import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    
    trigger('celeTab',[
      transition('* => *',[
        query(':enter',style({ opacity: 0}), {optional : true}),

        query(':enter', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            
          ]))]) , {optional : true}),

          query(':leave', stagger('300ms',[
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(-75%)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(0)', offset: 1}),
              
            ]))]) , {optional : true})




      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  // deklaracja zmiennych nazwa : typ = wartosc
liczbaItemow: number = 0;
btnTxt:       string = 'Dodaj item';
celTxt:       string = 'Mój pierwszy zyciowy cel';
// deklaracja tablicy, lub innej kolekcji danych
celeTab              = ['Skoczyć z bungee','Skoczyć ze spadochronem','Kupić pada do xboxa one i nakurwiac na telewizorze','Ruchać do upadłego'];

  constructor() { }

  ngOnInit() 
  {
    // uzycie funkcji count na tablicy
    this.liczbaItemow = this.celeTab.length;
  }

  // utworzenie funkcji dodajItem.
  dodajItem()
  {
    //uzycie funkcji push aby dodac na koniec tablicy wartosc przechowywana pod zmienną celTxt która jest wypełniana w
    //formularzu na stronie
    this.celeTab.push(this.celTxt);
    // wyzerowanie zmiennej po dodaniu do tablicy
    this.celTxt='';
    //uaktualnienie licznika celów
    this.liczbaItemow = this.celeTab.length;
  }

  usunItem(i)
  {
    //usuniecie z tablicy wiersza o indexie
    this.celeTab.splice(i,1);
    //uaktualnienie licznika celów
    this.liczbaItemow = this.celeTab.length;
  }

}
