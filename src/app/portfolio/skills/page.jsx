import "aos/dist/aos.css";

const Skills = () => {
  return (
    <div className="py-8 text-center bg-white  dark:bg-gray-950">
      <h1 className="text-3xl font-bold mb-8 text-lime-500" data-aos="fade-up">
        Skills
      </h1>
      <div className="mb-8 border-lime-500 border rounded-lg p-10">
        <h2
          className="text-2xl font-semibold mb-4 text-lime-500"
          data-aos="fade-up"
        >
          Programming Languages
        </h2>
        <div className="flex flex-wrap justify-center">
          <div
            className="w-1/10 p-2  text-lime-700 dark:text-lime-500"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="bg-transparent rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/Java2.svg"
                alt="JAVA"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2">JAVA</h3>
            <p className="text-sm text-gray-600 ">Description of Language 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/Javascript.svg"
                alt="Language 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2  text-lime-700 dark:text-lime-500">
              JavaScript
            </h3>
            <p className="text-sm text-gray-600">Description of Language 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/python2.svg"
                alt="Language 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2  text-lime-700 dark:text-lime-500">
              Python
            </h3>
            <p className="text-sm text-gray-600">Description of Language 1</p>
          </div>
        </div>
      </div>
      <div className="border rounded-lg p-4 border-lime-500">
        <h2 className="text-2xl font-semibold mb-4 text-lime-500">Libraries</h2>
        <div className="flex flex-wrap justify-center">
          <div
            className="w-1/10 p-2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/react 1.svg"
                alt="Library 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              ReactJs
            </h3>
            <p className="text-sm text-gray-600">Description of Library 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/jquary.svg"
                alt="Library 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              JQuery
            </h3>
            <p className="text-sm text-gray-600">Description of Library 1</p>
          </div>
          {/* Add more libraries here */}
        </div>
      </div>

      {/* Frameworks */}
      <div className="mb-8 border rounded-lg p-4 border-lime-500">
        <h2 className="text-2xl font-semibold mb-4 text-lime-500">
          Frameworks
        </h2>
        <div className="flex flex-wrap justify-center">
          <div
            className="w-1/10 p-2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/express.svg"
                alt="Framework 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              ExpressJs
            </h3>
            <p className="text-sm text-gray-600">Description of Framework 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/bootstrap.svg"
                alt="Framework 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              Bootstrap
            </h3>
            <p className="text-sm text-gray-600">Description of Framework 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/tailwind.svg"
                alt="Framework 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              Tailwind CSS
            </h3>
            <p className="text-sm text-gray-600">Description of Framework 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/bulma.svg"
                alt="Framework 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              Bulma
            </h3>
            <p className="text-sm text-gray-600">Description of Framework 1</p>
          </div>
          {/* Add more frameworks here */}
        </div>
      </div>
      {/* Database */}
      <div className="mb-8 border rounded-lg p-4 border-lime-500">
        <h2 className="text-2xl font-semibold mb-4 text-lime-500">Database</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/10 p-2">
            <div className="rounded-full w-28 h-28 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/mysql.svg"
                alt="Framework 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              MySQL
            </h3>
            <p className="text-sm text-gray-600">Description of Framework 1</p>
          </div>
          {/* Add more frameworks here */}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-8 border rounded-lg p-4 border-lime-500">
        <h2 className="text-2xl font-semibold mb-4 text-lime-500">Tools</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/10 p-2">
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/vscode.svg"
                alt="Tool 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              VS Code
            </h3>
            <p className="text-sm text-gray-600">Description of Tool 1</p>
          </div>
          <div className="w-1/10 p-2">
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src="/Images/logo/github.svg"
                alt="Tool 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              GitHub
            </h3>
            <p className="text-sm text-gray-600">Description of Tool 1</p>
          </div>
          {/* Add more tools here */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
