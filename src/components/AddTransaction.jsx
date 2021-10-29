import React, { useEffect } from 'react';
import { Context } from '../context/GlobalState'
import validator from './Validator';
import { v4 as uuid4 } from 'uuid'

const initState = {
  text: '',
  amount: '',
}
export const AddTransaction = () => {
 
  const { dispatch } = React.useContext(Context)
  const [formData, setFormData] = React.useState(initState);
  const [err, setError] = React.useState(formData)

  const onchangeHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const data = {
    // id: Math.floor(Math.random() * 1000 * 100000),
    id: uuid4(),
    text: formData.text,
    amount: +formData.amount,
    date: (new Date()).toLocaleString(),
  }

  // console.log( (Date.now()).toLocaleString())


  const onSubmitHandler = (e) => {
    e.preventDefault()
    setError(validator(formData))
  }

  useEffect(() => {
    if (Object.keys(err).length === 0) {
      setFormData(initState);
      dispatch({ type: 'AddItem', AddTransanction: data });
      
      
    }
  }, [err, data, dispatch])

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitHandler} id="reset">
        <div className="form-control">
          <label htmlFor="text">Text</label>

          <input
            type="text"
            placeholder="Enter text..."
            onChange={onchangeHandle}
            name="text"
            value={formData.text}
          />
          {err.text && <span className="error">{err.text}  </span>}
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive + income)
          </label>

          <input
            type="number"
            placeholder="Enter amount..."
            onChange={onchangeHandle}
            name="amount"
            value={formData.amount}

          />
          {err.amount && <span className="error">{err.amount}  </span>}
        </div>
        <input type="submit" className="btn" value="Add Transaction" />
      </form>
    </>
  )
}
