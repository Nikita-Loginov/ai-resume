export type IUser = {
  id: string | null;
  name: string | null;
  email: string | null;
  token: string | null;
} | null;

export type IResume = {
  id: string;
  company: string;
  special: string;
  img: string;
  descr: string;
  progress?: string;
};
