import  bgvideo  from "../../../src/assets/back.mp4"
function Homefirstsection() {
    return (
        <>
            <div className="firstSection">
                <video
                    src={bgvideo}
                    autoPlay
                    loop
                    muted
                />
                <div className="flex-container">
                    <p className="wlc">Welcome to </p>
                    <h1 className="mainheading">Expert Digital Web </h1>
                    <p className="successmsg">Solutions for Success:<br/> Empowering Your Business, Enriching Your Future.</p>
                    {/* <button className="btn btn-style mt-3">
                        CONTACT US
                    </button> */}
                </div>
            </div>
        </>
    )
}

export default Homefirstsection;