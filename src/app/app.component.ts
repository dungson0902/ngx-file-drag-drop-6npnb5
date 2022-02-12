import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FileValidators } from "ngx-file-drag-drop";

@Component({
  selector: "app-root",
  template: `
    <ngx-file-drag-drop
      [formControl]="fileControl"
      activeBorderColor="#3F51B5"
      multiple
      (valueChanged)="onValueChange($event)"
    >
    </ngx-file-drag-drop>
  `,
  styles: [
    `
      ngx-file-drag-drop {
        height: 120px;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );

  onValueChange(file: File[]) {
    console.log("File changed!");
  }
  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: File[]) =>
      console.log(this.fileControl.value, this.fileControl.valid)
    );
  }
}
