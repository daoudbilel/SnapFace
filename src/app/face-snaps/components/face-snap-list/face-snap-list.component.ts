import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {interval} from "rxjs";
import {map, take, takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs";
import {Observable} from "rxjs";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {


  // faceSnaps!: FaceSnap[];

  faceSnaps$: Observable<FaceSnap[]> = new Observable<FaceSnap[]>();
  faceSnaps!: FaceSnap[];

  public searchText: string = '';

  // private destroy$!: Subject<boolean>;

  constructor(private  faceSnapsService: FaceSnapsService,
  ) {
  }

  ngOnInit(): void {
    this.getFaceSnaps();


    /*this.destroy$ = new Subject<boolean>();*/

    // this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    // interval(1000).pipe(
    //   //take(3),
    //   takeUntil(this.destroy$),
    //   tap(console.log)
    // ).subscribe();
  }

  private getFaceSnaps() {
    // this.faceSnapsService.getAllFaceSnaps().subscribe((faceSnaps) => {
    //   this.faceSnaps = faceSnaps

    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps()


    /* this.faceSnaps$ = faceSnaps.pipe(
       map(face => {
         return face
       }),
     );*/

  }

// ngOnDestroy() :void {
  //   this.destroy$.next((true));
  // }


}
