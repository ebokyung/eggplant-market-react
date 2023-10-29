import React, { useEffect, useState } from 'react';
import { Button } from '../../../components/Element/Buttons';
import { InputEmail, InputPw } from '../../../components/InputComponents';

export function Account({ handleNext }) {
  const [emailError, setEmailError] = useState({
    isError: true,
    errorText: '',
  });
  const [pwError, setPwError] = useState({
    isError: true,
    errorText: '',
  });

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    if (pwError.isError || emailError.isError) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [emailError, pwError]);

  return (
    <>
      <InputEmail error={emailError} seterror={setEmailError} />
      <InputPw error={pwError} seterror={setPwError} />

      <Button className="size-l" onClick={handleNext} disabled={isBtnDisabled}>
        다음
      </Button>
    </>
  );
}
