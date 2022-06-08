const BTL_AVERAGE_SALARY = 6331;
const POINT_VALUE = 233;

const points = 2.25;
const salary = 15000;

const btl = salary > BTL_AVERAGE_SALARY ? BTL_AVERAGE_SALARY * 0.035 + (salary - BTL_AVERAGE_SALARY) * 0.12 : salary * 0.035;

function calculateStep(salary, step, steps) {
   if (step == 0) {
      console.log(Math.min(salary, steps[0][1]) * (steps[0][0] / 100))
      return Math.min(salary, steps[0][1]) * (steps[0][0] / 100);

   }
   if (salary < steps[step - 1][1]) return calculateStep(salary, step - 1, steps);
   console.log(salary, (salary - steps[step - 1][1]) * (steps[step][0] / 100))
   return (salary - steps[step - 1][1]) * (steps[step][0] / 100) + calculateStep(steps[step - 1][1], step - 1, steps);

}
const taxes = calculateStep(salary, 6, Object.entries({
   10: 6450, // 645
   14: 9240, //390.46
   20: 14840,
   31: 20620,
   35: 42910,
   47: 55270,
   50: null
})) - points * POINT_VALUE;
console.log(btl, taxes);
