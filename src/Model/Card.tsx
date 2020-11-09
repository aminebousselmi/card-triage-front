// import { ZonedDateTime } from '@js-joda/core';

import { CardStatusEnum } from './CardStatusEnum'

export interface Card {
  id: number;
  patient_name: string;
  status: CardStatusEnum;
  created_date: Date;
  arrhythmias: Array<string>;
}
