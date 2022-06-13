import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { authMiddleware } from '../../../utils';
import Footer from '../../footer/Footer';
import Header from '../../header/Header'
import SubmitButton from '../../layout/button/SubmitButton';

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
  
    return (
      <>
        <Header />
        <form>
          <h2>New Volunteering</h2>
          <p>Please fill in this form to create a volunteering.</p>
          <label>Account type:</label>
          <br/>
          <label>Name: </label>
          <input type="text" name="name" onChange={(e) => handleChange(e)} value={formInputs?.name}/>
          <br/>
          <label>date: </label>
          <input type="date" name="date" onChange={(e) => handleChange(e)} value={formInputs?.date}/>
          <br/>
          <label>description: </label>
          <input type="text" name="description" onChange={(e) => handleChange(e)} value={formInputs?.description}/>
          <br/>
          <label>address: </label>
          <input type="text" name="address" onChange={(e) => handleChange(e)} value={formInputs?.address}/>
          <br/>
          <label>keywords: (seperate by comma)</label>
          <input type="text" name="keywords" onChange={(e) => handleChange(e)} value={formInputs?.keywords}/>
          <br/>
          <SubmitButton onClick={(e: any) => handleSubmit(e)} value={"Submit"} />
          <b>{feedback}</b>
        </form>
        <Footer />
      </>
    );
}

export default NewVolunteering