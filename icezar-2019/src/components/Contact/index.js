import React, { useState } from 'react'
import useForm from 'react-hook-form'
import * as constants from '../../Constants'

const Contact = () => {

    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            senderName: "",
            senderEmail: "",            
            senderCompany: "",
            message: ""
        }
    })
   
    const [sendMessageResponse, setSendMessageResponse] = useState('')

    const onSubmit = (data, e) => { 
      console.log('data: '+JSON.stringify(data))    
      saveMessage(data)         
      if(sendMessageResponse)
        e.target.reset()      
    }

    const saveMessage = async (data) => {
      try {
        const response = await fetch(constants.MESSAGE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)  
        })
        if(response.status === 200) {
          setSendMessageResponse('Message sent!')
        }
        else {
          setSendMessageResponse("Something went wrong. Please email me using my email: cezarb@gmail.com.");
        }
      } catch(e) {
        console.log(e)
      }
    }

    return (
      <div className='col-md-8 mx-auto'>
        <article className='card mb-4'>
          <header className='card-header text-center'>
            <h1 className='card-title'>Contact info</h1>
          </header>
          <div className='card-body text-center'>
            <p>
              Use this form to get in touch or email me directly at{" "}
              <a href='mailto: cezarb@gmail.com'>cezarb@gmail.com</a>
            </p>

            <div className='card-header text-center'>{sendMessageResponse}</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  name='senderName'
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Name'
                  ref={register({ required: true, maxlength: 40 })}
                />
                {errors.senderName && "Your name is required"}
              </div>
              <div className='form-group'>
                <label htmlFor='company'>Company</label>
                <input
                  name='senderCompany'
                  type='text'
                  className='form-control'
                  id='company'
                  placeholder='Company'
                  ref={register({ maxlength: 40 })}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  name='senderEmail'
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='Email address'
                  ref={register({
                    required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })}
                />
                {errors.senderEmail && "Your email is required"}
              </div>
              <div className='form-group'>
                <label htmlFor='question'>Message</label>
                <textarea
                  name='message'
                  className='form-control'
                  id='message'
                  rows='4'
                  placeholder='Message'
                  ref={register}
                ></textarea>
              </div>

              <button type='submit' className='btn btn-success'>
                Send
              </button>
            </form>
          </div>
        </article>
      </div>
    );
}


export default Contact