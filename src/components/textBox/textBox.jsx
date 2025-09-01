function TextBox({ label, type = "text", placeholder, required }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-200 text-left">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

export default TextBox;
