import { Component,OnInit, DoCheck, OnDestroy } from "@angular/core";
import { Console } from "console";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit,  DoCheck, OnDestroy{
     titulo: string;
     listado: string;


    constructor(){
        console.log("se ha cargado el componente videojuego component");

        this.titulo = "HOli HOLI";
        this.listado = "Listado de los juegos mas populares"
    }

  

    ngOnInit(){
        console.log("OnInit partio");
    }

    ngDoCheck() {
        console.log("Do check bla bla bla");
    }

    ngOnDestroy(){
        console.log("onDestroy ejecutado muajajaja"); 
    }

    cambiarTitulo(){
        this.titulo = "nuevo Titulo del Componente";
    }
}