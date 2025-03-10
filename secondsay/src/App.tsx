import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { motion } from "framer-motion";
import "boxicons";
import { Navbar } from "./components/Header";

import screenshot1 from "./assets/screens/screen1.png";
import screenshot2 from "./assets/screens/screen2.png";
import screenshot3 from "./assets/screens/screen3.png";

import logo from "./assets/logo-dark.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col gap-40">
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <div className="flex flex-col">
          <main className="max-w-7xl w-full mx-auto flex flex-col items-start px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="flex flex-col items-start w-full gap-8 lg:gap-12 col-span-1 pt-36 pb-8"
              >
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-balance font-medium"
                >
                  Convenient, Affordable and Reliable Expert Medical Opinions
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="w-full lg:w-4/5 text-lg sm:text-xl text-slate-700"
                >
                  Get expert medical insights from licensed healthcare providers
                  across different specialties. Stay informed about current
                  medical guidelines and take control of your healthcare
                  journey.
                </motion.p>

                <WaitlistForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="hidden lg:flex flex-col divide-y divide-white/10 gap-12 h-screen py-8"
              >
                <img
                  src="https://images.pexels.com/photos/8376309/pexels-photo-8376309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="App main screen"
                  className="rounded-2xl h-full max-h-[950px] object-cover object-top"
                />
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center opacity-70">
          <img
            src="/logos/trusted-1.png"
            alt="Trusted by"
            className="h-8 object-contain"
          />
          <img
            src="/logos/trusted-2.png"
            alt="Trusted by"
            className="h-8 object-contain"
          />
          <img
            src="/logos/trusted-3.png"
            alt="Trusted by"
            className="h-8 object-contain"
          />
          <img
            src="/logos/trusted-4.png"
            alt="Trusted by"
            className="h-8 object-contain"
          />
        </div>
      </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col min-h-screen"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-950 w-full lg:w-3/5"
        >
          Get Multiple Expert Medical Opinions – Without the Hassle
        </motion.h3>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg mt-6 w-full lg:w-3/5"
        >
          Connect with qualified doctors for second opinions on injuries,
          diseases, and medical concerns. No more guesswork to get expert
          guidance, quickly and conveniently.
        </motion.span>
        <FeatureCards />
      </motion.div>

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col items-start w-full gap-8 lg:gap-12 col-span-1"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-balance font-medium pt-20"
          >
            Get Early, Exclusive Access for Only $1
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="w-full lg:w-4/5 text-lg sm:text-xl text-slate-700"
          >
            Are you a resident or healthcare professional? Get early, exclusive
            access for only $1 by joining the waitlist.
          </motion.p>
          <WaitlistForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-xl h-[550px] "
        >
          <img
            src={screenshot3}
            alt="Screenshot 3"
            className="absolute right-0 border-4 border-black/10 rounded-2xl h-[500px] w-[231px] object-cover object-top top-12  shadow-2xl hover:scale-[101%] transition-all duration-300 hover:z-10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
          />
          <img
            src={screenshot2}
            alt="Screenshot 2"
            className="absolute left-1/2 top-8 -translate-x-1/2 border-4 border-black/10 rounded-2xl h-[500px] w-[231px] object-cover object-top rotate-0 shadow-2xl hover:scale-[101%] transition-all duration-300 hover:z-10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
          />
          <img
            src={screenshot1}
            alt="Screenshot 1"
            className="absolute left-0 border-4 top-4 border-black/10 rounded-2xl h-[500px] w-[231px] object-cover object-top shadow-2xl hover:scale-[101%] transition-all duration-300 hover:z-10"
          />
        </motion.div>
      </div>

      <footer className="bg-gray-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <img
                src={logo}
                alt="SecondSay Logo"
                className="h-6 object-contain"
              />
              <p className="text-gray-400 mt-3">
                Expert medical opinions at your fingertips
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function FeatureCards() {
  const bulletPoints = [
    {
      icon: "bx bx-badge-check",
      title: "Confirm a diagnosis",
      description:
        "Get clarity from multiple experts before making major health decisions",
    },
    {
      icon: "bx bx-conversation",
      title: "Open a dialogue",
      description:
        "Have a collaborative discussion on existing health concerns",
    },
    {
      icon: "bx bx-time-five",
      title: "Save the hassle",
      description: "Skip the long, in-person wait times at doctors' offices",
    },
    {
      icon: "bx bx-landscape",
      title: "Get Peace of mind",
      description: "Access second opinions to ensure you're on the right track",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      variants={staggerContainer}
      transition={{ delay: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-12 lg:mt-16"
    >
      <motion.div className="relative bg-sky-200  rounded-2xl p-3 h-[400px] overflow-hidden flex flex-col gap-3">
        <div className="relative size-12 bg-white rounded-full flex items-center justify-center z-10">
          <i className={`bx ${bulletPoints[0].icon} text-2xl text-slate-950`} />
        </div>
        <div className="relative p-3  backdrop-blur-sm rounded-xl flex z-10 flex-col gap-1">
          <span className="text-sky-950 text-base font-semibold">
            {bulletPoints[0].title}
          </span>
          <span className="text-sky-900 text-sm font-medium">
            {bulletPoints[0].description}
          </span>
        </div>
        <div className="absolute inset-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600">
            <path
              d="M-50 250 Q50 300, 200 250 T450 300"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="25"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="M-50 250 Q50 300, 200 250 T450 300;
                            M-50 300 Q50 250, 200 300 T450 250;
                            M-50 250 Q50 300, 200 250 T450 300"
              />
            </path>
            <path
              d="M-50 300 Q50 350, 200 300 T450 350"
              stroke="white"
              strokeWidth="25"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="4s"
                repeatCount="indefinite"
                values="M-50 300 Q50 350, 200 300 T450 350;
                            M-50 350 Q50 300, 200 350 T450 300;
                            M-50 300 Q50 350, 200 300 T450 350"
              />
            </path>
          </svg>
        </div>
      </motion.div>

      <motion.div className="relative rounded-2xl p-3 h-[400px] overflow-hidden flex flex-col justify-between">
        <div className="relative size-12 bg-white rounded-full flex items-center justify-center z-10">
          <i className={`bx ${bulletPoints[1].icon} text-2xl text-slate-950`} />
        </div>
        <div className="relative p-3 bg-white/80 backdrop-blur-sm rounded-xl flex z-10 flex-col gap-1">
          <span className="text-slate-950 text-base font-semibold">
            {bulletPoints[1].title}
          </span>
          <span className="text-slate-700 text-sm font-medium">
            {bulletPoints[1].description}
          </span>
        </div>
        <div className="absolute w-full h-full inset-0">
          <img
            src="https://images.pexels.com/photos/7195110/pexels-photo-7195110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="App main screen"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </motion.div>

      <motion.div className="relative bg-indigo-200  rounded-2xl p-3 h-[400px] overflow-hidden flex flex-col gap-3">
        <div className="relative size-12 bg-white rounded-full flex items-center justify-center z-10">
          <i className={`bx ${bulletPoints[2].icon} text-2xl text-slate-950`} />
        </div>
        <div className="relative p-3  backdrop-blur-sm rounded-xl flex z-10 flex-col gap-1">
          <span className="text-sky-950 text-base font-semibold">
            {bulletPoints[2].title}
          </span>
          <span className="text-sky-900 text-sm font-medium">
            {bulletPoints[2].description}
          </span>
        </div>
        <div className="absolute inset-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600">
            <path
              d="M-50 300 Q50 350, 200 300 T450 350"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="20"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="4s"
                repeatCount="indefinite"
                values="M-50 300 Q50 350, 200 300 T450 350;
                            M-50 350 Q50 300, 200 350 T450 300;
                            M-50 300 Q50 350, 200 300 T450 350"
              />
            </path>
            <path
              d="M-50 350 Q50 400, 200 350 T450 400"
              stroke="white"
              strokeWidth="20"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="M-50 350 Q50 400, 200 350 T450 400;
                            M-50 400 Q50 350, 200 400 T450 350;
                            M-50 350 Q50 400, 200 350 T450 400"
              />
            </path>
          </svg>
        </div>
      </motion.div>

      <motion.div className="relative rounded-2xl p-3 h-[400px] overflow-hidden flex flex-col justify-between">
        <div className="relative size-12 bg-white rounded-full flex items-center justify-center z-10">
          <i className={`bx ${bulletPoints[3].icon} text-2xl text-slate-950`} />
        </div>
        <div className="relative p-3 bg-white/80 backdrop-blur-sm rounded-xl flex z-10 flex-col gap-1">
          <span className="text-slate-950 text-base font-semibold">
            {bulletPoints[3].title}
          </span>
          <span className="text-slate-700 text-sm font-medium">
            {bulletPoints[3].description}
          </span>
        </div>
        <div className="absolute w-full h-full inset-0">
          <img
            src="https://images.pexels.com/photos/7670071/pexels-photo-7670071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="App main screen"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function WaitlistForm() {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex w-full max-w-md flex-col space-y-4"
    >
      <div className="relative w-full">
        <Input
          type="email"
          placeholder="Enter your email address"
          className="w-full h-14 pl-12 pr-4 rounded-xl border border-black/10 bg-white shadow-sm transition-all hover:border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 flex items-center">
          <i className="bx bx-envelope text-xl" />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full h-14 bg-gray-900 rounded-xl text-base font-medium transition-all hover:bg-gray-800 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
      >
        Join the Waitlist
        <i className="bx bx-right-arrow-alt ml-2"></i>
      </Button>
      <p className="text-sm text-gray-500">
        <i className="bx bx-shield-quarter mr-1"></i>
        Early access for only $1 • Limited spots available
      </p>
    </motion.div>
  );
}

export default App;
