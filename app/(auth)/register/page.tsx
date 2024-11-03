import CardWrapper from "@/components/auth/card-wrapper";
import RegisterForm from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <div className="h-full grid place-items-center font-paragraph">
      <CardWrapper
        title="Create an account"
        desc="Register to be a member"
        href="/login"
        hrefTitle="Back to login"
        isShowSocials
      >
        <RegisterForm />
      </CardWrapper>
    </div>
  );
}
