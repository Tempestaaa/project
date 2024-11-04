import Navbar from "@/components/shared/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex flex-col h-full">
      <Navbar />
      <div className="py-16 flex-1">{children}</div>
    </div>
  );
}
