import '../globals.css';

export const metadata = {
  title: 'Lars Anderson',
  description: 'Programmer, web developer, and graphic designer based out of Manitoba, Canada',
}

export default function IntroLayout({ children }: {children:any}) {
 return (
        <main>
            {children}
        </main>
  )
}