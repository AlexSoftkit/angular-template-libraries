import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'oc-checkbox',
  templateUrl: './oc-checkbox.component.html',
  styleUrls: ['./oc-checkbox.component.scss']
})
export class OcCheckboxComponent implements OnInit {
  @Input() isChecked;
  @Input() id = '';
  @Input() for = '';

  @Output() isCheckedChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  changeModelVal() {
    this.isCheckedChange.emit(this.isChecked);
  }

}
