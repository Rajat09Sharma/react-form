
import { useInput } from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {

  const {
    value: email,
    handleChange: handleEmailChange,
    handleFocus: handleEmailFocus,
    hasError: isNotEmailValid
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value)
  });

  const {
    value: password,
    handleChange: handlePasswordChange,
    handleFocus: handlePasswordFocus,
    hasError: isNotValidPassword
  } = useInput("", (value) => {
    return hasMinLength(value,6)
  });
  // const isNotEmailValid=didEdit.email&&!isEmail(enteredValues.email)&&!isNotEmpty(enteredValues.email);
  // const isNotValidPassword=didEdit.password&&!hasMinLength(enteredValues.password,6);


  function handleSubmit(event) {
    event.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"
            onBlur={handleEmailFocus}
            value={email} onChange={handleEmailChange} />
          <div className="control-error"> {isNotEmailValid && <p>Please enter valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            onBlur={handlePasswordFocus}
            value={password} onChange={handlePasswordChange} />
          <div className="control-error"> {isNotValidPassword && <p>Please enter valid password.</p>}</div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
