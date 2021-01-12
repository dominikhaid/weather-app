import React from 'react';
import {useRouter} from 'next/router';

export default function Index() {
  const router = useRouter();
  if (process.browser) router.push('/home');

  return <></>;
}
