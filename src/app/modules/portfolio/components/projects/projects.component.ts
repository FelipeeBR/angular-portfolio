import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/spring-boot.png',
      alt:'Sistema de Microsserviços com Spring Boot',
      title: 'Sistema de Microsserviços com Spring Boot',
      width: '100px',
      heigth: '51px',
      description: 'Este projeto demonstra a construção de uma arquitetura baseada em microsserviços usando Java com Spring Boot, Docker e PostgreSQL. Ele foi desenvolvido com base nos conceitos abordados Back-end Java Microsserviços, Spring Boot e Kubernetes.',
      links: [
        {
          name: 'Mais detalhes',
          href: 'https://github.com/FelipeeBR/Backend_Java_Microsservicos',
        },
      ],
    },
    {
      src: 'assets/img/projects/laravel.png',
      alt:'GestorEase',
      title: 'GestorEase',
      width: '100px',
      heigth: '51px',
      description: 'Este projeto demonstra a construção de Sistema para gerenciar pizzaria utilizando AdminLTE e Laravel',
      links: [
        {
          name: 'Mais detalhes',
          href: 'https://github.com/FelipeeBR/gestorease',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
