function Home(){
    return(
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja Bem Vinde!</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        
                        <div className="flex justify-around gap-4">
                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
                         </div>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <img src="http://i.imgur.com/VpwApCU.png" alt="" className='w-2/3'/>
                    </div>
                 </div>
            </div>
        </>
    );
}
export default Home;