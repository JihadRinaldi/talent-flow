export interface ICandidate {
  id: number,
  fullname: string,
  stage: string,
  notes: INotes[],
}

export interface INotes {
  staff_name?: string;
  note?: string;
}

export interface IOnChangeStatus {
  candidate: ICandidate;
  newStatus: string;
}
