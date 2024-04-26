import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Message>();

  constructor() { }

  error(content: string) {
    this.subject.next(new Message(content, MessageType.Danger))
  }
  warning(content: string) {
    this.subject.next(new Message(content, MessageType.Warning))
  }
  success(content: string) {
    this.subject.next(new Message(content, MessageType.Success))
  }

  getMessage(): Observable<Message>{
    return this.subject.asObservable();
  }
}

class Message {
  text: string;
  type: MessageType;

  constructor(content: string, type: MessageType){
    this.text = content;
    this.type = type;
  }

}

enum MessageType {
  Danger = "danger",
  Warning = "warning",
  Success = "success"
}