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
        strong:"Estagiário de Desenvolvimento Web",
        p:"IFNMG - Januária | Agosto/2024 - Março/2025"
      },
      text:"<p>Participação no projeto 'Adaptação do Sistema de Gerenciamento de Estágios' para o sistema acadêmico Cajuí, visando otimizar e adaptar funcionalidades para atender às demandas institucionais. Utilização de tecnologias como Yii2 (PHP), Docker e PostgreSQL para análise de requisitos, testes e implementação de melhorias, reduzindo o tempo de execução de tarefas administrativas como assinatura de documentos, validação de dados, e mudança de status do estágio. Colaboração com equipes multidisciplinares para garantir a eficiência e a usabilidade do sistema.</p>",
    }
  ])
}
