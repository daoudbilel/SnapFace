import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {Observable} from "rxjs";
import {filter, map, tap} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  interval$!: Observable<string>;


  ngOnInit() {

    // const interval$ = interval(1000);

    // interval$.subscribe(value => console.log(value));

    // setTimeout(()=>{ interval$.subscribe(value=>console.log(value));
    // },3000);

    //
    // this.interval$ = interval(1000).pipe(
    //   filter(value => value % 3 === 0),
    //   map(value => value % 2 === 0 ?
    //     `Je suis ${value} et je suis pair` :
    //     `Je suis ${value} et je suis impair`
    //   ),
    //   tap(text => this.logger(text))
    // );
    //

    // interval(500).pipe(
    //   map(value => 2 * (value + 1))
    // ).subscribe();


  }

  // logger(text: string) {
  //   console.log(`Log: ${text}`)
  // }


}
