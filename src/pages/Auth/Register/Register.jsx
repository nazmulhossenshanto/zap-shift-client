import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from 'axios'

const Register = () => {
  const { registerUser, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log("after register", result.user);
        const formData = new FormData();
        formData.append("image", profileImg);
        const image_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;
        // get image url from imageBB
        axios.post(image_api_url, formData)
        .then(res=>{
          const userProfile = {
            displayName : data.name,
            photoURL : res.data.data.url
          };
          updateUser(userProfile)
          .then(()=>{
            console.log('user profile updated successfully.');
          })
          .catch(error=>{
            console.log('updating user error', error);
          })
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-12">
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleRegister)} className="fieldset">
              {/* name field */}
              <label className="label">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="input"
                placeholder="Your name"
              />
              {/* photo field */}
              <label className="label">Photo</label>
              <input
                {...register("photo", { required: true })}
                type="file"
                className="file-input"
                placeholder="Upload photo"
              />
              {/* email field */}
              <label className="label">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}
              {/* password field */}
              <label className="label">Password</label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password && (
                <p className="text-red-500">
                  Must include at least one uppercase letter, one lowercase
                  letter, one number .{" "}
                </p>
              )}
              <p>
                Already have an account ?{" "}
                <Link className="text-blue-500 underline" to="/login">
                  Login
                </Link>
              </p>

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
