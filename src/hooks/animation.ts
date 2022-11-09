export const slideDown = {
  offscreen: {
    y: -20,
    opacity: 0.2,
    transition: { duration: 0.3 },
  },

  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },

  exit: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
