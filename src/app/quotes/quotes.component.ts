import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
  

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';

  quotes = [
    new Quotes(1, 'David', 'Martin Luther King', 'True success is impacting the world with the investment within your personality', new Date(2019,0,12)),
    new Quotes(2, 'Melvin', 'Gay Jones', 'Go big or simply go home', new Date(2019,2,16)),
    new Quotes(3, 'John', 'Canta Makenzi', 'Our greatest fear is not that we are inadequate but that we are powerfull, our playing small does not serve the world in anyway', new Date(2019,4,5)),
    new Quotes(4, 'Lulu', 'Tobias', 'stay hungry and stay foolish', new Date(2019,1,15))
  ]

  addNewQuote(quotes) {
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength + 1;
    this.quotes.push(quotes)

  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].publisher}`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
