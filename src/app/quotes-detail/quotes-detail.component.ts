import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input() quotes: Quotes;
  @Output()isComplete = new EventEmitter <boolean>();

  
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  upvote = 0;
  downvote = 0;

  like() {
    this.upvote = this.upvote + 1;
  }
  unlike() {
    this.downvote = this.downvote + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
