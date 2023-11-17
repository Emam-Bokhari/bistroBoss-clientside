import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from './../../hooks/useAxiosPublic';




const Register = () => {

    // const {createUser}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser,googleSignin } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()


    const onSubmit = (data) => {

        if (data.password.length < 6) {
            return alert('Password must be at least 6 characters or too long')
        }

        // console.log(data);0
        createUser(data.email, data.password)
            .then(() => {
                const userInfo = {
                    email: data.email
                }
                console.log(userInfo);
                axiosPublic.post("/api/v1/users", userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                    alert("successful")
                    navigate("/")
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleGoogeSignin=()=>{
        googleSignin()
        .then((res)=>{
           console.log(res.user);

           const userInfo={
            name:res.user?.displayName, 
            email:res.user?.email
           }
           axiosPublic.post("/api/v1/users",userInfo)
           .then(result=>{
            console.log(result.data);
           })

            alert("signin with google successfull")
            navigate("/")
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    return (
        <div>


            <div className="flex justify-center mt-20 my-10" >
                <div className="bg-[#f4f1ff] w-[310px] h-[530px] rounded-lg p-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 my-5" >
                        <h2 className="text-lg font-bold text-[#2a2a2a]" >
                            Register
                        </h2>
                        <p className="text-lg font-semibold text-[#272727]" >Please provide your details.</p>

                        {/* social signin */}

                        <div>
                            <button onClick={handleGoogeSignin}   className="w-full border-2 border-[#e5e5e5] rounded-md py-1 bg-white flex justify-center items-center gap-2 text-[#494949] font-bold text-[14px] cursor-pointer"> <div className="text-2xl" ><FcGoogle /></div> Sign in with google</button>
                        </div>

                        {/* Horizontal Line "Or" */}
                        <div className="flex items-center relative z-10">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <h2 className="text-base text-[#2a2a2a] relative z-10 mx-2">Or</h2>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>


                        {/* name */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">User Name</p>

                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#4b82f2]" type="text"  {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500" >This feild is required</span>}
                        </div>

                        {/* email */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">Email Address</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#4b82f2]" type="email" name="email" {...register("email", { required: true })} required />
                            {errors.email && <span className="text-red-500" >This feild is required</span>}
                        </div>

                        {/* password */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">Password</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#4b82f2]" type="password" name="password" {...register("password", { required: true })} required />
                            {errors.password && <span className="text-red-500" >This feild is required</span>}

                        </div>


                        {/* photoURL */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">PhotoURL</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#4b82f2]" type="text" name="photoURL" {...register("photoURL", { required: true })} />
                            {errors.photoURL && <span className="text-red-500" >This feild is required</span>}
                        </div>


                        {/* button */}
                        <div>
                            <input className="bg-[#004eec] text-white font-semibold py-1 border-2 border-[#004eec] w-full rounded-md " type="submit" value="SignUp" />
                        </div>


                        {/* signup */}
                        <div className="text-center" >
                            <p className="text-[14px] text-[2a2a2a] font-semibold">Already have an account? <Link className="underline" to="/login" >Signin</Link></p>
                        </div>

                    </form>

                </div>
            </div>


        </div>
    );
};

export default Register;