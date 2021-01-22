import React from 'react'; 


const WatsonAssistant = () => {

    const demoWatson = () => {
        window.loadWatsonAssistantChat({
            integrationID: process.env.REACT_APP_INTEGRATIONID, // The ID of this integration.
            region: "eu-gb", // The region your integration is hosted in.
            serviceInstanceID: process.env.REACT_APP_SERVICEINSTANCEID, // The ID of your service instance.
        }).then((instance: any) => {
            instance.render(); 
        })
    }
    demoWatson();
    // useEffect(
    //     //dispatch
    //     demoWatson(); 
    // }, [])

   return (
        <>
        </>

   )
}

export default WatsonAssistant; 