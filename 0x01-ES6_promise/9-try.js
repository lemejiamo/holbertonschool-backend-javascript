export default function guardrail(mathFunction) {
  const list = [];
  try {
    list.push(mathFunction());
  } catch (error) {
    list.push(error.toString());
  }
  list.push('Guardrail was processed');
  return list;
}
