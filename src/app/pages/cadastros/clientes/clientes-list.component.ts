import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesListComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }
  novo() {
    this._router.navigate(['/pages/cadastros/clientes/new']);
  }

}
