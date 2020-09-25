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

  addMessage(msg:string){
    this.messageEvent.emit(msg);
  }

  clearMessageEntry(msgInput:HTMLInputElement){
    msgInput.value='';
  }

  deleteMessage(msgInput:HTMLInputElement){
    this.clearMessageEntry(msgInput);
  }

}
