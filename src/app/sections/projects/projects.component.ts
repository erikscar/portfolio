import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() projectCards: ProjectCard[] = []

  index = 0;

  onCarrouselClick(): void {
    this.index += 3;
    
    if (this.index >= this.projectCards.length) {
      this.index = 0;
    }
  }
}


interface ProjectCard {
  name: string,
  description: string,
  imgSrc: string,
  github: string,
  demo: string
}


