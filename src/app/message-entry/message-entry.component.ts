import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-entry',
  templateUrl: './message-entry.component.html',
  styleUrls: ['./message-entry.component.css']
})
export class MessageEntryComponent implements OnInit {
  message: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  addMessage(){
    this.messageEvent.emit("Hey this is a message!");
  }

  deleteMessage(){
    alert("Delete a message!");
  }

}
