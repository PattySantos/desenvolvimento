import { Component, OnInit } from '@angular/core';
import { BancoCurriculoModel } from './banco-curriculo.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-banco-curriculo',
  templateUrl: './banco-curriculo.component.html',
  styleUrls: ['./banco-curriculo.component.scss']
})
export class BancoCurriculoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
