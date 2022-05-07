import "../../styles/inputCard.css";

const InputCard = ({ label, name, error, type, ...rest }) => {
  return (
    <>
      <div className='writeFormGroup'>
        <label className='inputLabel' htmlFor={name}>
          {label}
        </label>
        <input
          {...rest}
          type={type}
          id={name}
          name={name}
          className='writeInput'
        />
      </div>
      {error && <span className='inputError'>{error}</span>}
    </>
  );
};
const InputDescriptionCard = ({ label, name, error, type, ...rest }) => {
  return (
    <>
      <div className='writeFormGroup'>
        <label className='inputLabel' htmlFor={name}>
          {label}
        </label>
        <input
          {...rest}
          type={type}
          id={name}
          name={name}
          className='descriptionInput'
        />
      </div>
      {error && <span className='inputError'>{error}</span>}
    </>
  );
};

export { InputCard, InputDescriptionCard };
