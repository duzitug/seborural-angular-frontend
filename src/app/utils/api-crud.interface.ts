import {Observable} from 'rxjs';

export interface ApiCrudInterface<T> {
  getAllElements(): Observable<T>;

  // getElementById( id: number ): T;
  //
  // createElement( element: T ): T;
  //
  // deleteElement( id: number ): T;
}
