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


  ngOnInit(): void {
  }

set Message(message:string){
  this.message = message;
}

set Username(username:string){
  this.username = username;
}

set Timestamp(timestamp:string){
  this.timestamp = timestamp;
}
}
