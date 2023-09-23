/* eslint-disable no-multi-assign */
import React, { useState } from 'react';
import '../style/TextArea.scss';

export function TextArea({ initialValue = '' }) {
  const [textValue, setTextValue] = useState(initialValue);
  const handleSetValue = e => {
    setTextValue(e.target.value);
  };
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
