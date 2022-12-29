import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-PaginaCompras',
  templateUrl: './PaginaCompras.component.html',
  styleUrls: ['./PaginaCompras.component.css']
})
export class PaginaComprasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }



  nav(){
    this.router.navigate([''])
  }



  
}
