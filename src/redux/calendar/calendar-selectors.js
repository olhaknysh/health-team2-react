const currentDate = state => state.calendar.currentDate;
const isLoading = state => state.calendar.loader;

const selectors = {
  currentDate,
  isLoading,
};

export default selectors;
