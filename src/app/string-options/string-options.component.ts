import { Component, Inject, OnInit } from '@angular/core';
import { L10N_LOCALE, L10nLocale } from 'angular-l10n';
import { SelectItemModel } from '../shared/models/select-item.model';
import { stringOptions, StringOptionsEnum } from '../shared/string-options/string-options.enum';

@Component({
  selector: 'app-string-options',
  templateUrl: './string-options.component.html',
  styleUrls: ['./string-options.component.scss']
})
export class StringOptionsComponent implements OnInit {

  stringOptions: SelectItemModel<string>[];

  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale) {
  }

  ngOnInit(): void {
    this.stringOptions = stringOptions.map((stringOption: StringOptionsEnum) => ({
      label: `string-options.${stringOption}`,
      value: stringOption
    }));
  }

}
