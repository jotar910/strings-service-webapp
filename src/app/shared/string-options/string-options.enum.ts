/**
 * The string parsing options enum.
 */
export enum StringOptionsEnum {
  CAPITAL_FIRST = 'c',
  CAPITAL_ALL = 'ac',
  CAPITAL_EACH_FIRST = 'acf',
  MINUSCULE_FIRST = 'l',
  MINUSCULE_ALL = 'al',
  MINUSCULE_EACH_FIRST = 'afl',
  SPACES_MIDDLE = 's',
  SPACES_EXTRA = 'as',
  ENTERS_EXTRA = 'e',
}

/**
 * All the string parsing options.
 */
export const stringOptions: StringOptionsEnum[] = [
  StringOptionsEnum.CAPITAL_FIRST,
  StringOptionsEnum.CAPITAL_ALL,
  StringOptionsEnum.CAPITAL_EACH_FIRST,
  StringOptionsEnum.MINUSCULE_FIRST,
  StringOptionsEnum.MINUSCULE_ALL,
  StringOptionsEnum.MINUSCULE_EACH_FIRST,
  StringOptionsEnum.SPACES_MIDDLE,
  StringOptionsEnum.SPACES_EXTRA,
  StringOptionsEnum.ENTERS_EXTRA
];
