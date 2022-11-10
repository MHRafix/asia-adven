export const slideDown = {
  offscreen: {
    y: -20,
    height: 0,
    opacity: 0.2,
    transition: { duration: 0.3 },
  },

  onscreen: {
    y: 0,
    height: 65,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },

  exit: {
    y: -20,
    height: 0,
    opacity: 0.2,
    transition: { duration: 0.3 },
  },
};
