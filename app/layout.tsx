import './globals.css';

export const metadata = {
  title: 'Lars Anderson',
  description: 'Canadian Programmer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
    <html lang="en">
      
      <body>
        <div id="page">
            {children}
        </div>
      </body>
    </html>
  )
}
