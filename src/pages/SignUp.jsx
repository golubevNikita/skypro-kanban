import AuthorisationForm from "../components/AuthorisationForm/AuthorisationForm";

const SignUpPage = ({ setIsToken }) => {
  return <AuthorisationForm setIsToken={setIsToken} isSignUp />;
};

export default SignUpPage;
