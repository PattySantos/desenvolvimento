import { Component, OnInit } from '@angular/core';
import { PontoEquilibrioModel } from './ponto-equilibrio.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-ponto-equilibrio',
  templateUrl: './ponto-equilibrio.component.html',
  styleUrls: ['./ponto-equilibrio.component.scss']
})
export class PontoEquilibrioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
