const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: 'spring', stiffness: 100 },
      opacity: { duration: 0.2 },
    },
  },
}

export { containerVariants, itemVariants }
