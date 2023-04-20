export const animationVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: {duration: 1.5, delay: 0.5} }
}

export const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  }

export const skillsVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
} 