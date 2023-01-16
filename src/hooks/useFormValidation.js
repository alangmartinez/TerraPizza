function useFormValidation({ values }) {
  const errors = {};

  if (values.name === "") {
    errors.name = "Name is required";
  } else if (values.name > 20) {
    errors.name = "Name must be less to 20 characters";
  } else if (values.name < 4) {
    errors.name = "Name must be at least 4 characters long";
  }

  if (values.email === "") {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  return errors;
}

export default useFormValidation;
