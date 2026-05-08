import React from 'react'
import { motion } from 'framer-motion'

const DashboardCard = ({ title, value }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className='bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl'
    >
      <h2 className='text-slate-400 text-lg'>{title}</h2>

      <p className='text-4xl font-bold text-yellow-400 mt-4'>
        {value}
      </p>
    </motion.div>
  )
}

export default DashboardCard