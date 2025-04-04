import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-journey',
  imports: [CommonModule],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent {
  @Input() academicCards: AcademicCard[] = []

  index = 0;

  onCarrouselClick(): void {
    this.index += 3;
    if (this.index >= this.academicCards.length) {
      this.index = 0;
    }
  }
}

interface AcademicCard {
  name: string,
  author: string,
  description: string,
  status: string,
}