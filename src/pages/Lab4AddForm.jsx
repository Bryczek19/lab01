import { useState, useContext } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import AppContext from "../data/AppContext";

export default function Lab4AddForm() {
  const { dispatch } = useContext(AppContext);
  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    setErrors([]);

    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const url = data.get("url");
    const photo = data.get("photo");

    if (!name || name.length < 3) {
      setErrors((prev) => [...prev, "Name must be at least 3 characters long."]);
      return;
    }
    if (!email.includes("@")) {
      setErrors((prev) => [...prev, "Invalid email address."]);
      return;
    }

    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // symulacja wysyłki

    const newItem = {
      id: Math.floor(Math.random() * 100000),
      name,
      email,
      phone,
      url,
      photo,
      rating: 0,
      checked: false,
    };

    dispatch({ type: "add", item: newItem });
    setSending(false);
    e.target.reset();
    alert("Item added!");
  };

  return (
    <Container className="mt-4">
      <h2>Add Person</h2>

      <div className="text-danger">
        {errors.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>

      <Form onSubmit={onSubmitFunction}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <FormControl name="name" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <FormControl name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <FormControl name="phone" placeholder="Enter phone number" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Website URL</Form.Label>
          <FormControl name="url" placeholder="Enter website" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <FormControl name="photo" placeholder="Enter photo link" />
        </Form.Group>

        <Button type="submit" variant="success" disabled={isSending}>
          {isSending ? "Adding..." : "Add Person"}
        </Button>
      </Form>
    </Container>
  );
}
