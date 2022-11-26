import { ITags } from '@/@types';

export enum TAG {
  OVERVIEW = 'OVERVIEW',
  HISTORICAL = 'HISTORICAL',
  ON_BUS = 'ON_BUS',
  STAR = 'STAR',
  DATE = 'DATE',
  DURATION = 'DURATION',
  CAPACITY = 'CAPACITY',
}

export enum ICONS {
  BUS = 'mdi-bus',
  STAR = 'mdi-star',
  CLOCK = 'mdi-clock-outline',
  USER = 'mdi-account',
  DIVIDER = 'mdi-circle-small',
}

export const tagsList: ITags<TAG, ICONS>[] = [
  { tag: TAG.OVERVIEW },
  { tag: TAG.HISTORICAL },
  { tag: TAG.ON_BUS, icon: ICONS.BUS },
  { tag: TAG.STAR, icon: ICONS.STAR },
  { tag: TAG.DATE },
  { tag: TAG.DURATION, icon: ICONS.CLOCK },
  { tag: TAG.CAPACITY, icon: ICONS.USER },
];
