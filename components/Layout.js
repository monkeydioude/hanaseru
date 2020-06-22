import Header from "./Header"
import NavBar from "./NavBar"
import Content from "./Content"

import "./Layout.scss"

export default (props) => {
    return (
        <div className="Layout">
            <Header />
            <div className="flexRow">
                <NavBar />
                <Content>{props.children}</Content>
            </div>
        </div>
    )
}