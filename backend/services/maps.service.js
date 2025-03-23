const { Client } = require("@googlemaps/google-maps-services-js");
const axios = require('axios');

const client = new Client({});

module.exports.getAddressCoordinates = async (address) => {
    try {
        const response = await client.geocode({
            params: {
                address: address,
                key: process.env.GOOGLE_MAPS_API, // Replace with your API key
            },
        });
        // console.log(response.data.results[0]);
        
        if (response.data.results.length > 0) {
            const location = response.data.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng,
            };
        } else {
            throw new Error("No results found for the given address.");
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error.message);
        throw error;
    }
};


module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }
    

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
    
    try {


        const response = await axios.get(url);
        console.log(response.data);
        
        if (response.data.status === 'OK') {
            
            if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            }

            return response.data.rows[ 0 ].elements[ 0 ];
        } else {
            throw new Error('Unable to fetch distance and time');
        }

    } catch (err) {
        console.error(err);
        throw err;
    }
}


// module.exports.getLocationSuggestions = async (input) => {
//     if(!input){
//         res.status(400).json("Input is required")
//     }


//     const key = process.env.GOOGLE_MAPS_API;
//     const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${key}`;

//     try {
        
//         const response = await axios.get(url)

//         console.log(response.data);
        
//         if (response.data.status === 'OK') {
//             return response.data.predictions.map((prediction) => ({
//                 description: prediction.description,
//                 placeId: prediction.place_id,
//             }));
//         } else {
//             throw new Error('Unable to fetch location suggestions');
//         }
//     } catch (error) {
//         console.error("Error fetching location suggestions:", error.message);
//         throw error;
//     }
// };



module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Input query is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    const response = await axios.get(url);

        // // Log the response for debugging
        // console.log("Autocomplete API Response:", response.data);
    try {
        

        if (response.data.status === 'OK') {
            // Map predictions to return descriptions
            return response.data.predictions.map(prediction => ({
                description: prediction.description,
                placeId: prediction.place_id,
            }));
        } else {
            // Handle specific API errors
            throw new Error(`Google Maps API Error: ${response.data.status}`);
        }
    } catch (err) {
        console.error("Error fetching autocomplete suggestions:", err.message);
        throw new Error('Failed to fetch autocomplete suggestions. Please check your API key and input.');
    }
};