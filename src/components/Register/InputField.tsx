interface InputFieldProps {
    label: string;
    type?: string;
    name: string;
    value: string;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const InputField = ({ label, type = "text", name, value, disabled, onChange }: InputFieldProps) => {
    return (
      <div className="relative w-full group">
        <input
          type={type}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
          required
          className="input input-bordered w-full bg-transparent text-gray-800 border-gray-500 peer focus:border-gray-400 peer-focus:border-gray-600 autofill:bg-white autofill:text-gray-800"
        />
        <label
          className={`absolute left-3 px-1 bg-white text-gray-600 transition-all
          ${value ? "top-[-12px] text-xs text-sky-500" : "top-3 text-base text-gray-400"}
          peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-sky-500 peer-focus:bg-white
          peer-autofill:top-[-12px] peer-autofill:text-xs peer-autofill:text-sky-500 peer-autofill:bg-white`}
        >
          {label}
        </label>
      </div>
    );
  };
  
  export default InputField;
  