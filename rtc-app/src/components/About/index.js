import  './style.css';

function About(props) {
  return (
   
   <><div className="creative">
            <div className="container">
                <div className="creative-info">
                    <h2 className="info-title"><span>This is</span> Me</h2>
                    <h4 className="info-dir">Creative Director</h4>
                    <p className="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                    <p className="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                </div>
            </div>
        </div>
        
        <div className="social-media">
            
            <div className="social face">
                <i className="icon fa fa-facebook fa-lg"></i>
                <p>
                    <span className="info1">Follow Me on</span>
                    <span className="info2">Social Facebook</span>
                </p>
            </div>
            
            <div className="social twitter">
                <i className="icon fa fa-twitter fa-lg"></i>
                <p>
                    <span className="info1">Tweet Me on</span>
                    <span className="info2">Social twitter</span>
                </p>
            </div>
            
            <div className="social pin">
                <i className="icon fa fa-pinterest fa-lg"></i>
                <p>
                    <span className="info1">Pin Me on</span>
                    <span className="info2">Social Pinterest</span>
                </p>
            </div>
        </div>
        </>
  );
}

About.defaultProps={
}
export default About;
