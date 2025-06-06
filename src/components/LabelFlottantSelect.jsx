import { useState } from 'react';

function LabelFlottant({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
}) {
  const hasInitialValue = value !== '';
  const [hasValue, setHasValue] = useState(hasInitialValue);

  const handleChange = (e) => {
    const val = e.target.value;
    setHasValue(val !== '');
    onChange?.(val);
  };

  return (
    <div className="relative w-full mt-4">
      <select
        id={id}
        value={value}
        onChange={handleChange}
        required={required}
        className="peer appearance-none w-full border border-gray-400 bg-gray-100 rounded-sm px-3 pt-6 pb-2 pr-10 focus:outline-none focus:ring-1 focus:ring-[#497b9c] text-gray-900"
      >
        <option value="" disabled hidden></option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <label
        htmlFor={id}
        className={`absolute left-3 px-1 transition-all ${
          hasValue
            ? 'top-2 text-sm text-[#497b9c]'
            : 'top-4 text-base text-gray-400'
        } peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#497b9c]`}
      >
        {label}
      </label>

      {/* Flèche personnalisée */}
      <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#497b9c]"
           fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}
export default LabelFlottant;