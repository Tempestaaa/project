import CardWrapper from "@/components/auth/card-wrapper";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="h-full grid place-items-center font-paragraph">
      <CardWrapper
        title="Welcome back!"
        desc="Login to your account"
        href="/register"
        hrefTitle="Create one"
        isLoginPage
        isShowSocials
      >
        <LoginForm />
      </CardWrapper>
    </div>
  );
}
