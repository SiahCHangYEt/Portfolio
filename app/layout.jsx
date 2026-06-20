import './globals.css'

export const metadata = {
  /* EDIT: Your name and a short description for search engines */
  title: 'Siah Chang Yet - Portfolio',
  description: 'Final year student at Sunway University passionate about Artifical Intelligence and Machine Learning.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  )
}
