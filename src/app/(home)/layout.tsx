export default function HomeLayout({
  auth,
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {auth}
      {children}
    </>
  );
}
