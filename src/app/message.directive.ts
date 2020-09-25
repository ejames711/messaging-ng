import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[message-dir]';
});

export class MessageDirective {
    constructor(public viewContainerRef: ViewContainerRef){};
}