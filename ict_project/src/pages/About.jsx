import React from 'react'
import { Button } from '@mui/material'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../assets/CRM1.jpg';
import image2 from '../assets/CRM2.jpg';
import image3 from '../assets/CRM3.jpg';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate()
  return (
    <div>
    
      <div style={{
        display: 'flex',
       
        alignItems: 'center',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '4rem 2rem',
        gap: '4rem'
      }}>
        <div style={{ flex: 1, minWidth: 300 }}>
          <h1 style={{
            
            fontWeight: 700,
            color: '#2d3748',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            
          }}>
             <span style={{ color: '#2563eb' }}>Streamline Your Business<br />
            With OurCRM Solution</span>
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgb(210, 210, 210)',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
            
          }}>
            Our powerful platform helps you manage customer relationships,<br />
            automate sales processes, and grow your business efficiently.
          </p>
          
          <div >
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{
                padding: '0.8rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 8,
                textTransform: 'none'
              }}
              onClick={()=>{navigate('/login')}}
            >
              Get Started
            </Button>
          </div>
        </div>
        
        <div style={{ flex: 1, minWidth: 300 }}>
          <img 
            src={image1} 
            alt="CRM Dashboard" 
            style={{
              width: '100%',
              maxWidth: 600,
              borderRadius: 12,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </div>

     
      <div style={{
        display: 'flex',
        
        alignItems: 'center',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '4rem 2rem',
        gap: '4rem',
        backgroundColor: 'rgb(255, 255, 255)'
      }}>
        <div style={{ flex: 1, minWidth: 300 }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#2d3748',
            marginBottom: '1.5rem'
          }}>
            Powerful Features Designed for Growth
          </h2>
          
         <ul style={{
            listStyleType: 'none',
            padding: 0,
            marginBottom: '2rem'
          }}>
            <li style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#4a5568' }}>✓ Contact Management</li>
            <li style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#4a5568' }}>✓ Sales Pipeline Tracking</li>
            <li style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#4a5568' }}>✓ Task Automation</li>
            <li style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#4a5568' }}>✓ Detailed Analytics</li>
            <li style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#4a5568' }}>✓ Team Collaboration</li>
          </ul>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#4a5568',
            lineHeight: 1.6
          }}>
            Our platform adapts to your business needs, providing the tools you need to 
            build stronger customer relationships and close more deals.
          </p>
        </div>
        
        <div style={{ 
          flex: 1, 
          minWidth: 300,
          borderRadius: 8,
          overflow: 'hidden',
          boxShadow: '0 10px 15px -3px rgba(210, 34, 34, 0.1)'
        }}>
          <Carousel
      
            infiniteLoop
            showThumbs={false}
            autoPlay
            interval={3000}
            width="100%"
          >
            <div><img src={image1} alt="CRM Feature 1" style={{ width: '100%' }} /></div>
            <div><img src={image2} alt="CRM Feature 2" style={{ width: '100%' }} /></div>
            <div><img src={image3} alt="CRM Feature 3" style={{ width: '100%' }} /></div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default About