const Header=() =>{
    return (
       <header>
            <div className="bg-gray-100 py-4">
                <div className="bg-cover bg-no-repeat w-full" 
                style={{backgroundImage:`URL('https://images.unsplash.com/photo-1530053969600-caed2596d242')`}}>
               
                <h1 className="mix-blend-lighten bg-gray-100 text-xl md:text-6xl py-8 text-center">Chase Your Dreams</h1>
            </div>
            <div className="border-2 border-cyan-600 mx-4 md:mx-8 rounded-sm bg-white">
                <p className="text-center text-lg md:text-3xl">"The journey of a thousand miles begins with a single step."</p>
                <p className="text-center text-base italic font-extralight">Every small effort counts. Trust the process and keep moving forward.</p>
            </div>
            </div>   
       </header>
    )
}

export default Header;

// h1 element should blend with background