import React from "react";

const currency = ({setCurrency}) => {
    return(
        <>
            <select className='rounded-2xl bg-gray-500 text-xl p-2' type="text" placeholder="Select your currency" onChange={setCurrency}>
                <option value="" selected>Select a currency</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
            </select>
        </>
    )
}

export default currency;