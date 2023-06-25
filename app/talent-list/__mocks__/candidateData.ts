export const MOCK_CANDIDATE_NEW = {
  id: 1,
  fullname: 'user 1',
  stage: 'new',
  notes: [
    {
      staff_name: 'staff 1',
      note: 'please process',
    },
  ],
};

export const MOCK_CANDIDATE_SHORTLIST = {
  id: 2,
  fullname: 'user 2',
  stage: 'shortlist',
  notes: [
    {
      staff_name: 'staff 1',
      note: 'please process',
    },
  ],
};

export const MOCK_CANDIDATE_INTERVIEW = {
  id: 4,
  fullname: 'user 5',
  stage: 'interview',
  notes: [],
};

export const MOCK_CANDIDATE_REJECT = {
  id: 5,
  fullname: 'user 6',
  stage: 'reject',
  notes: [
    {
      staff_name: 'staff 1',
      note: 'fail interview',
    },
  ],
};

export const MOCK_CANDIDATE_STAGE_NULL = {
  id: 5,
  fullname: 'user 99',
  stage: '',
  notes: [],
};
