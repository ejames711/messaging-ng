import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: string;
  username: string;
  timestamp: string;

  constructor(message: any) {
    this.message = message;
    this.username = "me";
    this.timestamp = "1234";
   }

  ngOnInit(): void {
  }

}
