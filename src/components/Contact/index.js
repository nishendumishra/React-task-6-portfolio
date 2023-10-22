import React from "react";
import styled from "styled-components";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  padding: 20px;
  background-color: #222222;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: #ff6b6b;
`;

const Desc = styled.div`
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  color: #a0a0a0;
  margin-top: 20px;
`;

const ContactForm = styled.form`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #333333;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 20px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #ff6b6b;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: #444444;
  border: none;
  outline: none;
  font-size: 16px;
  color: #ffffff;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    background-color: #555555;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: #444444;
  border: none;
  outline: none;
  font-size: 16px;
  color: #ffffff;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    background-color: #555555;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(135deg, #ff6b6b, #ee0979);
  padding: 13px 16px;
  margin-top: 10px;
  border: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #ee0979, #ff6b6b);
    color: #ffffff;
    transition: all 0.4s ease-in-out;
  }
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    const fields = ["from_email", "from_name", "subject", "message"];
    for (const field of fields) {
      if (!form.current[field].value) {
        setError(true);
        setOpen(true); // Open the Snackbar for displaying the error message
        return;
      }
    }

    emailjs
      .sendForm(
        "service_ox1e16t",
        "template_y9upjy9",
        form.current,
        "9Yz0WO07qCbYKioV9"
      )
      .then((result) => {
        console.log("Email sent successfully", result);
        setOpen(true);
        form.current.reset();
        setError(false);
      })
      .catch((error) => {
        console.log("Email send error:", error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact Me</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            placeholder="Your Email"
            name="from_email"
            type="email"
          />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity={error ? "error" : "success"}
          >
            {error ? "Please fill out all fields" : "Email sent successfully!"}
          </MuiAlert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
