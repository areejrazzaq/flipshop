import {useReducer} from 'react'; 

const initialState = {value: null , isTouched: false}
const inputReducer = (state, action) => {
  if(action.type === 'CHANGE'){
    return {value: action.val, isTouched: state.isTouched}
  }else if (action.type === 'BLUR'){
    return {value: state.value, isTouched: true}
  }else if (action.type === 'RESET'){
    return initialState
  }
  return initialState
}

const useInput3 = (initial, validation) => {
    const [inputState, dispatchInput] = useReducer(inputReducer, {value: initial || null, isTouched: false})


    const isValid = validation(inputState.value); 
    const hasError = !isValid && inputState.isTouched; 

    const onChangeHandler = (event) => {
        dispatchInput({type: 'CHANGE', val: event.target.value})
  }

  const onBlurHandler = event => {
    dispatchInput({type: 'BLUR'})
  }

  const reset = () => {
    dispatchInput({type: 'RESET'})
  }

  return {
    value: inputState.value,
    isValid, 
    hasError,
    reset,
    onChangeHandler,
    onBlurHandler, 

  }

}

export default useInput3; 