const isDev = process.env.NODE_ENV === "development";
const logger = {
  // Called whenever there's an error on the server we want to print
  debug: (log: any) => {
    if (isDev) {
      console.log("dev: ", log);
    }
  },
  error: (err: any) => {
    if (isDev) {
      console.log("error: ", err);
    }
  }
};

export default logger;
