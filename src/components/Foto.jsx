import ouarzazate from '../assets/ouarzazate.jpeg'
import marrakech from '../assets/marrakech.jpeg'
import merzouga from '../assets/merzouga.jpeg'
import chefchaouen from '../assets/chefchaouen.jpeg'
import zanzibar from '../assets/zanzibar.jpeg'

const Foto =()=>{
    return(
        <div className=' px-14'>
            <div className='text-center my-4'>
                <h1>All-Inclusive Resorts</h1>
                <p>On the Caribbean's best beasches</p>
            </div>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 '>  
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 rounded-md' src={ouarzazate} alt="" />
                <img className='w-full h-full object-cover rounded-md' src={marrakech} alt="" />
                <img className='w-full h-full object-cover rounded-md' src={merzouga} alt="" />
                <img className='w-full h-full object-cover rounded-md' src={chefchaouen} alt="" />
                <img className='w-full h-full object-cover rounded-md' src={zanzibar} alt="" />

            </div>
                
                
        </div>
    )
}
export default Foto 