function useFormValidation({ values }) {
  const errors = {};

  if (values.name == "") {
    errors.name = "Name is required";
  } else if (values.name > 20) {
    errors.name = "Name must be less to 20 characters";
  } else if (values.name < 4) {
    errors.name = "Name must be at least 4 characters long";
  }

  if (values.surname == "") {
    errors.surname = "Surname is required";
  } else if (values.surname > 20) {
    errors.surname = "Surname must be less to 20 characters";
  } else if (values.surname < 4) {
    errors.surname = "Surname must be at least 4 characters long";
  }

  if (values.email == "") {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (values.message == "") {
    errors.message = "Message is required";
  } else if (values.message > 100) {
    errors.message = "Message must be less to 100 characters";
  }

  return errors;
}

export default useFormValidation;
