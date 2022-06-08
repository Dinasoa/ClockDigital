/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import "./Clock.css";

export class ClockClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(),
     timer: null };
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => this.setState({ date: new Date() }), 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  padStartDigit(digit) {
    return digit.toString().padStart(2, "0");
  }

  render() {
    return (
      <div className="clock">
        <span>{this.padStartDigit(this.state.date.getHours())}: </span>
        <span>{this.padStartDigit(this.state.date.getMinutes())}: </span>
        <span>{this.padStartDigit(this.state.date.getSeconds())}</span>
    <button type="button" class="btn btn-light">Light</button>
      </div>
    );
  }
}

export function Clock() {
  const [date, setDate] = useState(new Date());
  const [switched , setSwitched] = useState(0);
  const [getHour, setGetHour] = useState(0) ;
  const [getMinute, setGetMinute] = useState(0) ;
  const [getSecond, setGetSecond] = useState(0) ;
  
  let timerId;
  function padStartDigit(digit) {
    return digit.toString().padStart(2, "0");
  }

  useEffect(() => {
    timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  });

  function toggle (){
    if(switched === 0)
    setSwitched(1) ;
    else if(switched == 1)
    setSwitched(0) ;
  }

  function getTheValue(e){
    return setGetHour(e.target.value) ;
  }

  function getTheValue(f){
   return setGetMinute(f.target.value) ;
  }
  function getTheValue(g){
    return setGetSecond(g.target.value) ;
  }

  return (
    <>
   
    <div className="clock">
    <button className="button"onClick={toggle}>Button</button>  
      {
        (switched===0) ?  
        <div>
        {/* <input type="text" onChange={getTheValue}></input>
        <input type="text" onChange={getTheValue}></input>
        <input type="text" onChange={getTheValue}></input> */}
        <span>{padStartDigit(date.getHours())}: </span>
        <span>{padStartDigit(date.getMinutes())}: </span>
        <span>{padStartDigit(date.getSeconds())}</span>
        
        </div> : <Timer toggle={toggle}/>
      }
    </div>
    
    </>
    
  );
}

export function Timer ({toggle}){
  const [hour , setHour] = useState(0) ;
  const [seconde , setSecond] = useState(5) ;
  const [minute , setMinute] = useState(0) ;
  
  let timerId ;

  function padStartDigit(digit){
      return digit.toString().padStart(2 , "0") ;
  }

useEffect(() => {
  timerId = setInterval(() => {
    (async function(){
      if(seconde == 0 && hour == 0 && minute == 0 ){
        alert("Time is out")
      }
      if(hour == 0 && minute == 0 && seconde ==0 ){
      setMinute(0)  
     setHour(0)
      setSecond(0)
      toggle()
      }
      if(seconde == padStartDigit(0)){
        setMinute(minute - 1) 
        setSecond(59)
      }
      else{
          setSecond(seconde -1) ;
      }
    })()
} , 1000) ;
return () => clearInterval(timerId) ;
})

    return (
      <div className="clock">
          <span>{padStartDigit(hour)} : </span>
          <span>{padStartDigit(minute)} : </span>
          <span>{padStartDigit(seconde)}</span>
      </div>
    )
} ; 



