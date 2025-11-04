import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AppContext from "../data/AppContext";
import { Button, Form, Container } from "react-bootstrap";

export default function Lab4EditForm() {
  const { id } = useParams();
  const { items, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const person = items.find((p) => p.id === Number(id));

  // ✅ Schemat walidacji pól
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

  // ✅ Wypełnienie formularza po znalezieniu osoby
  useEffect(() => {
    if (person) {
      Object.keys(person).forEach((key) => {
        setValue(key, person[key]);
      });
    }
  }, [person, setValue]);

  // ✅ Zapis zmian + powrót do lab3
  const onSubmit = (values) => {
    dispatch({ type: "edit", item: values });
    alert("Edited successfully!");
    navigate("/lab3"); // 🔄 automatyczny powrót po zapisaniu
  };

  // ✅ Obsługa przypadku, gdy osoba nie istnieje
  if (!person) {
    return (
      <Container className="text-center mt-5">
        <h3>Person not found 😕</h3>
      </Container>
    );
  }

  // ✅ Formularz edycji
  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">Edit Person</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control {...register("name")} />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control {...register("email")} />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control {...register("phone")} />
          {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Website URL</Form.Label>
          <Form.Control {...register("url")} />
          {errors.url && <p className="text-danger">{errors.url.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control {...register("photo")} />
          {errors.photo && <p className="text-danger">{errors.photo.message}</p>}
        </Form.Group>

        <div className="d-grid">
          <Button type="submit" variant="success">
            Save Changes
          </Button>
        </div>
      </Form>
    </Container>
  );
}
