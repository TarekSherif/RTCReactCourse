import  './style.css';

function Contact(props) {
  return (
    <>
    <div className="drop">
            <div className="container">
                <h2 className="drop-title"><span>Drop </span>Me A line</h2>
                <form action="">
                    <div className="form-input">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                    </div>
                    <input type="text" className="sub" placeholder="Your Subject"/>
                    <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
        </div>
        
        
        <div className="footer">
            <p> copyright &copy; 2018 by ultra profile </p>
        </div>
    </>
  );
}

Contact.defaultProps={
}
export default Contact;
