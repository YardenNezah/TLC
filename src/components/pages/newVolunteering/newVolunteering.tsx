/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react'
import { authMiddleware } from '../../../utils';
import Footer from '../../footer/Footer';
import Header from '../../header/Header'
import SubmitButton from '../../layout/button/SubmitButton';
import '../../user/User.scss';

function NewVolunteering() {
    const [feedback, setFeedback] = useState("");

    const [formInputs, setFormInputs]: any = useState({})
  
    const handleChange = (e: any) => {
      if(e.target.name === "keywords") e.target.value = e.target.value.split(",")
      setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.value
      })
    }
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      const token: any = localStorage.getItem("token")
      try {
        const result = await axios.post("http://localhost:8080/volunteering", formInputs, {
            headers: {
                'auth-token': token
            }
        });
        
        setFeedback("Volunteering created successfuly");
      } catch (err: any) {
        setFeedback(err.response.data || "Network error. try again");
      }
    };
  
    useEffect(() => {
      authMiddleware(false, true, true)
    }, []);
  let datePickerId = new Date().toISOString().split("T")[0];
    return (
      <>
        <Header />
        <form className='new-volunteering-form'>
          <h2>New Volunteering</h2>
          <p>Please fill in this form to create a volunteering.</p>
          <label>Name: </label>
          <input type="text" name="name" onChange={(e) => handleChange(e)} value={formInputs?.name}/>
          <br/>
          <label>Date: </label>
          <input type="date" name="date" onChange={(e) => handleChange(e)} value={formInputs?.date} min={datePickerId}/>
          <br/>
          <label>Description: </label>
          <input type="text" name="description" onChange={(e) => handleChange(e)} value={formInputs?.description}/>
          <br/>
          <label>Address: </label>
          <input type="text" name="address" onChange={(e) => handleChange(e)} value={formInputs?.address}/>
          <br/>
          <label>Keywords:<br /> (seperate by comma)</label>
          <input type="text" name="keywords" onChange={(e) => handleChange(e)} value={formInputs?.keywords}/>
          <br/>
          <div className="submit-form-btn">

          <SubmitButton onClick={(e: any) => handleSubmit(e)} value={"Submit"} />
          </div>
        </form>          <b>{feedback}</b>

        <Footer />
      </>
    );
}

export default NewVolunteering