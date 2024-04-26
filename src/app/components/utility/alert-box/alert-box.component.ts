import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-box.component.html',
  styleUrl: './alert-box.component.css'
})
export class AlertBoxComponent{
  @Input() message: any;

  constructor() {}
}
