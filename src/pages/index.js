import React from 'react';
import {useRouter} from 'next/router';

/**
 * @desc NOTE REDIRECT THIS TO HOME
 */
export default function Index() {
  const router = useRouter();
  if (process.browser) router.push('/home');

  return <></>;
}
