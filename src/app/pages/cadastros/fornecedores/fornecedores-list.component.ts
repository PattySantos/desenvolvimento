import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-fornecedores-list',
  templateUrl: './fornecedores-list.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresListComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }
  novo() {
    this._router.navigate(['/pages/cadastros/fornecedores/new']);
  }

}
