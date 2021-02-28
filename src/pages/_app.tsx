import { useState } from 'react';
import '../styles/globals.css';

import { ChallengeProvider } from '../Contexts/ChallengeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp
