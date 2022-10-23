import { useState } from "react"

import FormInput from "../form-input/form-input.component"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"

import './sign-in-form.styles'

import {
  signUserInWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils"
import { ButtonContainer, SignupContainer } from "./sign-in-form.styles"

const defaultFormFields = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const { email, password } = formFields

  const resetFormFields = () => setFormFields(defaultFormFields)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp()
    console.log({user})

    if (!user) return
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { email, password } = formFields

    if (!email || !password) {
      alert('Provide email and password to sign in')
      return
    }

    try {
      await signUserInWithEmailAndPassword(email, password)
      resetFormFields()
      
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break;
        default:
          console.log(error)
      }
    }
  }

  return (
    <SignupContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Email Address"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonContainer>
          <Button type="submit">Sign In </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >
            Google sign in
          </Button>
        </ButtonContainer>

      </form>
    </SignupContainer>
  )
}

export default SignInForm
