import { useForm } from "react-hook-form";

const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const handleRegister = (data)=>{
        console.log('after register', data);
    }
  return (
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
                required: true, minLength: 6
            })} type="password" className="input" placeholder="Password" />
            {
                errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>
            }
            {
                errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 character or longer</p>
            }

            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
