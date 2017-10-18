import { Component, Input,ElementRef, OnInit } from '@angular/core';

export interface IKPA
{
    Class:string;
    LinkName: string;
    Href:string;    
}

@Component({
    selector:'kp-a',
    template:`
        <a [href]='Property.Href' [class]='Property.Class'>{{ Property.LinkName }}</a>
    `
})
export class KPA implements OnInit
{        
    @Input() Property:IKPA;

    ngOnInit() {

    }
}
