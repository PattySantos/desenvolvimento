import { Component, OnInit } from '@angular/core';
import { PlanejamentoModel } from './planejamento.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-planejamento',
  templateUrl: './planejamento.component.html',
  styleUrls: ['./planejamento.component.scss']
})
export class PlanejamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
