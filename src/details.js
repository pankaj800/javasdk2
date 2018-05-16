import React from 'react';

const minus={
marginLeft:"10px"

}

const plus = {
  marginright: "10px"

}



class Details extends React.Component{

constructor(props){
super(props);
this.state={
  total:0
}
this.increaseValue=this.increaseValue.bind(this);
this.decreaseValue = this.decreaseValue.bind(this);

}

increaseValue() {

  this.setState({

    total: this.state.total + 1
  })
}

decreaseValue() {

  this.setState({

    total: this.state.total - 1
  })
}
render(){
  const mydataelements = this.props.mycourse.map(function(element,index){

    return    <li key={index}>{element}</li>
 
});
return (

  <div>
  <h2>details component</h2>
  <p>{this.props.title}</p>
  <ul>{mydataelements}</ul>

  <h3>state introduction</h3>

  </div>)
}

}
export default Details;