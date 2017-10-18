import { NgModule } from '@angular/core';
import { MainHeader } from './header.component';
import { KPImg,IKPImg } from '../kpcontrol/kpimg.component';
import { KPA,IKPA } from '../kpcontrol/kpanchor.component';


@NgModule({
    declarations:[MainHeader, KPImg,KPA],
    providers:[  ],
    imports:[  ]
})
export class ControlModule
{

}