import React from 'react';
import ReactDom from 'react-dom';




class Timmer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       hours:0,
        minutes: 0,
        seconds: 0,
        millis: 0,
        running:false
      }

     /* setInterval(
        () => {
         
          this.count();}
          ,100)
          this.setState({running: true}) */
          this.handleStartClick = this.handleStartClick.bind(this);
          this.handleStopClick = this.handleStopClick.bind(this);
          this.handleResetClick = this.handleResetClick.bind(this);
          this.handleClick = this.handleClick.bind(this);
  }
//test


  count(){
    let millis = this.state.millis + 1;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;
    let hours = this.state.hours;
    if (millis === 10) {
        millis = 0;
        seconds = seconds + 1;
    }

    if (seconds === 60) {
        millis = 0;
        seconds = 0;
        minutes = minutes + 1;
    }

    if(minutes ===60){
        millis = 0;
        seconds = 0;
        minutes = 0;
        hours = hours +1;
    }
    
    this.update(millis, seconds, minutes, hours);

  }


  update(millis, seconds, minutes, hours) {
  
    this.setState({
        
        millis: millis,
        seconds: seconds,
        minutes: minutes,
        hours:hours,

    });
    
}


  handleStartClick(event) {
    var _this = this;
    if (!this.state.running) {
        this.interval = setInterval(() => {
            this.count();
        }, 100)

        this.setState({running: true})
    }
}


handleResetClick(event) {
 

  this.handleStopClick();
  this.update(0, 0, 0,0);

  
}

handleStopClick(event) {
 

  if (this.state.running) {
    clearInterval(this.interval);
    this.setState({running: false})
}
  
}
handleClick(event){

  var _this = this;
  if (!this.state.running) {
      this.interval = setInterval(() => {
          this.count();
      }, 100)

      this.setState({running: true})
  }

else {clearInterval(this.interval);
  this.setState({running: false})

}

}

addZero (value) {
  
    return value < 10 ? `0${ value}` : value;
   // hours = hours < 10 ? '0' + hours : hours;
   // minutes = minutes < 10 ? '0' + minutes : minutes;
   // seconds = seconds < 10 ? '0' + seconds : seconds;



  }








  render() {
    let run = this.state.running === true;
    return (

  
        <div>
          
            <ul className="MyList">
        
             
               <li>{this.addZero(this.state.seconds)}</li>
               <span>:</span>
               <li>{this.addZero(this.state.minutes)}</li>
               <span>:</span>
               <li>{this.addZero(this.state.hours)}</li>
            </ul>
           {/*<button className={"btn start " + (run ? 'disabled' : '')}
                            onClick={this.handleStartClick}>Start</button>
              <button className={"btn stop " + (run==false ? 'disabled' : '')}
    onClick={this.handleStopClick}>Stop</button>*/} 





<button
        
        //disabled={run}
        onClick={this.handleClick}
      >
        {run ? 'Stop' : 'Start'}
      </button>



               <button className={"btn reset " + (run==false ? 'disabled' : '')}
                            onClick={this.handleResetClick}>Reset</button>              
                            
       </div> 
    )
  }
}

export default Timmer;

