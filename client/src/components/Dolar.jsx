import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './dolar.module.css'
/* const styles = require('./dolar.module.css') */

const Dolar = () => {

    const [currency, setCurrency] = useState({})
    const [amount, setAmount] = useState(0)
    const [convertion, setConvertion] = useState(0)
    const [typeOfChange, setTypeOfChange] = useState("dolar")

    // este estado es para setear que se está trabajando sin servidor
    const [prov, setProv] = useState(false)

    useEffect(() => {
        (async () => {

            try {
                await axios.get('http://localhost:3008/')
                    .then((res) => {
                        setCurrency(res.data)
                    })
                  
            }

            catch(error) {
                console.log(error)
                setCurrency({
                    value: 18.316000,
                    rate: "$"
                })
                setProv(true)
            }

        })()
    }, [])

    const handleOnClick = (e) => {
        e.preventDefault()
        typeOfChange === 'dolar'
            ? setConvertion(amount * currency.value)
            : setConvertion(amount / currency.value)
    };

    const convert = (e) => {
        e.preventDefault()
        setTypeOfChange(e.target.value)
        setConvertion(0)
    };

    const handleOnChange = (e) => {
        e.preventDefault()
        setAmount(e.target.value)
    };

    return (

        <div class={styles.div}>
            <p class={styles.h1}> Precio actual del dolar BCV:  U{currency.rate}D {currency.value} {prov ? "<< REF Conctar al servidor" : ""} </p> 

            <h3 class={styles.h3}> Introduce el monto que quieres convertir y elige el cambio </h3>
            
            <div>
                
                <input onChange={(e) => handleOnChange(e)} type="number" />
                <select onChange={(e) => convert(e)}>
                    <option value="dolar">U$D a Bs</option>
                    <option value="bolivar">Bs a U$D</option>
                </select>
                <br/>
                <br/>
                <button onClick={(e) => handleOnClick(e)}>
                    convertir
                </button>

            </div>

            <h4>Total: { typeOfChange === 'dolar' ? "Bs" : "U$D" } {convertion}</h4>

        </div>

    )
}

export default Dolar