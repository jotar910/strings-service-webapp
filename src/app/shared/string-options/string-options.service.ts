import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ResultModel } from './models/result.model';
import { TransformationModel } from './models/transformation.model';

/**
 * The service to handle string options actions.
 */
@Injectable({
  providedIn: 'root'
})
export class StringOptionsService {

  /**
   * The result observable.
   */
  get resultObservable(): Observable<string> {
    return this.resultSubject.asObservable();
  }

  private resultSubject: BehaviorSubject<string>;

  constructor(private readonly httpClient: HttpClient) {
    this.resultSubject = new BehaviorSubject(null);
  }

  /**
   * Requests the text transformation.
   * @param transformationModel The transformation request model.
   */
  resolveText(transformationModel: TransformationModel): void {
    this.httpClient.post(`${environment.apiPath}`, transformationModel)
      .subscribe(
        (resultModel: ResultModel) => this.resultSubject.next(resultModel?.result),
        (error: HttpErrorResponse) => this.resultSubject.error(error)
      );
  }
}
