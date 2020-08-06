import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgModel, DefaultValueAccessor } from '@angular/forms';

@Component({
  selector: 'oc-input',
  templateUrl: './oc-input.component.html',
  styleUrls: ['./oc-input.component.scss']
})
export class OcInputComponent implements OnInit {

  @Input() modelName;
  @Input() autoFocus;
  @Input() autocomplete;
  
  @Output() modelNameChange = new EventEmitter<any>();
  constructor(private el: ElementRef,private control:NgModel) { 

  }

  ngOnInit(): void {

    if(this.autocomplete){
      this.el.nativeElement.children[0].autocomplete = this.autocomplete;  
    }    
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit invoked");
    if(this.autoFocus){
      setTimeout(() => this.el.nativeElement.children[0].focus(), 0);
    }
  }

  onblur(){
    (this.control.valueAccessor as DefaultValueAccessor).onTouched();
  }

  changeModelVal() {
    this.modelNameChange.emit(this.modelName);
  }

}
