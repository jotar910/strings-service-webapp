import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { L10N_LOCALE, L10nLocale } from 'angular-l10n';
import { cloneDeep } from 'lodash';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { SelectItemModel } from '../shared/models/select-item.model';
import { stringOptions, StringOptionsEnum } from '../shared/string-options/string-options.enum';
import { StringOptionsService } from '../shared/string-options/string-options.service';

/**
 * The string options component.
 */
@Component({
  selector: 'app-string-options',
  templateUrl: './string-options.component.html',
  styleUrls: ['./string-options.component.scss']
})
export class StringOptionsComponent implements OnInit {

  /**
   * The immutable string options items available.
   */
  stringOptions: SelectItemModel<string>[];

  /**
   * The sequence of string options items for the transformation.
   */
  stringOptionsChain: SelectItemModel<string>[];

  /**
   * The loading state.
   */
  isLoading: boolean;

  /**
   * The error message on the component.
   */
  errorMessageKey: string;

  /**
   * The result observable to listen to transformation results-
   */
  result$: Observable<string>;

  /**
   * The transformation form group.
   */
  formGroup: FormGroup;

  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale, private modalService: NgbModal,
              private readonly stringOptionsService: StringOptionsService) {
    this.result$ = stringOptionsService.resultObservable.pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        this.errorMessageKey = 'string-options.result.error';
        return new Observable((resolve) => resolve.next(null));
      }),
      tap((_: string) => {
        this.errorMessageKey = null;
        this.isLoading = false;
      }));
  }

  /**
   * Handles component initialization.
   */
  ngOnInit(): void {
    this.buildForm();
    this.stringOptions = stringOptions.map((stringOption: StringOptionsEnum) => ({
      label: `string-options.options.${stringOption}`,
      value: stringOption
    }));
    this.stringOptionsChain = [];
  }

  /**
   * Handles drag action on cdk drag component.
   * @param event The event emitted.
   * @param thisIsStatic The destination container static state.
   * @param otherIsStatic The origin container static state.
   */
  onDrag(event: CdkDragDrop<SelectItemModel<string>[]>, thisIsStatic: boolean, otherIsStatic: boolean): void {
    if (event.container === event.previousContainer) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (!thisIsStatic && !otherIsStatic) {
        transferArrayItem(event.previousContainer.data, event.container.data,
          event.previousIndex, event.currentIndex);
      } else if (!thisIsStatic && otherIsStatic) {
        transferArrayItem(cloneDeep(event.previousContainer.data), event.container.data,
          event.previousIndex, event.currentIndex);
        moveItemInArray(event.previousContainer.data, event.previousIndex, event.previousIndex);
      } else if (thisIsStatic && !otherIsStatic) {
        event.previousContainer.data.splice(event.previousIndex, 1);
      }
    }
  }

  /**
   * Requests for string transformation and opens the respective modal.
   * @param content The modal content.
   */
  submit(content: TemplateRef<any>) {
    this.isLoading = true;
    this.modalService.open(content, { size: 'lg' });
    this.stringOptionsService.resolveText({
      text: this.formGroup.get('text').value,
      flags: this.stringOptionsChain.map((option: SelectItemModel<string>) => option.value)
    });
  }

  private buildForm(): void {
    this.formGroup = new FormGroup({
      text: new FormControl('', Validators.required)
    });
  }

}
