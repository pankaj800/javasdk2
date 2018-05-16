import  React  from  "react";
import  {  render  }  from  "react-dom";
import  Hello  from  "./Hello";
import  Details  from  "./details";
const  styles  =  {
  fontFamily:  "sans-serif",

};
let  courses  =  ["eng",  "mth",  "grammer"];
const  App  =  ()  =>  (
  <div  style={styles}>
    <Hello  name="CodeSandbox"  />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Details
    title="course topics"
    mycourse={courses}
    valuecount={9}
    ></Details>
  </div>
);
render(<App  />,  document.getElementById("root")); 
