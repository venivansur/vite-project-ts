 const Header = () => {
    return (
      <nav className="w-full bg-green-500 p-4 fixed top-0 left-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-white text-2xl font-semibold">Surya's Portfolio</a>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>

  );
  }
  export default Header