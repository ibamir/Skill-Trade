

const Navbar = () => {
  return (
    <div className='w-full p-4 flex items-center justify-center'>
        <div className='bg-primary max-w-5xl w-full p-2 rounded-2xl'>
           <span className="flex items-center justify-center gap-1">
                <h1 className="text-accent font-bold text-xl">Passit</h1>
                <span className="text-secondary text-2xl font-bold ">.</span>
           </span>
        </div>
    </div>
  )
}

export default Navbar