import { Link , Outlet } from "react-router-dom";
function Navbar(){
    return(
        <>
        
    
            <nav className=" w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
         <ul>
             <li>
                <Link to ="/">Home</Link>
             </li>

             <li>
                <Link to ="/Trending">Trending</Link>
             </li>

             
    
          </ul>
          
          </nav>
       

        <main>
                <Outlet></Outlet>
             </main> 
             
        </>
    )
}
export default Navbar;