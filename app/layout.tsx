import './globals.css';

export const metadata = {
  title: 'Ascend — Meta Ads Agency',
  description: 'Scale your brand on Meta with mathematical precision. High-performance Facebook & Meta advertising for ambitious brands.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
