import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion.description)
        } else if (activeField === 'destination') {
            setDestination(suggestion.description)
        }
        // setVehiclePanel(true)
        // setPanelOpen(false)
    }

    return (
        <div className='mt-10'>
            {/* Display fetched suggestions */}
            {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex m-2 bg-gray-100 gap-4 border-2 p-3 border-gray-50 active:border-black rounded-3xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-1/10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium w-9/10'>{elem.description}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default LocationSearchPanel