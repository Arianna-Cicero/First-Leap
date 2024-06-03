export interface Candidate {
  name: string;
  user: string;
  email: string;
  password: string;
  skills: string;
  experience: string;
  number: number;
  birth_date: Date;
  cv: Buffer;
  verificado: boolean;
}

export interface Recruiter {
  name: string;
  user: string;
  email: string;
  password: string;
  company: string;
  position: string;
  number: number;
  birth_date: Date;
  verificado: boolean;
}

export interface Admin {
  name: string;
  user: string;
  email: string;
  password: string;
  position: string;
  experience: string;
  number: number;
  birth_date: Date;
  verificado: boolean;
}
