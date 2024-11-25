import img from "/img/Screenshot_20241015-203305.jpg";
import { useState, useEffect } from "react";

const Body = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const user = {
    name: "Veni Vansurya",
    imageUrl: img,
    imageSize: 200,
  };

  return (
    <div className="bg-gradient-to-r from-lime-300 to-lime-400 min-h-screen p-8 flex flex-col items-center">
      <main className="bg-green-500 text-white rounded-lg p-6 w-full max-w-xl text-center">
        <h1 className="text-4xl font-semibold mb-4">
          {" "}
          <h1 className="text-3xl font-bold mb-4"></h1>Hello, I'm {user.name}!
        </h1>
        <img
          className="avatar w-48 h-48 rounded-full border-4 border-white mb-4 transform transition-transform duration-300 hover:scale-110"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
        />
        <p className="text-xl font-semibold">Current Time: {currentTime}</p>
      </main>
      <main className="mt-8 w-full max-w-xl text-center">
        <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl text-green-500 font-semibold mb-4">
            About Me
          </h2>
          <p className="text-gray-700">
            I am a passionate web developer with expertise in creating
            user-friendly and responsive websites. I enjoy coding, learning new
            technologies, and building things that make an impact.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl text-green-500 font-semibold mb-4">Skills</h2>
          <ul className="list-none text-gray-700 space-y-2">
            <li>HTML, CSS, JavaScript</li>
            <li>React, TypeScript, Node.js, Express.Js</li>
            <li>Git, GitHub</li>
            <li>Bootstrap, Tailwind</li>
            <li>Responsive Design</li>
            <li>PostgreSQL, MySQL</li>
            <li>API Integration</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl text-green-500 font-semibold mb-4">
            Contact
          </h2>
          <p className="text-gray-700 mb-4">
            Feel free to reach out to me via email or follow me on my social
            media accounts!
          </p>
          <a
            href="mailto:venivansurya@gmail.com"
            className="text-green-500 font-semibold hover:underline"
          >
            Email me
          </a>
        </section>
      </main>
    </div>
  );
};
export default Body;
