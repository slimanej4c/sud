
const SET_LANGUE= 'SET_LANGUE'
const SET_COOKIES= 'SET_COOKIES'
const SET_CURRENT_IMAGE= 'SET_CURRENT_IMAGE'


export const Set_langue_redux= (lang) => async dispatch => {
    console.log(  'change_langue....')
   
   
    dispatch(ChangeLangueRequest(lang))
  
   
   }
   export const Set_cookies_redux= (val) => async dispatch => {
    console.log(  'set cook....')
   
    dispatch(ChangeCookiesRequest(val))
   
   } 
   export const Set_current_image_redux= (val) => async dispatch => {
    console.log(  'change_curent img....')
   
    dispatch(SetCurrentImageRequest(val))
   
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
   
      
        langue:'FR',
        cookies_accepted:true,
        current_image:0,
      
      
       
       
       
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
           
         
          }
          case  SET_CURRENT_IMAGE: return {
            ...state,
      
            current_image:action.set_current_image,
           
         
          }
         
          default:{
            return {
            
              ...state
            
            }
          
          }
        }
      }
      
      export default  ChangeLangueReducer