import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  template: `<button>{{ val }}</button>`,
  styles: [],
})
export class ButtonComponent implements OnInit {
  @Input()
  val: string = "";
  constructor() {}

  ngOnInit(): void {}
}
