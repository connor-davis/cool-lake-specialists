import { Alert, Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import React, { useState } from "react";
import { sendEmail } from "../utils/sendemail";

let ContactForm = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  let [sending, setSending] = useState(false);
  let [sent, setSent] = useState(false);

  return (
    <Col>
      {sent ? (
        <Alert color="success">
          Your message was sent, please wait for us to get back to you.
        </Alert>
      ) : (
        <></>
      )}
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          setSending(true);

          sendEmail({
            subject,
            from: email,
            user_name: name,
            message,
          });

          setName("");
          setEmail("");
          setSubject("");
          setMessage("");

          setSending(false);
          setSent(true);

          setTimeout(() => {
            setSent(false);
          }, 5000);
        }}
      >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            className="bg-dark shadow text-light"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Email</Label>
          <Input
            className="bg-dark shadow text-light"
            type="text"
            name="name"
            id="name"
            placeholder="email@sitename.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Subject</Label>
          <Input
            className="bg-dark shadow text-light"
            type="text"
            name="name"
            id="name"
            placeholder=""
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Message</Label>
          <Input
            tag="textarea"
            rows={5}
            className="bg-dark shadow text-light"
            type="text"
            name="name"
            id="name"
            placeholder=""
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormGroup>
        <Button
          className="btn btn-block bg-primary text-light"
          disabled={sending}
        >
          Send Your Message
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
