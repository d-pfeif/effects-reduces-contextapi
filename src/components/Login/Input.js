import classes from './Login.module.css';

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
      />
    </div>
  )
}

export default Input