class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function findJson(json) {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new ValidationError("name missing");
  }
  if (!user.age) {
    throw new ValidationError("age missing");
  }

  return user;
}

try {
  let json = '{name":"ankit"}';
  let user = findJson(json);
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("inavid data", err.message);
  } else if (err instanceof SyntaxError) {
    console.log("syntax error", err.message);
  } else {
    throw new Error("oops pata nhi kya hua");
  }
}
