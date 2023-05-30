import Head from 'next/head'
import React, { Component ,useState,useEffect} from 'react'
import type { AppProps } from 'next/app'
import '../styles/Layout.css'
import '../styles/globals.css'
import '../styles/accueil/home-part1.css'
import '../styles/accueil/home-part2.css'
import '../styles/accueil/home-part3.css'
import '../styles/accueil/home-part4.css'
import '../styles/footer.css'
import '../styles/contact.css'
import '../styles/agir.css'

import '../styles/agir/devenir.css'
import '../styles/agir/agir_nous.css'
import '../styles/agir/sponsor.css'
import '../styles/actions/domaine.css'
import '../styles/actions/intro.css'
import '../styles/actions/project.css'

import { Provider } from 'react-redux';
import Cookies from "js-cookie";
import { useDispatch } from 'react-redux';
import  { store , persistedReducer }  from '../Redux/store';
import { getCookiesAccepted ,z} from '../Redux/selector';
import { PersistGate } from 'redux-persist/integration/react';
import {  persistStore } from 'redux-persist';
import { useStore } from 'react-redux';

import fs from 'fs';
const App =({ Component, pageProps }: AppProps)=> {
  const [fileContent, setFileContent] = useState('');
  const [CookiesAccepted, setCookiesAccepted] = useState(false);
// essayer comment lire un fichier txt et le modifier
//const cookiesAccepted = store.getState().change_langue_reducer.cookies_accepted;
// allez au chargpt et cherche comment comment changeer la valeur de store.getState(). lorsque il change

  //const persistor =  persistStore (store)
  //const persistor = cookies_accepted ? persistStore (store2) :  persistStore (store)


  useEffect(() => {
  //  async () => {
 
      if (typeof window !== 'undefined') {
        console.log('You are on the browser');
        const initialToken = localStorage.getItem('persist:root-key');
        console.log("InitialToken set " + initialToken);
        if (initialToken) {
          console.log('is exists..........');
          setCookiesAccepted(true);
        } else {
          console.log('is not exists..........');
          setCookiesAccepted(false);
        }
      } else {
        const initialToken = localStorage.getItem('token');
        console.log('You are on the server and token is ' + initialToken);
      }
  //  }
  }, [CookiesAccepted]);



  const cookiesAccepted = CookiesAccepted;

 



  // const [persistorReady, setPersistorReady] = useState(false);

  // const f= async () =>{

    
  //   fetch('http://localhost:3000/api/hello')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('datttta',data)
  //       if (data.name) {
  //         console.log('datttta',data)
  //         setFileContent(data.name);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching file:', error);
  //     });
  // }

    return (
      <Provider store={store}>
      
        {CookiesAccepted ? <PersistGate loading={null} persistor={persistStore(store) }> 
          <Head>
       
            <title>SOLIDARITE SUD</title>
            <meta name='viewport' content='width=device-width, inital-scale=1' />
          </Head>
          <Component {...pageProps} />
          </PersistGate>
           : <> 
           <Head>
        
             <title>SOLIDARITE SUD</title>
             <meta name='viewport' content='width=device-width, inital-scale=1' />
           </Head>
           <Component {...pageProps} />
           </>} 
          </Provider>
          
  );

}

export default App;
