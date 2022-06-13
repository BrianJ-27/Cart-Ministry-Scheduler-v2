import { useState } from "react";
import { useNavigate } from "react-router-dom";
const useForm = (validate) => {
  let history = useNavigate();

  // Set initial Form State values to empty strings
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isChecked: true,
  });

  // Set empty object to use later in the validate function
  const [errors, setErrors] = useState({});

  // Handles the onchange event when users type in input values
  const handleUpdate = (field, { target }) => {
    setFormData({
      ...formData,
      [field]: target.value,
      [field]: target.checked,
    });
  };

  // Handles the action when user clicks on the form button and resets the form
  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    history("/dashboard");
  };

  return { handleUpdate, handleLogin, formData, errors };
};

export default useForm;
