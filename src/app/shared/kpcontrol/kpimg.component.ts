import { Component, OnInit,Input } from '@angular/core';

export interface IKPImg
{
    Src: string;
    Tooltip: string;
    Class: string;
}

@Component({
    selector:'kp-img',
    template: `<img [src]='Property.Src' [class]="Property.Class" [title]='Property.Tooltip' [alt]='Property.Tooltip'/>`,
    styles:[' .headimg {border:1px solid #ccc; height:50px; width:100px; }']
})
export class KPImg implements OnInit
{
    @Input() Property:IKPImg;

    ngOnInit(){
        
    }
}