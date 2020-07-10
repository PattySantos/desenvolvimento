import { Component, OnInit } from '@angular/core';
import { EcommerceModel } from './ecommerce.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-ecommerce-detail',
  templateUrl: './ecommerce-detail.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
