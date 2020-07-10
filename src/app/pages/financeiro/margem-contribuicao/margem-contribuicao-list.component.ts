import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MargemContribuicaoModel } from './margem-contribuicao.model';


@Component({
  selector: 'ngx-margem-contribuicao-list',
  templateUrl: './margem-contribuicao-list.component.html',
  styleUrls: ['./margem-contribuicao.component.scss']
})
export class MargemContribuicaoListComponent implements OnInit {


  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  novo() {
    this._router.navigate(['/pages/financeiro/margem-contribuicao/new']);
  }

}
