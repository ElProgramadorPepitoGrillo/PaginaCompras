import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-PaginaCompras',
  templateUrl: './PaginaCompras.component.html',
  styleUrls: ['./PaginaCompras.component.css']
})
export class PaginaComprasComponent implements OnInit {

  constructor(private router:Router) { }


  cantidad:number=0
  total:number

  

  
  ngOnInit() {
  }



  nav(){
    this.router.navigate([''])
  }
  nav2(){
    this.router.navigate(['4'])
  }
  
  sumar(precio:number,nombreproducto:string){
    this.total=this.cantidad*precio
    console.log(this.total); 
    console.log(this.cantidad);
    
  }
  restar(precio:number,nombreproducto:string){
    this.total=this.cantidad*precio
    console.log(this.total); 
    console.log(this.cantidad);    
  }
  comprar(precio:number, nombreproducto:string){    
    this.total=this.cantidad*precio
    localStorage.setItem(nombreproducto,this.total.toString())
  }


  



  
}
