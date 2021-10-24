declare interface Pwd {
  id: string | number;
  name: string;
  url: string;
  user: string;
  password: string;
  note: string;
  folder: string;
  createdAt?: number;
  updatedAt?: number;
}

declare interface Vault {
  pwds: Pwd[];
  folders: string[];
}

declare interface RouteParams {
  pwdId: string;
}
