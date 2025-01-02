import type { NextPage } from 'next';
import Image from 'next/image';
import Header from './components/Header';

const Home: NextPage = () => {
  return (
    <>
    <Header></Header>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-5xl font-bold text-center text-grey-800 mb-4">Welcome to My Blog</h1>
      <p className="text-lg text-center text-gray-700 mb-8 max-w-xl">
        This is a blog website where you can find interesting articles on various topics. Stay tuned for updates and enjoy reading!
      </p>
      <div className="w-full max-w-md">
        <Image 
          src={"/welcome.jpg"}
          alt="Home Image" 
          className="rounded-lg shadow-lg" 
          layout="responsive" 
          width={600} 
          height={400} 
        />
      </div>
    </div>
    </>
   
  );
};

export default Home;
