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
  cantidad2:number=0
  cantidad3:number=0
  cantidad4:number=0
  cantidad5:number=0
  cantidad6:number=0
  total:number
  total2:number
  total3:number
  total4:number
  total5:number
  total6:number

  

  
  ngOnInit() {
  }



  nav(){
    this.router.navigate([''])
  }
  nav2(){
    this.router.navigate(['4'])
  }
  
  sumar(precio:number,nombreproducto:string,cant:number,tot:number){
    tot=cant*precio
    console.log(this.total); 
    console.log(this.cantidad);
    
  }
  restar(precio:number,nombreproducto:string,cant:number,tot:number){
    tot=cant*precio
    console.log(tot); 
    console.log(cant);    
  }
  comprar(precio:number, nombreproducto:string,cant:number,tot:number){    
    tot=cant*precio
    localStorage.setItem(nombreproducto,'$'+tot.toString()+'.00')
  }


  



  
}
