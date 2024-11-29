import "bootstrap/dist/css/bootstrap.min.css"



const NavigationPanel = () => {


    return (
        <div className="d-flex p-2 gap-3">

            <h3 className="font-roboto">Amazon</h3>
            <div>
                <p className="m-0">Deliver to</p>
                <p className="m-0">Nigeria</p>
            </div>
            <input 
            type="text"
            placeholder="Search Amazon" 
           style={{width:"30%", maxWidth:"35%"}}
            />

        </div>
    )
};

export default NavigationPanel;