import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone conhecimento HTML'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone conhecimento css3'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone conhecimento angular'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone conhecimento javascript'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone conhecimento nodejs'
    }
  ])
}
