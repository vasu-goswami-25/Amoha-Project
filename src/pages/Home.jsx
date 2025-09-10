function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-[#6334b9] text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Amoha Codes
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Learn, Practice, and Grow your coding skills with structured courses
          and real-world challenges.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-[#6334b9] font-semibold rounded-xl shadow hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          We provide high-quality coding resources, practice problems, and
          structured learning paths to help students and professionals excel in
          Data Structures, Algorithms, and Full-Stack Development.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">DSA Practice</h3>
            <p>Structured coding sheets and topic-wise problems.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Courses</h3>
            <p>Guided learning with real-world projects and mentors.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Internships</h3>
            <p>Hands-on experience through curated internship programs.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-xl shadow">
            <p>"The structured practice sheets boosted my DSA prep!"</p>
            <h4 className="mt-4 font-semibold">– Student A</h4>
          </div>
          <div className="p-6 border rounded-xl shadow">
            <p>"Courses are simple, practical, and very effective."</p>
            <h4 className="mt-4 font-semibold">– Student B</h4>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow">
            <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
            <h4 className="font-semibold">Member 1</h4>
            <p className="text-sm">Founder</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow">
            <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
            <h4 className="font-semibold">Member 2</h4>
            <p className="text-sm">Mentor</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow">
            <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
            <h4 className="font-semibold">Member 3</h4>
            <p className="text-sm">Developer</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="p-4 border rounded-lg shadow">
            <h4 className="font-semibold">Q: How do I start?</h4>
            <p>A: Sign up and explore our courses and practice sheets.</p>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <h4 className="font-semibold">Q: Is it free?</h4>
            <p>A: We provide free resources as well as premium courses.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
