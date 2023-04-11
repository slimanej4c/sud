import Head from 'next/head'

import type { AppProps } from 'next/app'
import '../styles/Layout.css'
import '../styles/globals.css'
import '../styles/home-part1.css'
import '../styles/home-part2.css'
import '../styles/home-part3.css'

 const App =({ Component, pageProps }: AppProps)=> {

  return(
   <>
    <Head>
      <title>SOLIDARITE SUD</title>
      <meta name='viewport' content='width=device-width, inital-scale=1' />
      
    </Head>
    <Component {...pageProps} />
   
    </>
  )

}
export default App