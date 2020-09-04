import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-entry',
  templateUrl: './message-entry.component.html',
  styleUrls: ['./message-entry.component.css']
})
export class MessageEntryComponent implements OnInit {
  @Output() addMSG = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addMessage(){
    this.addMSG.emit("Hey this works!");
  }

  deleteMessage(){
    alert("Delete a message!");
  }

}
