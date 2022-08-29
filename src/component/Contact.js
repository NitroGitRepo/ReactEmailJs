import React , {useRef}from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    
        const form = useRef();
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_tl706z7', 'template_yjf2fdy', form.current, 'rTDgZGo86A-OQRvmF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
            );
            e.target.reset();
        };
  return (
    <>
    <div class = "jumbotron text-bg-dark jumbotron-fluid">
        <div style={{width : '30%'}} className=' container rounded-2 py-3 bg-warning'>
               <h3 className='text-center'>Registration From</h3>
               <form ref={form} onSubmit = {sendEmail}>
  <div class="form-group mt-5">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name= "user_email" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name = "user_name" placeholder="Name" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputText">Enter The Message</label>
    <textarea className='form-control w-100 ' rows='5' name = "message" style={{resize:"none"}} >
             Enter The Message
    </textarea>
  </div>

  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"  />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-success px-3">Submit</button>
</form>
        </div>

        <div class=" text-bg-dark jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
        </div>
    </>
  )
}
