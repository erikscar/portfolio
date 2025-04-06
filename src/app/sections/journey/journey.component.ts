import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AcademicCard } from '../../interfaces/AcademicCard';
import db from "../../../data/db.json";

@Component({
  selector: 'app-journey',
  imports: [CommonModule],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent {

  @Input() academicCards: AcademicCard[] = db.Academics;

  index = 0;

  onCarrouselClick(): void {
    this.index += 3;
    if (this.index >= this.academicCards.length) {
      this.index = 0;
    }
  }
}
