import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(cursoService: CursosService) {
    this.nomePortal = 'https://loiane.training/';
    this.cursos = cursoService.getCursos();
  }

  ngOnInit(): void {
  }

}
