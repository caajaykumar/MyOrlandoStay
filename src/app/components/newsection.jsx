'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-8">
      {/* Hero Section */}
      <section className="text-center py-20 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold text-blue-900"
        >
          Find Your Perfect Vacation Rental
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-700"
        >
          Beautiful homes. Unforgettable stays. Easy bookings.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-xl shadow-lg hover:bg-blue-800"
        >
          Explore Now
        </motion.button>
      </section>

      {/* Featured Properties */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 py-10">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={`https://source.unsplash.com/random/600x400?house,beach,${item}`}
              alt="Property"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Cozy Beach House {item}</h3>
              <p className="text-gray-600">2 Bed · 2 Bath · Ocean View</p>
              <p className="mt-2 text-blue-600 font-bold">$150 / night</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}



