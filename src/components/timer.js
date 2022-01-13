import React from 'react';

export default class Timer extends React.Component {

    state = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    componentDidMount() {
        
        this.timerID = setInterval(() => this.updateTimer(), 1000);
        this.updateTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    startTimer = () => {
        if(this.timerID) return;
        this.timerID = setInterval(() => this.updateTimer(), 1000);
    }

    stopTimer = () => {
        clearInterval(this.timerID, 1000);
        this.timerID = null;
    }

    updateTimer() {
        let date = new Date();
        let hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
	    let minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
	    let seconds = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : date.getSeconds();

        console.log(this.timerID);

        this.setState({
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
    }

    render() {

        let { hours, minutes, seconds } = this.state;
        
        return (
            <div>
                <h2 className="time">Время:  {hours} : {minutes} : {seconds}</h2>
                <div className="btn-block">
                    <button className="btn" onClick={this.startTimer}>Start</button>
                    <button className="btn" onClick={this.stopTimer}>Stop</button>
                </div>
            </div>
        );
    }
}