import React from "react";

const useAPI = () =>{

    const getRequest = async (URL) =>
    {
        try {
            let Response = await fetch(URL)
            return Response.json   
        } catch (error) {
            console.log("Error: ", error)
        }
    }
    return { getRequest }
}

export default useAPI