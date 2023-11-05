import { atom } from 'recoil';

export const themeAtom = atom({
  key: 'themeAtom',
  default: localStorage.getItem('theme') || 'light',
});
