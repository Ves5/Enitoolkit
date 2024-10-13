import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from 'src/app/services/alert-service.service';

@Component({
  selector: 'app-alert-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-box.component.html',
  styleUrl: './alert-box.component.css'
})
export class AlertBoxComponent{
  @Input() message!: Message;

  @Output() close: EventEmitter<any> = new EventEmitter();

  emitClose() {
    this.close.emit();
  }

  constructor() {}
}
