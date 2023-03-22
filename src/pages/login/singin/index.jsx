import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { useAuth } from '../../../hooks/auth'
import { usePageContent } from '../../../hooks/page'
import FormSignIn from './form'

export default function SignIn() {

    return(
     <>
      <FormSignIn />
     </>
    )
}
