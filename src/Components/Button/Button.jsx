import "./Button.scss";

export default function Button(props) {
    return (
        <button
            className={`"btn-button"
                ${props.type === "delete" && "btn-button btn-button--delete"} 
                ${props.type === "edit" && "btn-button btn-button--edit"}
                ${props.type === "confirm" && "btn-button btn-button--confirm"}`}
            onClick={() => props.onClick()}
        >
            {props.action}
        </ button>
    );
}