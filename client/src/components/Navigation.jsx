import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <div className='pb-6 flex justify-between py-3 z-[100]'>
        <Link to="/tasks">
            <h1 className='
            text-white
            font-bold 
            pl-6
            pt-4
            text-4xl 
            lg:text-5xl //@media
            hover:text-amber-500
            active:text-blue-800
            ease-in-out duration-300'>Taskpy</h1>
        </Link>
        
        
    </div>
  )
}

export default Navigation