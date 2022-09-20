import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SnapTypeEnum} from "../../../core/models/snap-type.enum";
import {Observable} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getSnapFaceById(faceSnapId);

  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(faceSnapId, SnapTypeEnum.SNAP).subscribe();
      this.faceSnap$ = this.faceSnapsService.getSnapFaceById(faceSnapId);
      this.buttonText = 'Oops, unSnap! ';
    } else {
      this.faceSnapsService.snapFaceSnapById(faceSnapId, SnapTypeEnum.UNSNAP).subscribe();
      this.faceSnap$ = this.faceSnapsService.getSnapFaceById(faceSnapId);
      this.buttonText = 'Oh Snap!';
    }
  }


}
