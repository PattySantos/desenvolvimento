import { Component, OnInit } from '@angular/core';
import { RecrutamentoModel } from '././recrutamento.model'
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-recrutamento',
  templateUrl: './recrutamento.component.html',
  styleUrls: ['./recrutamento.component.scss']
})
export class RecrutamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
