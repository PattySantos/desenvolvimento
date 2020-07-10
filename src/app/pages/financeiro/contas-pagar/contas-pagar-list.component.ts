import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContasPagarModel } from './contas-pagar.model';


@Component({
  selector: 'ngx-contas-pagar-list',
  templateUrl: './contas-pagar-list.component.html',
  styleUrls: ['./contas-pagar.component.scss']
})
export class ContasPagarListComponent implements OnInit {


  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  novo() {
    this._router.navigate(['/pages/financeiro/contas-pagar/new']);
  }

}
