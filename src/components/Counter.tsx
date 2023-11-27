import {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <div>{counter}
            <button className={classes.btn} onClick={increment}>+</button>
        </div>

    )
}