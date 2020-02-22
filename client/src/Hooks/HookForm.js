import { useLocalStorage } from "./useLocalStorage";
import React from "react";

export const HookForm = (key, initialValues) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  const handleChanges = enter => {
    setValues({
      ...values,
      [enter.target.name]: enter.target.value
    });
    console.log(values);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const eraseForm = erase => {
    erase.preventDefault();
    setValues(initialValues);
  };

  return (
    <div className="hook-form">
      {values.name}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Data</legend>
          <input
            label="A Name"
            value={values.name}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="name"
          />

          <div className="btn">
            <button value="clear" color="red" onClick={eraseForm}>
              Erase
            </button>
            <button color="blue" type="submit">
              Add
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
