export default function FridgeProfile() {
    return (
        <div className="fridgePage--parent">
            <div className="fridgePage--left">
                <div className="fridgePage--status">
                    <h1>Fridge Name</h1>
                    <p>Status of Fridge <span>Circle denoting color</span></p>
                </div>
                <div className="fridgePage--about">
                    <h2>Address</h2>
                    <p>Pull address from Database</p>
                    <h2>About this fridge</h2>
                    <p>Lorem impsum</p>
                    <h3>Dietary</h3>
                    <ol>
                        <li>Pull from database array</li>
                    </ol>
                </div>
            </div>
            <div className="fridgePage--right">
                <img/>
                <p>Fridge</p>
            </div>
        </div>
    )
 }
 