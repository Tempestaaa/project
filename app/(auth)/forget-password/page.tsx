import CardWrapper from "@/components/auth/card-wrapper";
import ForgetPasswordForm from "@/components/auth/forget-password-form";

export default function ForgetPasswordPage() {
  return (
    <div className="h-full grid place-items-center font-paragraph px-4">
      <CardWrapper
        title="Forget password"
        desc="Receive email to reset password"
        href="/login"
        hrefTitle="Back to login"
      >
        <ForgetPasswordForm />
      </CardWrapper>
    </div>
  );
}
