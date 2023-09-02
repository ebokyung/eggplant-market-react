import { atom } from 'recoil';

export const modalItems = atom({
  key: 'modalItems',
  default: [],
});

export const openAlert = atom({
  key: 'openAlert',
  default: false,
});

export const doAlert = atom({
  key: 'doAlert',
  default: {
    text: '',
    func: () => console.log('실행'),
  },
});
