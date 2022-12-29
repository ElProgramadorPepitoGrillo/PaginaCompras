import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-PaginaError',
  templateUrl: './PaginaError.component.html',
  styleUrls: ['./PaginaError.component.css']
})
export class PaginaErrorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  nav(){
    this.router.navigate([''])
  }

}
