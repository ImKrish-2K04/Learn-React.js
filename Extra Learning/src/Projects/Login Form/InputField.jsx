export const InputFields = (props) => {
  const { label, type, name, id, errors, userData, handleChange } = props;
  return (
    <div className="inp_field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={label}
        value={userData[name]}
        onChange={handleChange}
      />
      {errors && <p className="error">{errors}</p>}
    </div>
  );
};
