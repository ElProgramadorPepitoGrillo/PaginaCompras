import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-PaginaPago',
  templateUrl: './PaginaPago.component.html',
  styleUrls: ['./PaginaPago.component.css']
})
export class PaginaPagoComponent implements OnInit {

  constructor() { }
  cantidades= []
  descripciones= []
  totales = []
  precios = []



  ngOnInit() {
    this.recuperarDatos()
  }

  recuperarDatos(){
    console.log('ingresa');
    
    for (const key in localStorage) {
      if (key.startsWith("Producto")) {
        let valor=localStorage[key];
        console.log(key, "Dato", valor);
        let partes=valor.split('#');//separar el valor del key en arrays con el metodo split y un #
        console.log(partes);
        if (partes.length==3){
          let l_cantidad=+partes[1];
          if(l_cantidad!=0){
          this.totales.push(+partes[0]);            
          this.cantidades.push(l_cantidad)
          this.precios.push(partes[2])
          if (key=='Producto1'){
          this.descripciones.push('Mouse')
          }
          if(key=='Producto2'){
            this.descripciones.push('Teclado de Membrana')
          }

          }
          
        }
      }
    }
  }

}
