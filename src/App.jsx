
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [invalidPrinciple, setInvalidPriciple] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)

  const validateInputs = (inputTag) => {
    // console.log(typeof inputTag);
    const { name, value } = inputTag
    // console.log(name, typeof value);
    // console.log(!!value.match(/^[0-9]+(\.[0-9]+)?$/));

    // console.log(!!value.match(/^\d+(\.\d+)?$/));

    if (name =='principle'){
      setPrinciple(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setInvalidPriciple(false)
      } else {
        setInvalidPriciple(true)
      }

    }else if (name == 'rate') {
      setRate(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setInvalidRate(false)
      } else {
        setInvalidRate(true)
      }

    }else{
      setYear(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setInvalidYear(false)
      } else {
        setInvalidYear(true)
      }
    } 
  }
  const handleCalculate = (e) => {
      e.preventDefault()
    if(principle && rate && year){
      setInterest(principle+rate+year/100)
    }else{
      alert("Please fill the form completly!!!")
    }
  }
  const handleReset = (e) => {
    setInterest(0)
    setYear(0)
    setRate(0)
    setPrinciple(0)
    setInvalidPriciple(false)
    setInvalidRate(flase)
    setInvalidYear(false)
  }

    return (
      <>
        <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
          <div style={{ width: '600px' }} className='bg-light rounded p-5'>
            <h1>Simple Interest Calculator</h1>
            <p>Calculate Your Simple Interest Easily!!</p>
            <div className='bg-warning p-3 text-light text-center rounded'>
              <h1>₹ {interest}</h1>
              <p>Total Simple Interest</p>
            </div>
            <form className='mt-5'>
              {/* principle */}
              <div className='mb-3'>
                <TextField value={principle ||""} name='principle' onChange={(e) => validateInputs(e.target)} className='w-100' id="outlined-principle" label="Principle" variant="outlined" />
              </div>

              {/* Invalid principle */}
              {invalidPrinciple && <div className='mb-3 text-danger fw-folder'>
                Invalid Principle Amount!!!
              </div>}


              {/* Rate */}
              <div className='mb-3'>
                <TextField value={rate ||""} name='rate' onChange={(e) => validateInputs(e.target)} className='w-100' id="outlined-rate" label="Rate" variant="outlined" />
              </div>

              {/* Invalid rate */}
              {invalidRate && <div className='mb-3 text-danger fw-folder'>
                Invalid Rate!!!
              </div>}


              {/* Year */}
              <div className='mb-3'>
                <TextField value={year ||""} name='year' onChange={(e) => validateInputs(e.target)} className='w-100' id="outlined-year" label="Year" variant="outlined" />
              </div>

              {/* Invalid year */}
              {invalidYear && <div className='mb-3 text-danger fw-folder'>
                Invalid Year!!!
              </div>}


              <Stack direction="row" spacing={2}>
                <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear}
                  style={{ width: '50%', height: '70px' }} variant="contained" className='bg-dark'>Calculate</Button>
                <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">RESET</Button>
              </Stack>
            </form>
          </div>
        </div>
      </>
    )
  }

export default App
