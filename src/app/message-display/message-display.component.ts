import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {
@Input() rcvMessage: string;

  constructor() { 
  }

  ngOnInit(): void {
  }
  onMessageAdded(){
    
  }
}
