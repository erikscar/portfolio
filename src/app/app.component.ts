import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { HomeComponent } from "./sections/home/home.component";
import { JourneyComponent } from "./sections/journey/journey.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ContactComponent } from "./sections/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, JourneyComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
