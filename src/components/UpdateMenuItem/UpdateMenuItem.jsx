import { useLoaderData } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const UpdateMenuItem = () => {

    const menuItem = useLoaderData()
    const { name, image, price, category,_id } = menuItem || {}

    const axiosPublisc = useAxiosPublic()
    const axiosSecure=useAxiosSecure()
    

    const { register, handleSubmit,reset } = useForm()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY

    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const onSubmit = async (data) => {
        // console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublisc.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(res.data);

        if (res.data.success) {

            const menuItem = {
                category: data.category,
                price: data.price,
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            console.log(menuItem);
            console.log(res.data.data.display_url);

            const menuRes = await axiosSecure.patch(`/api/v1/${_id}/update-menu`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount>0) {
                alert("update done")
            }
        }
    }

    return (
        <div className="my-10 p-4" >

            <SectionTitle heading="Add Items" subHeading="Whats New ?" />


            <div className="bg-[#f4f1ff] p-6  my-5 rounded-md" >

                <form onSubmit={handleSubmit(onSubmit)} >
                    {/* email and job title */}
                    <div className="flex " >
                        {/* email */}
                        <div className="flex-1" >
                            <input className="bg-white p-2 rounded-sm w-full outline-none" type="text" name="recipe" placeholder="Recipe Name" {...register("recipe")} defaultValue={name} />
                        </div>

                    </div>

                    {/* category and deadline */}
                    <div className="flex flex-col md:flex-row  gap-5 my-5" >
                        <div className="flex-1" >
                            {/* category */}

                            <select className="bg-white w-full p-2 rounded-sm outline-none" name="category" {...register("category")} defaultValue={category} >
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* deadline */}
                        <div className="flex-1" >
                            <input className="bg-white w-full p-2 rounded-sm outline-none" type="text" name="price" placeholder="Price" {...register("price")} defaultValue={price} />
                        </div>
                    </div>

                    {/*  description */}
                    <div className="my-5" >
                        <textarea className="w-full rounded-sm resize-none p-2 outline-none" name="details" rows="10" placeholder="Recipe Details" {...register("details")} ></textarea>
                    </div>

                    {/* upload pic */}
                    {/*  description */}
                    <div  >
                        <input type="file" name="image" {...register("image")} />
                    </div>

                    {/* add job button */}
                    <div className="my-5" >
                        <input className="bg-[#754ffe] rounded-sm py-2 px-6 text-white font-simibold text-xl cursor-pointer" type="submit" value="Update Item"  />
                    </div>
                </form>

            </div>

        </div>
    );
};

export default UpdateMenuItem;