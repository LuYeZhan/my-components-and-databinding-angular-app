import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated // None, Native can be used too. default is ViewEncapsulation.Emulated, which uses the shadow DOM
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;

  constructor() {
    console.log("constructor Called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges is Called!");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit is Called!");
  }

  ngDoCheck() {
    console.log("ngDoCheck is Called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit is Called!");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked is Called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit is Called!");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked is Called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy is Called!");
  }
}
