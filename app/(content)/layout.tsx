import MainHeader from '@/components/header/MainHeader';
import '../globals.css';
import NavBar from '@/components/header/NavBar';

export const metadata = {
  title: 'Lars Anderson',
  description: 'Programmer, web developer, and graphic designer based out of Manitoba, Canada',
}

export default function ContentLayout({ children } : any) {
 return (
        <div id="page">
            {/* <MainHeader /> */}
            <NavBar />
            {children}
        </div>
  )
}