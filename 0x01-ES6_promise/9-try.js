/* export default function guardrail(mathFunction) {
  const list = [];
  try {
    list.push(mathFunction());
  } catch (error) {
    list.push(error.toString());
  }
  list.push('Guardrail was processed');
  return list;
}
 */

export default function guardrail(mathFunction) {
  const queue = [];
  let value;

  try {
    value = mathFunction();
  } catch (err) {
    value = err.toString();
  }

  queue.push(value);
  queue.push('Guardrail was processed');

  return queue;
}
