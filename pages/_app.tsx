import Head from 'next/head'
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app'
import '../styles/Layout.css'
import '../styles/globals.css'
import '../styles/home-part1.css'
import '../styles/home-part2.css'
import '../styles/home-part3.css'
import { Provider } from 'react-redux';
import  { store ,wrapper ,store2 }  from '../Redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistReducer, persistStore } from 'redux-persist';
import { useSelector, useDispatch , } from 'react-redux';
const App =({ Component, pageProps }: AppProps)=> {
  const cookies_accepted = useSelector(state => state.change_langue_reducer.cookies_accepted)
  const langue = useSelector(state => state.change_langue_reducer.langue)
  const audioCurrentTimeState: any = useSelector((state) => {
    return state.change_langue_reducer.langue;
  });


  const dispatch = useDispatch(); 
  //const persistor =  persistStore (store)
  //const persistor = cookies_accepted ? persistStore (store2) :  persistStore (store)
  useEffect(()=> {
   console.log('apppppppppppppp',cookies_accepted,langue)
   
  }, [])
  useEffect(() => {
   

    //{cookies_accepted ? persistStore (store) :  persistStore (store2)}
  }, [audioCurrentTimeState]);
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

export default wrapper.withRedux(App);
