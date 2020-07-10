import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrmModel } from './crm.model';


@Component({
  selector: 'ngx-crm-list',
  templateUrl: './crm-list.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmListComponent implements OnInit {


  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  novo() {
    this._router.navigate(['/pages/comercial/crm/new']);
  }

}
