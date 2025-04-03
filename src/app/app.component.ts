import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { HomeComponent } from "./sections/home/home.component";
import { JourneyComponent } from "./sections/journey/journey.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, JourneyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
