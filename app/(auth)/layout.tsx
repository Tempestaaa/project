import BackToHome from "@/components/auth/back-to-home";

export default function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="h-full py-14 px-8">
      <BackToHome />
      {children}
    </div>
  );
}
