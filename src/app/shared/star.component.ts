import {Component , OnChanges , Input , Output , EventEmitter} from '@angular/core'

@Component({
  selector: 'ai-star',
  // moduleId: module.id ,
  templateUrl: 'app/shared/star.component.html',
  styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number 
  starWidth: number 

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  onClick = () => {
    console.log("clicked")
    this.ratingClicked.emit(`${this.rating}`)
  }

  ngOnInit(){
    // this.starWidth = this.starRating * this.starWidth
  }

  ngOnChanges(){
    this.starWidth = this.rating * 86/5 // width / count (width is set to 86 and count is 5 by default) 
  }
}
