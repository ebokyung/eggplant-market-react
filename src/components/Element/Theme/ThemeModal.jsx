import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeAtom } from '../../../recoil/theme/atoms';
import ThemeRadioItem from './ThemeRadio';
import Modal from '../Modal/Modal';

const THEME_LIST = [
  { label: 'Light', themeName: 'light' },
  { label: 'HighContrast', themeName: 'highContrast' },
];

function ThemeModal({ handleModal }) {
  const theme = useRecoilValue(themeAtom);

  return (
    <Modal closeModal={handleModal}>
      <>
        {THEME_LIST.map((item, idx) => (
          <ThemeRadioItem name="colorSet" id={item.themeName} label={item.label} checked={theme === item.themeName} defaultChecked={idx === 0} />
        ))}
      </>
    </Modal>
  );
}

export default ThemeModal;
