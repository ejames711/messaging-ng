import { Component, OnInit, OnDestroy, ViewChild, Input, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, ComponentRef
 } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit, OnDestroy {
  rcvMessage: string;
  @ViewChild("messagedir", {read:ViewContainerRef}) container;
  componentRef: ComponentRef<MessageComponent>; 

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  addMessage($event){
    this.rcvMessage=$event;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.container.createComponent(componentFactory);
    this.componentRef.instance.message = $event;
    this.componentRef.instance.username = "me";
    this.componentRef.instance.timestamp ="1234";
  }
}
