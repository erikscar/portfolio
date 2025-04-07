import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCard } from '../../interfaces/ProjectCard';
import Projects from '../../../data/Projects.json'

@Component({
  selector: 'app-projects-container',
  imports: [CommonModule],
  templateUrl: './projects-container.component.html',
  styleUrl: './projects-container.component.scss'
})
export class ProjectsContainerComponent {
  projectCards: ProjectCard[] = Projects;
  index = 0;

  onCarrouselClick(): void {
    this.index += 3;
    
    if (this.index >= this.projectCards.length) {
      this.index = 0;
    }
  }
}
