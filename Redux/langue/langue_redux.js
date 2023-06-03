
const SET_LANGUE= 'SET_LANGUE'
const SET_COOKIES= 'SET_COOKIES'
const SET_CURRENT_IMAGE= 'SET_CURRENT_IMAGE'
const SET_LINK= 'SET_LINK'
import Cookies from "js-cookie";


export const Set_link_redux= (link) => async dispatch => {
  console.log(  'change_langue....')
 
 
  dispatch(ChangeLinkRequest(link))

 
 }
export const Set_langue_redux= (lang) => async dispatch => {
    console.log(  'change_langue....')
   
   
    dispatch(ChangeLangueRequest(lang))
  
   
   }
   export const Set_cookies_redux= (val) => async dispatch => {
    console.log(  'set cook....')
    if (val){
      Cookies.set('cok', true);
    }
    else{
      
    }
    dispatch(ChangeCookiesRequest(val))
   
   } 
   export const Set_current_image_redux= (val) => async dispatch => {
    console.log(  'change_curent img....')
   
    dispatch(SetCurrentImageRequest(val))
   
   } 

   export const ChangeLinkRequest = (link) => {
    return {
      type: SET_LINK ,
      set_to:link,
  
    }
  }
   export const ChangeLangueRequest = (lang) => {
       return {
         type: SET_LANGUE ,
         set_langue:lang,
     
       }
     }
     export const ChangeCookiesRequest = (val) => {
      return {
        type: SET_COOKIES ,
        set_cookies:val,
    
      }
    }
    export const SetCurrentImageRequest = (val) => {
      return {
        type: SET_CURRENT_IMAGE ,
        set_current_image:val,
    
      }
    }

     const initialState = {
   
      
        langue:'DE',
        cookies_accepted:false,
        cookies_visible:false,
        current_image:0,
        to:"/",
        wait_to:0,
      
      
       
       
       
      }
    
    
      const ChangeLangueReducer = (state = initialState, action) => {
     
        switch (action.type) {
          case SET_LANGUE: return {
            ...state,
            langue:action.set_langue,
            
           
         
          }
          case  SET_COOKIES: return {
            ...state,
      
            cookies_accepted:action.set_cookies,
            cookies_visible:true,
           
         
          }
          case  SET_CURRENT_IMAGE: return {
            ...state,
      
            current_image:action.set_current_image,
           
         
          }
          case  SET_LINK: return {
            ...state,
      
            to:action.set_to,
            wait_to:0,
           
         
          }
         
          default:{
            return {
            
              ...state
            
            }
          
          }
        }
      }
      
      export default  ChangeLangueReducer