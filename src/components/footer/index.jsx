import React from 'react';
import styles from './styles.module.scss';


function Footer() {
    return(

            <footer id="footer">
    <div className={styles.container}>
      <div className={styles.infoArea}>
        <div className={styles.column}>
          <a href="https://github.com/so-sc">GitHub</a>
          <a href="https://instagram.com/sosc.sahyadri">Instagram</a>
          <a href="https://linkedin.com/company/sosc-sahyadri">LinkedIn</a>
          <a href="https://twitter.com/sahyadri_osc">Twitter</a>
        </div>
        <div className={styles.column}>
          <a href="https://github.com/so-sc/code-of-conduct">Community Guidelines</a>
          <a href="https://devfolio.co/code-of-conduct">Code of Conduct</a>
        </div>
        <div className={styles.column}>
          <p>
            <strong>Sahyadri Open-Source Community</strong><br/>
            Sahyadri College of Engineering and Management,
            Adyar, Mangalore - 575007 IN<br/><br/>
            sosc@sahyadri.edu.in<br/>
            +91 76248 28176
          </p>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>
      <p>SOSC © { new Date().getFullYear() }</p>
    </div>
  </footer>
        
    )
}

export default Footer