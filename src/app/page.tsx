"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [circlePositions, setCirclePositions] = useState<
    Array<{
      width: number;
      height: number;
      left: number;
      top: number;
      x: [number, number];
      y: [number, number];
      duration: number;
    }>
  >([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const featureCards = [
    {
      title: "Lightning Fast",
      description: "Optimized for performance with instant load times",
      icon: "⚡",
    },
    {
      title: "Secure by Design",
      description: "Enterprise-grade security for your peace of mind",
      icon: "🔒",
    },
    {
      title: "Always Available",
      description: "99.99% uptime guaranteed across all platforms",
      icon: "🌐",
    },
  ];

  const stats = [
    { value: "10M+", label: "Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "200+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ];

  useEffect(() => {
    setIsMounted(true);
    setCirclePositions(
      Array(20)
        .fill(0)
        .map(() => ({
          width: Math.random() * 300 + 100,
          height: Math.random() * 300 + 100,
          left: Math.random() * 100,
          top: Math.random() * 100,
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          duration: Math.random() * 30 + 20,
        }))
    );
  }, []);

  useEffect(() => {
    if (inView && isMounted) {
      controls.start("visible");
    }
  }, [controls, inView, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              initial={{
                width: Math.random() * 3,
                height: Math.random() * 3,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random(),
              }}
              animate={{
                opacity: [0, Math.random(), 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent to-white"
            initial={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 100,
              opacity: [0, 1, 0],
              x: [0, 500],
              y: [0, 200],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Build the Future
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              The most powerful platform for modern web applications with
              cutting-edge technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(96, 165, 250, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg font-semibold shadow-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(156, 163, 175, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gray-800/50 border border-gray-700 rounded-lg font-semibold shadow-lg backdrop-blur-sm"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {circlePositions.map((pos, i) => (
            <motion.div
              key={`shared-circle-${i}`}
              className="absolute rounded-full bg-blue-500/10"
              initial={{
                width: pos.width,
                height: pos.height,
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                x: pos.x,
                y: pos.y,
                rotate: [0, 360],
              }}
              transition={{
                duration: pos.duration,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>

        <section ref={ref} className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="max-w-7xl mx-auto relative z-10"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            >
              Why Choose Us
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
            >
              We combine innovative technology with exceptional service to
              deliver results.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {featureCards.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 6px 15px -4px rgba(0, 0, 0, 0.2)",
                  }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-md transition-all duration-300"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.03, 1],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-4xl mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.p
                  className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-300 uppercase text-sm tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gray-800/50 border border-gray-700/50 rounded-2xl p-12 backdrop-blur-sm relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Ready to Transform Your Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust our platform.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg font-semibold text-lg shadow-lg"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;
