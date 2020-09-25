import { Component, OnInit, OnDestroy, ViewChild, Input, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MessageDirective } from '../message.directive';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit, OnDestroy {
  rcvMessage: string;
  @Input() messageElements: MessageComponent[];
  currentMsgIndex = -1;
  @ViewChild(MessageDirective, {static: true}) messagedir: MessageDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { \
  }

  ngOnInit(): void {
    this.loadMessages();
  }

  addMessage($event){
    this.rcvMessage=$event;
    let message = new MessageComponent($event);
    this.messageElements.push(message);
  }

  loadMessages(){
    this.currentMsgIndex = (this.currentMsgIndex) % this.messageElements.length;
  }
}
