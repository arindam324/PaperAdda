const ExamQuiz = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <h2 className="text-3xl font-bold md:text-5xl">Daily Quiz and Exams</h2>
        <p className="mb-8 mt-4 text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16">
          Take Weekly exams and quiz based upon your prefer exams
        </p>
        <div className="mb-8 grid gap-0 sm:justify-items-stretch md:mb-12 md:grid-cols-2 md:gap-4 lg:mb-16 lg:gap-8">
          {new Array(4).fill(0).map((item, index) => (
            <a
              href="#"
              key={index}
              className="flex items-center gap-2 rounded-md sm:gap-4 sm:p-4"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg"
                alt=""
                className="inline-block h-36 w-36 max-w-none flex-none object-cover"
              />
              <div className="flex flex-col items-start py-2">
                <div className="mb-4 rounded-md bg-[#f2f2f7] px-2 py-1">
                  <p className="text-xs font-semibold text-[#6574f8]">
                    CATEGORY NAME
                  </p>
                </div>
                <p className=" text-xl font-bold">
                  The latest news with Flowspark
                </p>
                <div className="flex flex-col items-start text-sm text-[#636262] lg:flex-row lg:items-center">
                  <p>Laila Bahar</p>
                  <p className="mx-2 hidden lg:block">-</p>
                  <p>6 mins read</p>
                </div>
                <button className="bg-indigo-400 hover:bg-indigo-600 text-white px-5 py-2 rounded-md">
                  Take Quiz
                </button>
              </div>
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mx-auto w-64 flex items-center justify-center  rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default ExamQuiz;
