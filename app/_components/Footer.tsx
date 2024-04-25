function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            I am a highly skilled Fullstack Engineer having worked as Fullstack
            dev and having real-world experience in Devops, Deployments etc
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/oohsai/"
                className="hover:text-white transition-colors duration-300"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="mailto:sadyskiran@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                href="https://github.com/oohsai"
                className="hover:text-white transition-colors duration-300"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/1mGgD9FWGboJ05m6LzT7Dxuiefs-fo46J?usp=drive_link"
                className="hover:text-white transition-colors duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/oohsai/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/oohsaitwxt"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="https://github.com/oohsai"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Pune, Maharashtra</p>
          <p>Pune 411015</p>
          <p>Email: sadyskiran@gmail.com</p>
        </div>
      </div>
      <p className="text-center text-lg pt-8 font-semibold text-white">
        © Sady Sai Kiran Reddy
      </p>
    </footer>
  );
}

export default Footer;
