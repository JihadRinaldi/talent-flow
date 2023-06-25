import { ICandidate } from '@/interfaces';

export const TALENT_DATA: ICandidate[] = [
  {
    id: 1,
    fullname: 'user 1',
    stage: 'new',
    notes: [
      {
        staff_name: 'staff 1',
        note: 'please process',
      },
    ],
  },
  {
    id: 2,
    fullname: 'user 2',
    stage: 'shortlist',
    notes: [
      {
        staff_name: 'staff 1',
        note: 'please process',
      },
    ],
  },
  {
    id: 3,
    fullname: 'user 3',
    stage: 'shortlist',
    notes: [
      {
        staff_name: 'staff 1',
        note: 'please process',
      },
      {
        staff_name: 'staff 2',
        note: 'already doing 1st call process already doing 1st call process',
      },
    ],
  },
  {
    id: 4,
    fullname: 'user 5',
    stage: 'interview',
    notes: [],
  },
  {
    id: 5,
    fullname: 'user 6',
    stage: 'reject',
    notes: [
      {
        staff_name: 'staff 1',
        note: 'fail interview',
      },
    ],
  },
];

export const TALENT_STAGE = {
  NEW: 'new',
  SHORTLIST: 'shortlist',
  INTERVIEW: 'interview',
  HIRED: 'hired',
  REJECT: 'reject',
};
