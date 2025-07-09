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
      src: 'assets/img/projects/vfull.png',
      alt:'Projeto',
      title: 'What is Lorem Ipsum?',
      width: '100px',
      heigth: '51px',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://github.com/FelipeMendesN/blog',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt:'Projeto',
      title: 'Projeto',
      width: '100px',
      heigth: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://github.com/FelipeMendesN/blog',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt:'Projeto',
      title: 'Projeto',
      width: '100px',
      heigth: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://github.com/FelipeMendesN/blog',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt:'Projeto',
      title: 'Projeto',
      width: '100px',
      heigth: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://github.com/FelipeMendesN/blog',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt:'Projeto',
      title: 'Projeto',
      width: '100px',
      heigth: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://github.com/FelipeMendesN/blog',
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
