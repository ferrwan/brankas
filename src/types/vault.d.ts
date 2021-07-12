declare interface Pwds {
  id: number;
  name: string;
  url: string;
  user: string;
  password: string;
  note: string;
  folder: string;
}

declare interface Vault {
  pwds: Pwds[];
}