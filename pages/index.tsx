import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center py-50'>
      <div className='max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500'>
        <div className='flex justify-between p-6'>
          <div className='flex items-center space-x-4'>
            <h1 className='text-lg text-gray-900 font-bold'>SOS-animals</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
