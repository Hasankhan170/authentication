"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Users, Target, Award, TrendingUp, CheckCircle } from "lucide-react";
import Image from "next/image";
const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [teamRef, teamInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animation variants
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

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jessica Parker",
      role: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  const companyValues = [
    {
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible with technology.",
      icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code to customer service.",
      icon: <Award className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Integrity",
      description:
        "We believe in transparency, honesty, and doing what's right for our customers.",
      icon: <CheckCircle className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Collaboration",
      description:
        "We work together as a team, valuing diverse perspectives and ideas.",
      icon: <Users className="w-10 h-10 text-blue-500" />,
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated background elements */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`bg-${i}`}
              className="absolute rounded-full bg-blue-500/10"
              initial={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            >
              About Us
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              We're a team of passionate individuals dedicated to creating
              innovative solutions that transform the way businesses operate in
              the digital world.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative z-10 rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwW-moo5X80Op3ungQRgzHeewHdXZd6QWqhw&s"
                  alt="Our office"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Our Story
              </h2>
              <p className="text-gray-300 mb-6">
                Founded in 2018, we started with a simple mission: to make
                technology accessible and effective for businesses of all sizes.
                What began as a small team of three has now grown into a
                thriving company with over 50 talented professionals.
              </p>
              <p className="text-gray-300 mb-6">
                Our journey has been defined by continuous innovation,
                overcoming challenges, and celebrating successes alongside our
                clients. We've helped hundreds of businesses transform their
                digital presence and achieve remarkable growth.
              </p>
              <div className="flex items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-500">5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-500">200+</div>
                  <div className="text-gray-400 text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-500">50+</div>
                  <div className="text-gray-400 text-sm">Team Members</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={valuesRef}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            >
              Our Values
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              These core principles guide everything we do and shape our
              approach to business and technology.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-lg transition-all hover:border-blue-500/30 group"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="mb-6"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              The talented individuals who make our vision a reality.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-800/30 rounded-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="relative z-10 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <Target className="w-full h-full p-12 text-blue-500" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage in an
                ever-evolving digital landscape.
              </p>
              <p className="text-gray-300 mb-6">
                We believe that technology should be accessible to all
                businesses, regardless of size or industry. Our mission is to
                democratize access to cutting-edge solutions that can transform
                operations, enhance customer experiences, and drive sustainable
                growth.
              </p>
              <p className="text-gray-300">
                Through continuous innovation, exceptional service, and a deep
                understanding of our clients' needs, we strive to be more than
                just a service provider – we aim to be a trusted partner in our
                clients' success stories.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
