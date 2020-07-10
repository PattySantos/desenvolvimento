import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesModel } from './clientes.model';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'ngx-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesListComponent implements OnInit {

  clientes:ClientesModel[];

  constructor(
    private _router: Router,
    private _service: ClientesService
  ) { }

  ngOnInit() {
  }
  novo() {
    this._router.navigate(['/pages/cadastros/clientes/new']);
  }

}
