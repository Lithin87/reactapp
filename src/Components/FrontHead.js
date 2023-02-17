import { useContext } from "react";
import appContext from "../Context.js/app-context";

function FrontHead(props) {

    const ctx = useContext(appContext);

    let status_style = {
        color: ctx.activecolor,
        fontSize: 40 + 'px'
    }

    return (

        <div style={{ "text-align": "center" }}>
            <h1 style={{ color: "rgba(102, 91, 199, 0.685)" }}>
                JOBIN'S SOFTWARE DEVELOP SHOP
            </h1>

            <font style={status_style}> STATUS : {ctx.isclosed === false ? "OPEN" : "CLOSED.SEE YOU TOMORROW"}  </font>
        </div>

    )
}
export default FrontHead;

