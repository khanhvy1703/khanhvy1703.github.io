import React from 'react';
import MailToBtn from './MailToBtn';

export default function Footer() {
  return (
    <div
      className='center'
      style={{ backgroundColor: 'rgba(95, 158, 160, 0.3)' }}
    >
      <div style={{ marginTop: '15px' }}>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Interested in source code?
        </p>
        <span style={{ fontSize: '18px'}}>Email me at </span>
        <MailToBtn label='le.ngoc@northeastern.edu' mailto='mailto:le.ngoc@northeastern.edu'/>
        <p style={{ fontSize: '18px'}}>
          I will grant you access to the source code of the projects that are
          set private!
        </p>
      </div>
      <div className='footer-pd'>© Copyright 2022 Ngoc Le</div>
    </div>
  );
}
