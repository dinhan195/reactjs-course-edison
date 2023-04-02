import './SignupForm.css'
import React from 'react'
// import {useForm} from 'react-hook-form'
function focusInput(e) {
  
  e.target.parentElement.classList.add('hidden-label')
}
function blurInput(e) {
  
  e.target.parentElement.classList.remove('hidden-label')
}
export default function SignupForm() {
  
  return (<form className='signup-form'>
    <div className='signup-field '>
      <label htmlFor='email'>Your email<sup>*</sup></label>
      <input id='email' type='email'  onFocus={focusInput} onBlur={blurInput}/>
    </div>
    <div className='signup-field '>
      <label htmlFor='usernmae'>User name<sup>*</sup></label>
      <input id='usernaem' type='text'  onFocus={focusInput} onBlur={blurInput}/>
    </div>
    <div className='signup-field '>
      <label htmlFor='fullname'>Full name<sup>*</sup></label>
      <input id='fullname' type='text'  onFocus={focusInput} onBlur={blurInput}/>
    </div>
    <div className='signup-field '>
      <label htmlFor='password'>Password<sup>*</sup></label>
      <input id='password' type='password'  onFocus={focusInput} onBlur={blurInput}/>
    </div>
    <div className='signup-field '>
      <label htmlFor='phone-number'>Phone number<sup>*</sup></label>
      <input id='phone-number' type='numder'  onFocus={focusInput} onBlur={blurInput}/>
    </div>
    <div className='signup-field '>
      <label htmlFor='address'>Address<sup>*</sup></label>
      <input id='address' type='text'  onFocus={focusInput} onBlur={blurInput}/>
    </div>
    
    <button className='button-signup'>CREATE ACCOUNT</button>
    <p className='link-signin'>or log in to Your account</p>
   
  </form>)
}