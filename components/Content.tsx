import "./Content.scss"

export default (props) => {
    return (
        <div className="Content">
            <div className="Content-container">
                {props.children}
            </div>
        </div>
    )
}