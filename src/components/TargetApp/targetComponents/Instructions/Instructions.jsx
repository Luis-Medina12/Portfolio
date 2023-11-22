import showMore from './DisplayInfo.jpg';
import tcinLocation from './TCIN-Location.png';


const Instructions = () =>{
    // const classes = useStyles();

    return (
        <div className = "container">
            <div className = "explain">
                <h1 className = "welcome"> Welcome to the Target Better Price Tool!</h1>
                <h3> This tool allows you to determine if a product youre looking for is in stock around you. Additionally, it 
                    will figure out what to the total price of the product will be based on the store's local tax rate.
                </h3>
                <h3> 
                    Enter your product's TCIN number, your home zip, and the distance you are willing to drive above. 
                    See below for instructions on how to obtain a TCIN.
                </h3>
                <h3 id = 'instructionsText' className="instructions">
                    Note: The third party API used by this program is not functioning as of November 2023, so temporary results 
                    will be shown regardless of input.
                </h3>

            </div>
            <div id='tcinInstructions'>
                <h3 id = 'instructionsText' className="instructions">Below are simple instructions on how to find the TCIN of any Target product.</h3>

                <div id='instructionImages' className = "imageContainer">
                    <img className = "images" src={showMore} alt="Where to see TCIN" width="600" height="380"></img>
                    
                    <img className = "images" src={tcinLocation} alt="Where to see TCIN" width="600" height="380"></img>
                </div>
            </div>
            
        </div>
    )
}

export default Instructions;