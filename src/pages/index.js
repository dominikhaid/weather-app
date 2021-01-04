import React from 'react';
import {useRouter} from 'next/router';

export default function Index(weatherStates) {
  const router = useRouter();
  if (process.browser) router.push('/home');

  return <React.Fragment></React.Fragment>;
}
