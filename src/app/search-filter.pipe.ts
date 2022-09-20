import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {


  transform(elements: any, searchText: string, attribute: string){
/*
    console.log('filter invoked') ;
    console.log(faceSnaps)
    console.log(`searchText => ${searchText}`) ;
*/


     return elements?.filter((element: any) => {
        return element[attribute].toLowerCase().includes(searchText.toLowerCase());
      })
      /*let filteredFaceSnap = faceSnaps$?.pipe(
        map((faceSnaps: any) => {
          return faceSnaps.filter((faceSnap : FaceSnap) => faceSnap.title.toLowerCase() === searchText.toLowerCase());
        })
      );*/

  }

}
