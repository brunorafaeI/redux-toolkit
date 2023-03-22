import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { useAuth } from '../../hooks/auth'
import { usePageContent } from '../../hooks/page'

export default function SignIn() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { SignIn } = useAuth()
  const { setPageContent } = usePageContent()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    const { name, email } = data

    if (!name && !email) {
      throw new Error('You must provide a name and email')
    }

    dispatch(SignIn(data))
    dispatch(setPageContent({ pageContent: 'dashboard' }))
    reset()
  }

    return(
      <div className="card w-[26.6rem] bg-base-100 flex items-center shadow-2xl m-[8.2rem]">
        <div className="card-body flex items-center">
          <h2 className="card-title mb-6">Sign In</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-6">

              <div className="form-control w-screen max-w-xs mb-6">
                <label className="label-text mb-1 ml-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", { required: true })}
                />

              </div>

              <div className="form-control w-screen max-w-xs mb-6">
                <label className="label-text mb-1  ml-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
                />
              </div>

              <button
                className="btn btn-primary w-full"
              >
                Log in
              </button>
            </div>
          </form>

        </div>
      </div>
    )
}
