import { Component } from '@angular/core';

@Component({
  selector: 'app-lecature2',
  templateUrl: './lecature2.component.html',
  styleUrl: './lecature2.component.css'
})
export class Lecature2Component {
  name: string = "rania"
  num:number=1
  urlImg: string = "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
  onchange() {this.name="hadeel" }
}
