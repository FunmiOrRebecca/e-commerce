import './timer.styles.css';
import { useState, useEffect} from 'react';


const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const deadline = "31 dec 2022";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

         setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
      }, []);
      return (
        <div className='timer'>
            <div>
              <p className="time">{days < 10 ? "0" + days : days}:</p>
            </div>
            <div>
              <p className="time">{hours < 10 ? "0" + hours : hours}:</p>
            </div>
            <div>
              <p className="time">{minutes < 10 ? "0" + minutes : minutes}:</p>
            </div>
            <div>
              <p className="time">{seconds < 10 ? "0" + seconds : seconds}</p>
            </div>
       
        </div>
      );
}

export default Timer;