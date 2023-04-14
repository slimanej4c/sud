
const SET_LANGUE= 'SET_LANGUE'
const SET_COOKIES= 'SET_COOKIES'


export const Set_langue_redux= (lang) => async dispatch => {
    console.log(  'change_langue....')
   
   
    dispatch(ChangeLangueRequest(lang))
   
   
   
   }
   export const Set_cookies_redux= (val) => async dispatch => {
    console.log(  'change_langue....')
   
   
    dispatch(ChangeCookiesRequest(val))
   
   
   
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


     const initialState = {
   
      
        langue:'FR',
        cookies_accepted:true,
      
      
       
       
       
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
         
          default:{
            return {
            
              ...state
            
            }
          
          }
        }
      }
      
      export default  ChangeLangueReducer