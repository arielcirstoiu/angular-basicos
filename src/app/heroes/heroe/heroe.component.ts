import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeoreComponent {
    nombre: string= 'IronMan'
    edad  : number = 25;

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'spiderman';
    }

    cambiarEdad(): void{
        this.edad = 55;
    }

}