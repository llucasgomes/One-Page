import { Container_input, Container_textArea } from "./styled";

export const Inputs = ({ placeholder, type }) => {
  return <Container_input type={type} placeholder={placeholder} />;
};

export const TextArea = ({ placeholder, size }) => {
  return (
    <Container_textArea
      placeholder={placeholder}
      role={165}
      cols={33}
      size={size}
    />
  );
};
