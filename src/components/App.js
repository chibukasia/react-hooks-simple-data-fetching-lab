// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const [randomDogs, setRandomdogs] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(
        ()=>{
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(res=>res.json())
            .then(dogData=>{
                setRandomdogs(dogData);
                setIsLoaded(true)
            })
        }, []
        
    )
    
    if(!isLoaded){
        return <p>Loading...</p>
    }

    return (
        <>
         <img src={randomDogs.message} alt={'A Random Dog'}/> 
        </>
    )

}

export default App;