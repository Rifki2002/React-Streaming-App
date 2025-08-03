import "./button.css";

function Button({name, icon=null,className, type, onClick}) {
    return (
        <div>
            <button className={`normal-button ${className}`} type={type} onClick={onClick}>
                {icon && <img src={icon} alt="" className="icon" />}
                {name}
            </button>
        </div>
    )
}

export default Button;