import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CertificatesContainerComponent } from "../../components/certificates-container/certificates-container.component";
import { ProjectsContainerComponent } from "../../components/projects-container/projects-container.component";
import { TechsContainerComponent } from "../../components/techs-container/techs-container.component";

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CertificatesContainerComponent, ProjectsContainerComponent, TechsContainerComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  currentTab: string = "Techs";

}


