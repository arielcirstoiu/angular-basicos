import { HeoreComponent } from './heroe/heroe.component';
import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeoreComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent //cosas que quiero hacer publicas
    ],
    imports: [
        //solo modulos
        CommonModule
    ]

})

export class HeroesModule{

}