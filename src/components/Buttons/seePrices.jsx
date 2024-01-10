import React, { useState } from "react";

const seePrices = ({getPrice}) => {

    return(
        <>
        <div className="flex justify-center">
            <button className="bg-emerald-500 rounded text-xl p-2" onClick={getPrice}>
                Get prices
            </button>
        </div>
        </>
    )
}

export default seePrices;