const totalEatedCalories = state => state.products.productsByDay.totalCalories;

const leftCalories = state => state.products.productsByDay.leftCalories;

const dailyNormalProcent = state => state.products.productsByDay.dailyNormalProcent;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  totalEatedCalories,
  leftCalories,
  dailyNormalProcent
};