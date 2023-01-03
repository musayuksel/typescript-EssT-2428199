interface Window {
    MY_VAR: string;
}
//we can now use the MY_VAR variable in our TypeScript code
//it is very useful to use this technique to add new properties to the Window object or third-party libraries
// this technique is called declaration merging
const myVar = window.MY_VAR;