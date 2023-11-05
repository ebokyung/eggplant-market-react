import { atom } from 'recoil';

export const isAlertOpen = atom({
  key: 'isAlertOpen',
  default: false,
});

export const doAlert = atom({
  key: 'doAlert',
  default: {
    text: '',
    func: () => console.log('실행'),
  },
});
