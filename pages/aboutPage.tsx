
import Link from 'next/link'
import { ReactElement } from 'react';
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout';

export default function aboutPage () {
  return (
    <>
        <h1>AboutPage</h1>
            <h1 className={'title'}>
          Ir a <Link href={'/'}>Home </Link>
            </h1>
            <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/index.js</code>
          </p>
    </>  
  )
}

aboutPage.getLayout = function getLayout ( page: ReactElement ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
