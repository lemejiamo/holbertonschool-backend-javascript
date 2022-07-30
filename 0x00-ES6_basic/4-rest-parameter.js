export default function returnHowManyArguments(...args) {
  let other = 0;

  args.forEach(() => {
    other += 1;
  });
  return other;
}
