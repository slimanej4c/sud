import Head from 'next/head'

import type { AppProps } from 'next/app'
import '../styles/Layout.css'
import '../styles/globals.css'
import '../styles/home-part1.css'
import '../styles/home-part2.css'
import '../styles/home-part3.css'
import '../styles/home-part4.css'
import '../styles/footer.css'
import '../styles/contact.css'
import '../styles/agir.css'

import '../styles/agir/devenir.css'
import '../styles/agir/agir_nous.css'
import '../styles/agir/sponsor.css'

import { Provider } from 'react-redux';
import  { store }  from '../Redux/store';


const App =({ Component, pageProps }: AppProps)=> {




  //const persistor =  persistStore (store)
  //const persistor = cookies_accepted ? persistStore (store2) :  persistStore (store)

  const a= false

    return (
      <Provider store={store}>
          <Head>
            <title>SOLIDARITE SUD</title>
            <meta name='viewport' content='width=device-width, inital-scale=1' />
          </Head>
          <Component {...pageProps} />
          </Provider>
  );
}

export default App;
