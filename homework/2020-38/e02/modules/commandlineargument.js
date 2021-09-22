const readargs = () => {
  // read command line arguments and ignore first two arguments
  let myArgs = process.argv.slice(2);
  // check if there are any arguments
  if (myArgs[0] == undefined) {
    throw console.error("Give command line arguments");
  } else {
    // Transform the arguments to numbers
    myArgs = myArgs.map((x) => {
      return parseInt(x);
    });
    // loop through the arguments and check that they are integer
    for (const argument of myArgs) {
      if (!Number.isInteger(argument)) {
        // if argument is not number throw error
        throw console.error("CLI arguments must be numbers");
      }
    }
    return myArgs;
  }
};
export default readargs;
