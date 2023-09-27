/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import '../style/TextArea.scss';

export function TextArea({ initialValue, setIsTextError }) {
  const [textValue, setTextValue] = useState(initialValue);
  const handleSetValue = e => {
    setTextValue(e.target.value);
  };

  useEffect(() => {
    textValue === '' ? setIsTextError(true) : setIsTextError(false);
  }, [textValue]);
  // tab 누르면 포커스 잃지않고 4칸 공백 넣기
  // const handleSetTab = e => {
  //   if (e.key === 'Tab') {
  //     e.preventDefault();
  //     const { value, selectionStart, selectionEnd } = e.target;
  //     const newValue = `${value.substring(0, selectionStart)}\t${value.substring(selectionEnd)}`;
  //     setTextValue(newValue);
  //     e.target.selectionStart = e.target.selectionEnd = selectionStart + 1;
  //   }
  // }; onKeyDown={e => handleSetTab(e)}

  return <textarea name="textarea" placeholder="게시글 입력하기.." value={textValue} onChange={e => handleSetValue(e)} />;
}
