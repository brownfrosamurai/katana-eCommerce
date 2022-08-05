import Button from '../../components/button/button.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  // signin with google popup 
  const logGoogleUser = async () => {
    // get user from google popup 
    const { user } = await signInWithGooglePopUp()

    if (!user) return

    await createUserDocumentFromAuth(user)
  }

  // const 

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button buttonType="google" onClick={logGoogleUser} children='Sign in with Google Popup' />
      <SignUpForm />
    </div>
  )
}

export default SignIn