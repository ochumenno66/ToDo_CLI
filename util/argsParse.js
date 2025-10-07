export const argsParse = ([, , ...argv]) => {
  const args = {};

  for (let i = 0; i < argv.length; i++) {
    if (argv[i][0] !== "-") continue;

    if (argv[i + 1] && argv[i + 1][0] !== "-") {
      if (argv[i].startsWith("--")) {
        args[argv[i].substring(2)] = argv[i + 1];
      } else {
        args[argv[i].substring(1)] = argv[i + 1];
      }
      continue;
    }

    args[argv[i].substring(1)] = true;
  }

  return args;
};
