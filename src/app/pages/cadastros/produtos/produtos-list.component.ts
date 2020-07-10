import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosListComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }
  novo() {
    this._router.navigate(['/pages/cadastros/produtos/new']);
  }

}
