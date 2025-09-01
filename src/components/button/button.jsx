function Button({ name, icon = null, className = "", type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl border border-white text-white font-medium hover:bg-white/10 transition ${className}`}
    >
      {icon && <img src={icon} alt="" className="w-5 h-5 object-contain " />}
      <span>{name}</span>
    </button>
  );
}

export default Button;
