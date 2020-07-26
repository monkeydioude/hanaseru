import NavBar from "../NavBar/NavBar"
import Content from "../Content/Content"
import "gridlex/src/gridlex.scss"
import "./Layout.scss"

export default (props) => {
    return (
        <div className="Layout">
            <NavBar />
            <Content>{props.children}</Content>
        </div>
    )
}