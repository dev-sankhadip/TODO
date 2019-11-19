import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public messageToParent:string="This is a message to parent";
  @Input() childMessage:string
  @Output() messageEvent=new EventEmitter<string>();
  ngOnInit() {
  }
  send()
  {
    this.messageEvent.emit(this.messageToParent);
  }

}
