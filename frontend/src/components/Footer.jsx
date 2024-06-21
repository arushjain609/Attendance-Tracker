// import ScrollButton from "./ScrollTop";

function Footer(){
    // const topFunction = () => {
    //     console.log("scroll");
    //     // document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // };
    // const scrollToTop = () =>{ 
    //     window.scrollTo({ 
    //         top: 0,  
    //         behavior: 'smooth'
    //         /* you can also use 'auto' behaviour in place of 'smooth' */
    //     }); 
    // }; 
    return(
        <footer className="footer">
          <div className="return-to-top">
            <div className="text-wrapper-17">
                {/* <ScrollButton /> */}
                {/* <button className="scrollup" onclick={() => {scrollToTop()}}>Return to top</button> */}
                <a href="#">Return to Top</a>
            </div>
          </div>
         {/**  <div className="primary-links">
            <div className="footer-primary-link">
              <div className="text-wrapper-18">Documentation</div>
            </div>
            <div className="footer-primary-link">
              <div className="text-wrapper-18">Features</div>
            </div>
            <div className="footer-primary-link">
              <div className="text-wrapper-18">Getting started</div>
            </div>
            <div className="footer-primary-link">
              <div className="text-wrapper-18">About us</div>
            </div>
          </div>
          */}
          <div className="agency-wrapper">
            <div className="agency">
              <div className="name-of-agency">Attendance Tracker</div>
            </div>
          </div>
        </footer>
    )
};

export default Footer