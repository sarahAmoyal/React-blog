import "../../styles/input.css";

const Input = ({ label, name, error, type, ...rest }) => {
  return (
    <div className='registerForm'>
      <label htmlFor={name}>{label}</label>
      <input 
        {...rest}
        type={type}
        id={name}
        name={name}
        className ="registerInput"
      />
      {error && <span className='text-danger'>{error}</span>}
    </div>
  );
};

export default Input;
