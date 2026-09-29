import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {registerUser} = useAuth(); 
    const {register, handleSubmit, formState: {errors}} = useForm();
    const handleRegister = (data)=>{
        registerUser(data.email, data.password)
        .then(result=>{
          console.log( 'after register' ,result.user);
        })
        .catch(error=>{
          console.log(error);
        })
        
    }
  return (
    <div className="my-12">
      <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegister)} className="fieldset">
            <label className="label">Email</label>
            <input {...register('email', {required: true})} type="email" className="input" placeholder="Email" />
            {
                errors.email?.type === 'required' && <p className="text-red-500">Email is required</p>
            }
            <label className="label">Password</label>
            <input {...register('password', {
                required: true, minLength: 6, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            })} type="password" className="input" placeholder="Password" />
            {
                errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>
            }
            {
                errors.password  && <p className="text-red-500">Must include at least one uppercase letter, one lowercase letter, one number .  </p>
            }
            <p>Already have an account ? <Link className="text-blue-500 underline" to='/login'>Login</Link></p>

            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
