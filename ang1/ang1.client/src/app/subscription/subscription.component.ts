import { Component } from '@angular/core';
import { URLService } from '../../URL/url.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {



  ngOnInit() {
    this.getSubscription();
  }


  constructor(private _ser: URLService) {

  }



  SubscriptionArray: any
  getSubscription() {
    this._ser.getSubscriptionData().subscribe((data: any) => {
      this.SubscriptionArray = data
      console.log(this.SubscriptionArray, "thisSubscriptionArray")
    })
  }




}





