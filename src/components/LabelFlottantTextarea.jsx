import { useState, useEffect } from 'react';

export default function FloatingLabelTextarea({
  id,
  label,
  value,
  onChange,
  required = false,
  rows = 4,
}) {
  const [hasValue, setHasValue] = useState(value !== '');

  useEffect(() => {
    setHasValue(value !== '');
  }, [value]);

  return (
    <div className="relative w-full mt-4">
      <textarea
        id={id}
        rows={rows}
        value={value}
        required={required}
        onChange={(e) => {
          setHasValue(e.target.value !== '');
          onChange?.(e.target.value);
        }}
        className="peer w-full border border-gray-400 bg-gray-100 rounded-sm px-3 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-[#497b9c] text-gray-900"
      />
      <label
        htmlFor={id}
        className={`absolute left-3 px-1 bg-gray-100 transition-all ${
          hasValue
            ? 'top-2 text-sm text-[#497b9c]'
            : 'top-4 text-base text-gray-400'
        } peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#497b9c]`}
      >
        {label}
      </label>
    </div>
  );
}
