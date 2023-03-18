import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors-parent',
  templateUrl: './colors-parent.component.html',
  styleUrls: ['./colors-parent.component.css']
})
export class ColorsParentComponent implements OnInit {
  changeColor: string = '';

  toggleEdit: boolean = false;

  myMovie: string = "Avengers";

  allColors: string[] = ["Red", "Blue", "Green"];

  constructor() { }

  ngOnInit(): void {
  }

  editColor(index: number, color: string){
    if(this.toggleEdit){
      this.allColors[index] = this.changeColor;
    }
    this.toggleEdit = !this.toggleEdit;
  }

  removeColor(color: string){
    console.log(color);

    //now let us remove color from allColors array
    this.allColors.splice(this.allColors.indexOf(color), 1);
  }
}
