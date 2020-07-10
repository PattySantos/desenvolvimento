import { Component, OnInit } from '@angular/core';
import { MercadoModel } from './mercado.model'
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.scss']
})
export class MercadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
