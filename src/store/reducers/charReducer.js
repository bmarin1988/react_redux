import { CHAR_TYPES } from "../actions/actionChar";

export const charInitialState={
  chars: [],
  charsSelected:[]
}



export function charReducer (state,action){
  switch (action.type) {
    case CHAR_TYPES.LOAD_CHARS:
      return {
        ...state,
        chars: [ ...state.chars, ...action.payload]
      }

    case CHAR_TYPES.ADD_CHAR_TO_LIST:
      return {
        ...state
        //charsSelected: [ ...state.charsSelected, action.payload]
        }
    
  
    default:
      return{
        ...state
      }
  }


}