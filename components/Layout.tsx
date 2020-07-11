import NavBar from "./NavBar"
import Content from "./Content"

import "./Layout.scss"

export default (props) => {
    return (
        <div className="Layout">
            <NavBar />
            <div className="flexRow">
                <Content>{props.children}</Content>
            </div>
        </div>
    )
}