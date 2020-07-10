import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasListComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }
  novo() {
    this._router.navigate(['/pages/cadastros/empresas/new']);
  }

}
