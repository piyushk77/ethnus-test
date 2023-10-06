import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function F1(){

    const myStyle = {
        color: "blue",
        backgroundColor: "black"
    }

    return(
        <div>
            <h1 style={{color: "red"}}>Inline Style</h1>
            <h1 style={myStyle}>Internal style</h1>
            <h1 className="c1">External Style</h1>
            <h1 className="text-center text-success bg-dark">Bootstrap Style</h1>
        </div>
    )
}
export default F1;