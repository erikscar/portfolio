import { Component } from '@angular/core';
import { TechCard } from '../../interfaces/TechCard';
import Techs from '../../../data/Techs.json'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-techs-container',
  imports: [CommonModule],
  templateUrl: './techs-container.component.html',
  styleUrl: './techs-container.component.scss'
})
export class TechsContainerComponent {
  techCards: TechCard[] = Techs
}
