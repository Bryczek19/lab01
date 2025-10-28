import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AppContext from "../data/AppContext";

export default function useLab4EditForm() {
  const { id } = useParams();
  const { items, dispatch } = useContext(AppContext);
  const person = items.find((p) => p.id === Number(id));

  // Schemat walidacji Yup
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too short!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    url: Yup.string().url("Invalid URL").nullable(),
    photo: Yup.string().url("Invalid photo URL").nullable(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      id: "",
      name: "",
      email: "",
      phone: "",
      url: "",
      photo: "",
    },
  });

  // Ustawiamy wartości po znalezieniu osoby
  useEffect(() => {
    if (person) {
      Object.keys(person).forEach((key) => {
        setValue(key, person[key]);
      });
    }
  }, [person, setValue]);

  const onSubmit = (values) => {
    dispatch({ type: "edit", item: values });
    alert("Edited successfully!");
  };

  return { person, register, handleSubmit, onSubmit, errors };
}
