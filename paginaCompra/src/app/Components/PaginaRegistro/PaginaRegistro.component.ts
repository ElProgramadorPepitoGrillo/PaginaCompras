import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-PaginaRegistro',
  templateUrl: './PaginaRegistro.component.html',
  styleUrls: ['./PaginaRegistro.component.css']
})
export class PaginaRegistroComponent implements OnInit {
  nombre:any
  correo:any

  constructor(private router:Router) { }

  ngOnInit() {
  }

  recibirdatos(){

  }
  NAV(){
    if (this.nombre='marco'&&this.correo=='pmarco@gmail.com') {      
    this.router.navigate(['3'])
    }
    else{
      this.router.navigate(['2'])
    }
  }

  
  

}
