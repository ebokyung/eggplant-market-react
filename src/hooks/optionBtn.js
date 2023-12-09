import { useEffect } from 'react';

export const openModalHook = isModal => {
  useEffect(() => {
    if (isModal) {
      const firstFousableElement = document.querySelector('.l_modal').firstChild;
      if (firstFousableElement) firstFousableElement.focus();
    }
  }, [isModal]);
};
