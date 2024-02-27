import "./logo-and-text-frame.css";

const LogoAndTextFrame = () => {
  function showsidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

  }
  function hidesidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  return (
    <div className="logo-and-text-frame">
      <div className="rectangle206" />
      <div className="navigation-bar">
        <div className="frame-with-link-and-image">
          <div className="image-inside-frame" />
          <div className="image-inside-frame1" />
        </div>
        <div className="frame-parent7">
          <div className="depth-frame-group">
            <div className="depth-frame2" />
            <div className="depth-frame3" />
            <div className="irrigation-management" />
          </div>
          <div className="image14" />
        </div>
        <div className="off2">
          <div className="off-limited-time-text" />
          <div className="computer-modern-text">
            <div className="rectangle207" />
            <img className="image-icon15" alt="" src="/image.svg" />
          </div>
        </div>
        <div className="privacy-policy-text">
          <div className="terms-of-service-text">
            <div className="categories-frame" />
            <div className="sign-up-text">
              <div className="depth-frame4" />
              <div className="manage-your-nutrient-applicati-parent">
                <div className="manage-your-nutrient-applicati" />
                <div className="depth-frame5" />
                <div className="categories">Categories</div>
              </div>
              <div className="depth-frame-container">
                <div className="depth-frame6" />
                <div className="rectangle-parent9">
                  <div className="rectangle208" />
                  <div className="website-builders">Website Builders</div>
                </div>
              </div>
              <div className="depth-frame-parent1">
                <div className="depth-frame7" />
                <div className="depth-frame-parent2">
                  <div className="depth-frame8" />
                  <div className="todays-deals">Today's deals</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent8">
            <div className="depth-frame-parent3">
              <div className="depth-frame9" />
              <div className="depth-frame10" />
              <div className="depth-frame11" />
              <div className="depth-frame12" />
            </div>
            <div className="image15" />
           
          </div>
        </div>
        <div className="mobile-nav"> <svg className='showsidebar' onClick={showsidebar} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" color="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        
        <ul className="sidebar">
          <li onClick={hidesidebar}><svg  className='menu-close' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
          <li className="navli"><a href="/">Categories</a></li>
            <li className="navli"><a href="/">Website Builders</a></li>
            <li className="navli"><a href="/">Today's deals</a></li>
        </ul></div>
      </div>
    </div>
    
  );
};

export default LogoAndTextFrame;
