import Navbar from '../components/Navbar';
import Image from 'next/image';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased text-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="text-center p-10 bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Welcome Simpler Technologies!
          </h1>

          {/* Image centered and bigger */}
          <div className="mt-6 flex justify-center">
            <Image
              src="/hero1.webp"
              width={400}  
              height={400}  
              alt="image"
              className="rounded-lg shadow-md"
            />
          </div>

          <p className="mt-6 text-xl text-gray-600">
            User card will be displayed after sign up.
          </p>
          <p className="mt-2 text-md text-gray-500">
            Click the sign up button to and explore another task
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
