import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { InputImg } from '../Element/Input/InputImg';
import { InputUsername, InputAcctname, InputIntro } from '../InputComponents';

export function Information({ initialData, setIsCompleteDisabled }) {
  const isSignUp = useLocation().pathname.includes('sign-up');
  const profile = initialData ?? null;

  const [usernameError, setUsernameError] = useState({
    isError: isSignUp,
    errorText: '',
  });
  const [accountnameError, setAccountnameError] = useState({
    isError: isSignUp,
    errorText: '',
  });

  useEffect(() => {
    if (usernameError.isError || accountnameError.isError) {
      setIsCompleteDisabled(true);
    } else {
      setIsCompleteDisabled(false);
    }
  }, [usernameError, accountnameError]);

  return (
    <>
      <InputImg initialImg={profile ? profile.image : undefined} />
      <InputUsername initialValue={profile ? profile.username : ''} error={usernameError} seterror={setUsernameError} />
      <InputAcctname initialValue={profile ? profile.accountname : ''} error={accountnameError} seterror={setAccountnameError} />
      <InputIntro initialValue={profile ? profile.intro : ''} />
    </>
  );
}
