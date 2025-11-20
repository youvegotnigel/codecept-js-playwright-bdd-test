import { event } from "codeceptjs";

module.exports = () => {

  event.dispatcher.on(event.test.before, (test: any) => {
    console.log("Before Test:", test.title);
  });

  event.dispatcher.on(event.test.after, (test: any) => {
    console.log("After Test:", test.title);
  });

  event.dispatcher.on(event.test.passed, (test: any) => {
    console.log("PASSED:", test.title);
  });

  event.dispatcher.on(event.test.failed, (test: any, err: Error) => {
    console.log("FAILED:", test.title, " | ", err.message);
  });

  event.dispatcher.on(event.all.before, () => {
    console.log("*** Test Run Starting ***");
  });

  event.dispatcher.on(event.all.after, () => {
    console.log("*** Test Run Finished ***");
  });
  
};
