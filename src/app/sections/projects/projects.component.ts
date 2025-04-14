import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsContainerComponent } from "../../components/projects-container/projects-container.component";
import { TechsContainerComponent } from "../../components/techs-container/techs-container.component";

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectsContainerComponent, TechsContainerComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  currentTab: string = "Projects";

}


