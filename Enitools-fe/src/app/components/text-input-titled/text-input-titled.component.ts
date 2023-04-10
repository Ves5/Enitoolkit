import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input-titled',
  templateUrl: './text-input-titled.component.html',
  styleUrls: ['./text-input-titled.component.css']
})
export class TextInputTitledComponent {
  @Input() title: string = "";
  @Input() placeholder: string = "";

  @Input() text: string = "";
  @Output() textChange = new EventEmitter<string>();

  textChanged(event: Event){
    this.text = (event.target as any).value;
    this.textChange.emit(this.text);
  }
}
