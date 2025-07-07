import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong:"Estagiário de desenvolvimento web",
        p:"IFNMG | Agosto/2024 - Março/2025"
      },
      text:"<p>Participei do projeto</p>",
    }
  ])
}
