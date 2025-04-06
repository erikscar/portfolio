import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectCard } from '../../interfaces/ProjectCard';
import db from "../../../data/db.json";

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() projectCards: ProjectCard[] = db.Projects;

  index = 0;

  onCarrouselClick(): void {
    this.index += 3;
    
    if (this.index >= this.projectCards.length) {
      this.index = 0;
    }
  }
}


