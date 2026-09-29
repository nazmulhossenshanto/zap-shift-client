import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth"
import { Link } from 'react-router'
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const { register, handleSubmit, formState: {errors} } = useForm();
  const handleLogin = (data)=>{
    signInUser(data.email, data.password)
    .then(result => {
      console.log('after login', result.user);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="my-24">
      <h1 className="text-3xl font-bold text-center ">Welcome Back</h1>
      <p className="text-center text-lg">Login with zap shift</p>
      <div className="flex justify-center items-center">
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleLogin)} className="fieldset">
          {/* email field */}
          <label className="label">Email</label>
          <input {...register('email', {required: true})} type="email" className="input" placeholder="Email" />
         {
          errors.email?.type === "required" && <p className="text-red-500">Email field is requird</p>
         }
          {/* password field */}
          <label className="label">Password</label>
          <input {...register('password', {required: true, minLength: 6})} type="password" className="input" placeholder="Password" />
          {
            errors.password?.type === "required" && <p className="text-red-500">Password field is requird</p>
          }
          {
            errors.password?.type === "minLength" && <p className="text-red-500">Password must be at least 6 character or longer</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <p>New to Zap Shift <Link className="text-blue-500 underline" to='/register'>Register</Link> </p>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login