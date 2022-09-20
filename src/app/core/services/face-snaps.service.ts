import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";
import {SnapTypeEnum} from "../models/snap-type.enum";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, switchAll, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [];

  constructor(private http: HttpClient) {

  }

  //   {
  //     id: 1,
  //     title: 'Archibald',
  //     description: 'Mon meilleur ami depuis tout petit ! ',
  //     imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  //     createDate: new Date(),
  //     snaps: 0,
  //     location: 'paris'
  //   },
  //
  //   {
  //     id: 2,
  //     title: 'Three Rock Mountain',
  //     description: 'Un endroit magnifique pour les randonnées.',
  //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
  //     createDate: new Date(),
  //     snaps: 6,
  //     location: 'la montagne'
  //   }
  //
  // ];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getSnapFaceById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapById(faceSnapId: number, snapType: SnapTypeEnum): Observable<FaceSnap> {
    return this.getSnapFaceById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
    );
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map(facesnaps => [...facesnaps].sort((a, b) => a.id - b.id)),
      map(sorteFacesnaps => sorteFacesnaps[sorteFacesnaps.length - 1]),
      map(previousFaceSnap => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousFaceSnap.id + 1
      })),
      switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))
    );
  }


  // getSnapFaceById(faceSnapId: number): FaceSnap {
  //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  //   if (faceSnap) {
  //     return faceSnap
  //   }
  //   throw new Error('FaceSnap not found ! ');
  // }

  //  snapFaceSnapById(faceSnapId: number, snapType: SnapTypeEnum): void {
  // //   const faceSnap = this.getSnapFaceById(faceSnapId);
  // //   snapType === SnapTypeEnum.SNAP ? faceSnap.snaps++ : faceSnap.snaps--;
  // }


  // addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
  //   const faceSnap: FaceSnap = {
  //     ...formValue,
  //     snaps: 0,
  //     createdDate: new Date(),
  //     id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
  //   };
  //   this.faceSnaps.push(faceSnap);
  // }






}
