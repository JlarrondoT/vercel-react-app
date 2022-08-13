import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DoctorPreview from '../components/doctor-preview/doctor-preview';
import { DoctorPreviewInterface } from '../interfaces/doctor-interface';
import './landing-page.css';

function LandingPage() {

  const [doctor, setDoctors] = useState(Array<DoctorPreviewInterface>);
  useEffect(() => {
    axios.get('http://localhost:5000/doctors').then((response) => {
      setDoctors(response.data)
    });
  }, [])


  return (
    <div className="landing-container">
        <p>Lista de doctores</p>
        <div className='doctors-container'>
          {doctor.map((d)=> <DoctorPreview age={d.age} id={d.id} img={d.img+'?img='+d.id} name={d.name} specialty={d.specialty}/>)}
        </div>
    </div>
  );
}

export default LandingPage;
