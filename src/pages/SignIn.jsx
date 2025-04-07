import AuthorisationForm from "../components/AuthorisationForm/AuthorisationForm";

const SignInPage = ({ setIsToken }) => {
  return <AuthorisationForm setIsToken={setIsToken} isSignUp={false} />;
};

export default SignInPage;
