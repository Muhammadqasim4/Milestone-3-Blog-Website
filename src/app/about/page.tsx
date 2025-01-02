import type { NextPage } from 'next';
import Image from 'next/image';
import Header from '../components/Header';


const About: NextPage = () => {
  return (
    <>
    <Header></Header>
       <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-5xl font-bold text-center text-grey-800 mb-4">About Us</h1>
      <p className="text-lg text-center text-gray-700 mb-8 max-w-xl">
        Welcome to our blog website. Here, we share interesting articles on various  topics to keep you informed and entertained. Our goal is to provide valuable content to our readers. hello
      </p>
      <div>

      <div className='about'>
          <img
             src="about.jpg" // Replace with your image path
             alt="Blog Illustration"
             className="max-w-full h-auto rounded-lg shadow-lg" width={'400px'} height={'150px'}
           />
        </div>
        {/* <div className="mt-10">
          <img
             src="about.jpg" // Replace with your image path
             alt="Blog Illustration"
             className="max-w-full h-auto rounded-lg shadow-lg" width={'300px'} height={'100px'}
           />
        </div><div className="mt-10">
          <img
             src="about.jpg" // Replace with your image path
             alt="Blog Illustration"
             className="max-w-full h-auto rounded-lg shadow-lg" width={'300px'} height={'100px'}
           />
        </div> */}
        

      </div>
       
      
    </div>
    </>
 
  );
};

export default About;

 

// import Header from "../components/Header";

// export default function About() {
//   return (
//     <>
//     <Header />
//     <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 text-center">
//       <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
//         About Our Blogs
//       </h2>
//       <p className="text-lg text-gray-600 mb-8">
//       Welcome to our blog! Here, we share insights, stories, and tips on blogging, designed to inspire, educate, and connect with readers like you. Whether you're looking for expert advice, creative ideas, or a fresh perspective, our content is crafted to spark curiosity and add value to your journey. Explore our posts, join the conversation, and be part of a community that celebrates learning and growth. Let’s discover, learn, and grow together!

// </p>
// <div className="mt-10">
//           <img
//             src="about.jpg" // Replace with your image path
//             alt="Blog Illustration"
//             className="max-w-full h-auto rounded-lg shadow-lg" width={'1000px'} height={'200px'}
//           />
//         </div>
      
//     </main>
//   </>

//   );
// }
