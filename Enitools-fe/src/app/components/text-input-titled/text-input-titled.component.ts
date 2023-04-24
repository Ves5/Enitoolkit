import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-text-input-titled',
  standalone: true,
  templateUrl: './text-input-titled.component.html',
  styleUrls: ['./text-input-titled.component.css'],
  imports: [NgbPopoverModule, FormsModule, CommonModule]
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
