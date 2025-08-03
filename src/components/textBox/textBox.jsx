function TextBox({ label, type, placeholder, required }) {
    return (
        <div className="text-box">
            <label className="text-label">{label}</label>
            <input className={type === "password" ? "password-input" : "text-input"} type={type} placeholder={placeholder} required={required} />
        </div>
    );
}
export default TextBox;