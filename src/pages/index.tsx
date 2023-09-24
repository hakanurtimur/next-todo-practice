import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-secondary-900 flex flex-col justify-center items-center p-8 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to Next Todo App
      </h1>
      <p className="text-lg mb-8 text-center">
        Next Todo App is your ultimate task management solution. Stay organized and boost your productivity effortlessly.
      </p>
      <div className="text-lg mb-8 text-left">
        <p className="mb-2">Key Features:</p>
        <ul className="list-disc ml-4">
          <li>Create and manage tasks seamlessly.</li>
          <li>Track your progress by marking tasks as completed.</li>
          <li>Effortlessly organize tasks by categories or due dates.</li>
          <li>Access your to-do list from any device with an internet connection.</li>
        </ul>
      </div>
      <Link href="/auth" className={" \"bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out\""}>
          Get Started
      </Link>
      <p className="mt-4 text-lg">
        Don't have an account?{' '}
        <Link href="/sign-up">
       Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Home;
