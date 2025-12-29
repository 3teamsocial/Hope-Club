import "./globals.css";

export const metadata = {
  title: "Café Estratégico | Hope Clube",
  description: "Planejamento, clareza e conexões para empresárias e empreendedoras"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
