
import { useState } from "react";

function Create(){
    const [name , setName] = useState("");

const[email, setEmail] =useState("");

const [msg , setMsg] =useState("");



    return (
        
        <div name="Contact" className="w-full h-screen bg-[#0a192f] text-gray-300 pt-10 " >
         <div className="flex justify-evenly cursor-pointer  ">
            <h1 className="text-4xl font-bold border-b-4 border-purple-600 duration-300  hover:scale-125">Create Your blog</h1>
         </div>

         <div className="flex justify-center pt-24 ">
              
              <div className="w-[800px] h-[500px]  flex justify-center pr-8 ">
                 <div className="  w-[625px] h-[450px] ml-8 mt-4">
                <form className=" flex flex-col gap-8">
                    
                    <input  placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} name="name"className="ml-3 mt-3  mr-3  h-8 pl-3 text-black"type="text" ></input>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email" name="email"className="ml-3 mt-3 mr-3  h-8 pl-3 text-black" type="text" ></input>
                    <textarea onChange={(e)=>{
                        setMsg(e.target.value)
                    }}  value={msg} placeholder="What's in your mind" name="Message"className="ml-3 mt-3 mr-3 pl-3  h-[200px] text-black"type="text" ></textarea>
                     
                      <button  type ="Submit"className="border-2 border-white w-[200px] ml-52 h-10  hover:bg-pink-500 hover:scale-110 duration-300">Add</button>
                   




                </form>
                </div>
              </div>
              </div>


         </div>
        
    )
}

export default Create