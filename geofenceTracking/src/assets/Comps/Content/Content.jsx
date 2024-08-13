import React from 'react';
import '../Content/Content.css';
import NotificationIcon from '../../icons/NotificationIcon.png';

const Content = () => {
  return (
    <div className='content-header'>
      <div className="header-activity">
        <div className="search-box" style={{ backgroundColor: 'rgba(217, 217, 217, 0.30)' }}>
          <input type='text' placeholder='Search' />
        </div>

        <div className="notify">
          <div className='notification-icon' style={{ backgroundColor: 'rgba(217, 217, 217, 0.30)' }}>
            <img src={NotificationIcon} alt="Notification Icon" />
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Content;
