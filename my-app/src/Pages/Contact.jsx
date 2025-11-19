
import { useEffect, useState } from "react";


export default function Contact (){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const [alert,setAlert]=useState(false)


    useEffect(() => {
        let lastVisible = false; // track if element was visible last frame
    
        const handleScroll = () => {
          const element = document.querySelector("#venomTitle");
          if (!element) return;
    
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
          // When it becomes visible (enter screen)
          if (isVisible && !lastVisible) {
            const audio = new Audio("../../public/venom_qXqDVYX.mp3");
            audio.volume = 0.1;
            audio.play();
          }
    
          // update previous visibility state
          lastVisible = isVisible;
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    const handleClick = (e)=>{
        e.preventDefault();
        const nameError = document.getElementById('nameError')
        const emailError = document.getElementById('emailError')
        const messageError = document.getElementById('messageError')

        let valid = true;
        if(!name.trim()){
            nameError.textContent='Name must be existe'
            valid=false
        }else{
        
            nameError.textContent=''
        }
        
        if(!email.includes('@')){
            emailError.textContent='Email must be valid'
            valid=false
        }else{
            emailError.textContent=''
        } 
        if(!message.trim()){
            messageError.textContent='message must be existe'
            valid=false
        }else{
            messageError.textContent=''
        }

        if(valid){
            setAlert(true)
        }
        
    }

    return(
        <>
            <section className="contactSection">
                {
                    alert &&(
                        <div className="alert success">
                            <span className="alert-message">Your message has sent successfully !</span>
                            <button className="alert-close" onClick={() => setAlert(false)}>
                                ×
                            </button>
                        </div>
                    )
                }
                <div className="contactContainer">
                    <h2>Contact Us</h2>
                    <p>Have questions or suggestions? Drop us a message!</p>

                    <form className="contactForm">
                        <div className="formGroup">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />
                            <p style={{fontSize:'10px',color:'red'}} id="nameError"></p>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <p style={{fontSize:'10px',color:'red'}} id="emailError"></p>

                        </div>

                        <div className="formGroup">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                            <p style={{fontSize:'10px',color:'red'}} id="messageError"></p>
                        </div>

                        <div className="formGroup">
                            <button onClick={(e)=>handleClick(e)} type="submit" className="sendBtn">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                <h1  id="venomTitle" className="venomBG">We Are Venome</h1>

            </section>
        </>
    )
}
