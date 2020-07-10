import { Component, OnInit } from '@angular/core';
import { ControleInadimplenciaModel } from './controle-inadimplencia.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-controle-inadimplencia',
  templateUrl: './controle-inadimplencia.component.html',
  styleUrls: ['./controle-inadimplencia.component.scss']
})
export class ControleInadimplenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
