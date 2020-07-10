import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContasReceberModel } from './contas-receber.model';


@Component({
  selector: 'ngx-contas-receber-list',
  templateUrl: './contas-receber-list.component.html',
  styleUrls: ['./contas-receber.component.scss']
})
export class ContasReceberListComponent implements OnInit {


  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  novo() {
    this._router.navigate(['/pages/financeiro/contas-receber/new']);
  }

}
