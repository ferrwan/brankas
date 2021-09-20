import { atom } from 'recoil';

const pwds: Pwd[] = [];
const vault: Vault = {
  pwds: [],
  folders: [],
};

export const pwdsState = atom({
  key: 'pwdsState',
  default: pwds,
});

export const vaultState = atom({
  key: 'vaultState',
  default: vault,
});
