import React from 'react';
import { Input } from '../Element/Input';

export function InputIntro({ initialValue = '' }) {
  const IntroProps = {
    name: 'intro',
    inputId: 'intro',
    label: '소개',
    placeholder: '자신과 판매할 상품에 대해 소개해 주세요!',
    error: {
      isError: false,
      errorText: '',
    },
    initialValue,
  };

  return <Input {...IntroProps} />;
}
