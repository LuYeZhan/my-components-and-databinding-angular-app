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
  OnDestroy,
  ViewChild,
  ElementRef
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
    OnDestroy,
    ViewChild {
  descendants: boolean;
  first: boolean;
  read: any;
  isViewQuery: boolean;
  selector: any;
  static: boolean;
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;

  constructor() {
    console.log("constructor Called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges is Called!");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit is Called!");
    console.log("Text Content:" + this.header.nativeElement.textContent);
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
    console.log("Text Content:" + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked is Called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy is Called!");
  }
}
