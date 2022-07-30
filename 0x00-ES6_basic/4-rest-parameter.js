export default function returnHowManyArguments(...args) {
  let other = 0;
  args.forEach((element) => {
    other = element;
    other += 1;
  });
  return other;
}
