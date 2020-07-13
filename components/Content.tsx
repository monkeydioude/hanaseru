import "./Content.scss"

export default (props) => {
    return (
        <div className="Content grid">
            {props.children}
        </div>
    )
}