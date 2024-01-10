const prices = ({price,highday,lowday})=>{
    return(
        <>
            <p className='flex flex-col gap-5'>
              <span className='text-white text-2xl font-bold'>PRICE: ${price} </span> 
              <span className='text-white text-2xl font-bold'>HIGHDAY: ${highday} </span> 
              <span className='text-white text-2xl font-bold'>LOWDAY: ${lowday} </span> 
            </p>
        </>
    )
}

export default prices;