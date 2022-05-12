import React from "react";

const useAPI = () =>{
    const getRequest = async (URL) =>
    {
        let Response = await fetch(URL)
        return Response.json
    }
    return { getRequest }
}

export default useAPI