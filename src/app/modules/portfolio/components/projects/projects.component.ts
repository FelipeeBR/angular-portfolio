import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
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
  ])
}
