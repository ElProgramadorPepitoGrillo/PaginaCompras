import { NgForOf } from '@angular/common';
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
  cantidad7:number=0
  cantidad8:number=0
  
  total:number
  total2:number
  total3:number
  total4:number
  total5:number
  total6:number
  total7:number
  total8:number

  carro:any  
  

  
  ngOnInit() {
    this.clacula()
  }



  nav(){
    this.router.navigate([''])
  }
  nav2(){
    this.router.navigate(['4'])
  }
  
  sumar(precio:number,nombreproducto:string,cant:number,tot:number){
    tot=cant*precio
    this.clacula()
    
  }
  restar(precio:number,nombreproducto:string,cant:number,tot:number){
    tot=cant*precio
    console.log(tot); 
    console.log(cant);    
    this.clacula()
  }
  comprar(precio:number, nombreproducto:string,cant:number,tot:number){    
    tot=cant*precio
    localStorage.setItem(nombreproducto,'$'+tot.toString()+'.00')
    this.clacula()
  }

  clacula() {
    this.carro=0;
    for (const key in localStorage) {
      if (key.startsWith("Producto")) {
        let valor=localStorage[key];
        valor=valor.substring(1);
        this.carro = this.carro +  (+valor);//Convertir a number
        console.log(key, "Dato", valor);
      }
    }
    console.log(this.carro);
  }



  



  
}
