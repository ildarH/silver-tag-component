export interface ITags<T, I> {
  tag: T
  icon?: I
}

export interface ITagsValue<T, I> extends ITags<T, I> {
  value: string | number
}

export enum TAG {
  OVERVIEW = 'OVERVIEW',
  HISTORICAL = 'HISTORICAL',
  ON_BUS = 'ON_BUS',
  STAR = 'STAR',
  DATE = 'DATE',
  DURATION = 'DURATION',
  CAPACITY = 'CAPACITY',
  USER = 'USER'
}

export enum ICONS {
  BUS = 'mdi-bus',
  STAR = 'mdi-star',
  CLOCK = 'mdi-clock-outline',
  USER = 'mdi-account',
  DIVIDER = 'mdi-circle-small',
}

export type TTag = ITags<TAG, ICONS>
export type TTagValue = ITagsValue<TAG, ICONS>
export type TagList = TTag[] | TTagValue[]

export interface IPost {
  id: string
  title: string
  tags: TagList
}
