module.exports = (output) => {
  const filteredOutput = output
    .split(/\r?\n/)
    .filter((line) => line.includes('→'))
    .map((line) => line.trim())
  console.log(filteredOutput);
  return filteredOutput.map((dep) => {
    const name = dep.match(/\S*/)[0];
    const fromTo = dep.replace(name, '').trim().replace(/\^/g, '');
    const from = fromTo.split('→')[0].trim()
    const to = fromTo.split('→')[1].trim()

    return {
      name,
      from,
      to,
    }
  });
}