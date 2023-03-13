import React from "react";

interface Props {
  name: string;
  value: string;
  options: string[];
  onChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => {};
}

export const Select: React.FC<Props> = ({
  name,
  value,
  options,
  onChangeHandler,
}) => {
  return (
    <select
      name={name}
      id={`${name}-select`}
      onChange={onChangeHandler}
      value={value}
    >
      <option value="">Choose a {name}</option>
      {options.map((option, i) => (
        <option key={`${i}-${option}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
