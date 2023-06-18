import React from 'react'
import styles from './About.module.css'
import Link from 'next/link'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function About() {
    // const color = indigo[900];


    return (
        <React.Fragment>
            <div className ={styles.aboutContainer}>
                <label className={styles.label}>Previous: </label>
                <p className={styles.content}>E-Commerce Solutions <span className={styles.orgname}><a  href="https://tpstech.in" rel="noopener noreferrer" target="_blank">@The Peripheral Store</a></span> </p>
                <label className={styles.label}>Current: </label>
                <p className ={styles.content}>Software Developer<span className={styles.orgname}><a href={"https://cars24.com"} rel="noopener noreferrer" target="_blank"> @Cars24</a></span></p>
                <label className={styles.label}>Next: </label>
                <p className ={styles.content}>Your wedding photographer</p>
                <br></br>
                <br></br>
                <h3 className={styles.message}>Hello anon | 
                    <a  href="https://t.me/deepakr28" 
                                    target="_blank" rel="noreferrer">
                        <MailOutlineIcon stroke-width={10} fontSize='medium' color="primary" style={{paddingLeft:"2px"}} /> 
                    </a>
                </h3>
                
            </div>
        </React.Fragment>
    )
}

export default About
