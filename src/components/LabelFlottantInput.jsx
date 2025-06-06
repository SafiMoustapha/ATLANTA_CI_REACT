import { useState, useEffect } from 'react';

export default function LabelFlottantInput({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}) {
  const [hasValue, setHasValue] = useState(value !== '');

  useEffect(() => {
    setHasValue(value !== '');
  }, [value]);

  return (
    <div className="relative w-full mt-4">
      <input
        id={id}
        type={type}
        placeholder=" "
        required={required}
        value={value}
        onChange={(e) => {
          setHasValue(e.target.value !== '');
          onChange?.(e.target.value);
        }}
        className="peer w-full border border-gray-400 bg-gray-100 rounded px-2 pt-5 pb-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#497b9c]"
      />
      <label
        htmlFor={id}
        className={`absolute left-2 px-0.5 bg-gray-100 transition-all
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-[#497b9c]
          ${hasValue ? 'top-1.5 text-sm text-[#497b9c]' : ''}`}
      >
        {label}
      </label>
    </div>
  );
}
