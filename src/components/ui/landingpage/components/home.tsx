


import Copy from "./copy";
import RegisterForm from "./register";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 mt-16 md:mt-24 sm:mt-36">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <Copy/>
        <RegisterForm/>
      </div>
    </div>
  );
}
