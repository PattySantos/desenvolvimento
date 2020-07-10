import { Component, OnInit } from '@angular/core';
import { ContasPagarModel } from './contas-pagar.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-contas-pagar-detail',
  templateUrl: './contas-pagar-detail.component.html',
  styleUrls: ['./contas-pagar.component.scss']
})
export class ContasPagarDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
