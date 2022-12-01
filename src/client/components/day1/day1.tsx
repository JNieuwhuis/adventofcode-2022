import { Input_Day1 } from "./input_day1";

export const Day1 = () => {
  const totalCalories: Array<number> = [];

  Input_Day1.split("\n").reduce<number>(
    (accumulator: number, currentValue: string) => {
      const trimmed = currentValue.trim();
      if (!trimmed) {
        totalCalories.push(accumulator);
        return (accumulator = 0);
      }

      return accumulator + parseInt(trimmed);
    },
    0
  );

  const maxCount = Math.max(...totalCalories);
  //   console.log(maxCount);

  const totalCaloriesSorted = totalCalories.sort((a, b) => b - a);
  const totalTopThree =
    totalCaloriesSorted[0] + totalCaloriesSorted[1] + totalCaloriesSorted[2];
  //   console.log(totalTopThree)

  return (
    <>
      <p>The most calories that an elf is carrying is: {maxCount}</p>;
      <p>
        The top three elves carry this many calories in total: {totalTopThree}
      </p>
      ;
    </>
  );
};
