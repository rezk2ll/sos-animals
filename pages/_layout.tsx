import { NextPage } from 'next';

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <div className='min-h-screen bg-gray-100 items-center justify-center py-50'>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
