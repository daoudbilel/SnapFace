import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail!: string  ;

  constructor(private router: Router) {
  }


  onContunie(): void {
    this.router.navigateByUrl('facesnaps');

  }

  ngOnInit(): void {
  }

  // onSubmitForm(){
  //   console.log(this.userEmail);
  // }

  onSubmitForm(form: NgForm): void{
    console.log(form.value);
  }
}
