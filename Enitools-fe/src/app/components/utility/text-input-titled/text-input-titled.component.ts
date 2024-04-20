import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { PopupHelpComponent } from '../popup-help/popup-help.component';

@Component({
  selector: 'app-text-input-titled',
  standalone: true,
  templateUrl: './text-input-titled.component.html',
  styleUrls: ['./text-input-titled.component.css'],
  imports: [FormsModule, CommonModule, PopupHelpComponent]
})
export class TextInputTitledComponent{

  @Input() title: string = "";
  @Input() placeholder: string = "";

  @Input() text: string = "";
  @Output() textChange = new EventEmitter<string>();

  @Input() popupShown: boolean = true;
  @Input() popupText: string = "<hr>";
  // @Input() popupTitle: string = "";

  textChanged(event: Event){
    this.text = (event.target as any).value;
    this.textChange.emit(this.text);
  }
}
