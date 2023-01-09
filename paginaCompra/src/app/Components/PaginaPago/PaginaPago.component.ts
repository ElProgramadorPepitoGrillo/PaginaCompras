import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-PaginaPago',
  templateUrl: './PaginaPago.component.html',
  styleUrls: ['./PaginaPago.component.css']
})
export class PaginaPagoComponent implements OnInit {

  constructor() { }
  datos = []
  total:number=0



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

          let l_descripcion='';
          let l_img='';
          if (key=='Producto1'){
          l_descripcion='Mouse';
          l_img='assets/Imagenes/mause.jpg';
          }
          if(key=='Producto2'){
            l_descripcion='Teclado de Membrana';
            l_img='https://m.media-amazon.com/images/I/71feD0H6VTL._AC_SY355_.jpg';

          }
          if (key=='Producto3') {
            l_descripcion='Memoria USB 132GB';
            l_img='https://ae01.alicdn.com/kf/H8f2d8be28f1a48fa9e011a79cb73fa64Z/USB-2-0-de-SanDisk-Pen-Drive-32gb-CZ61-disco-Flash-USB-Flash-Pendrive-64gb-128gb.jpg';
          }
          if (key=='Producto4') {
            l_descripcion='CORE I7';
            l_img='https://www.idcmayoristas.com/wp-content/uploads/2021/04/PROCESADOR-INTEL-CORE-I7-11700.png';

          }
          if (key=='Producto5') {
            l_descripcion='CASE';
            l_img='assets/Imagenes/case.jpg';

          }
          if (key=='Producto6') {
            l_descripcion='Auriculares';
            l_img='assets/Imagenes/headsets.jpg';
          }
          if (key=='Producto7') {
            l_descripcion='Tarjeta gráfica';
            l_img='assets/Imagenes/tarjeta.jpg';

          }
          if (key=='Producto8') {
            l_descripcion='Monitor ASUS ';
            l_img='assets/Imagenes/pantalla.jpg';

          }

          let l_dato=[l_img,l_descripcion,l_cantidad,partes[2],+partes[0]];
          this.datos.push(l_dato);

          this.total=this.total + (+partes[0]);


          }
          
        }
      }
    }
  }

}
