import Head from 'next/head'

import type { AppProps } from 'next/app'
import '../styles/Layout.css'
import '../styles/globals.css'
import '../styles/home.css'
import '../styles/home-part2.css'

 const App =({ Component, pageProps }: AppProps)=> {

  return(
   <>
    <Head>
      <title>HTTPOnly auth</title>
      <meta name='viewport' content='width=device-width, inital-scale=1' />
      
    </Head>
    <Component {...pageProps} />
   
    </>
  )

}
export default App