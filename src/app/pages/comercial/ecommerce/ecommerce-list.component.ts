import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceModel } from './ecommerce.model';


@Component({
  selector: 'ngx-ecommerce-list',
  templateUrl: './ecommerce-list.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceListComponent implements OnInit {


  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  novo() {
    this._router.navigate(['/pages/comercial/ecommerce/new']);
  }

}
