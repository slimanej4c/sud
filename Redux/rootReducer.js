import { combineReducers } from 'redux'


//import RegisterReducer from './Register/register_redux'


import ChangeLangueReducer from  './langue/langue_redux'

console.log('rootReducer')

const rootReducer = combineReducers({

   change_langue_reducer:ChangeLangueReducer


    
})

export default rootReducer