import React, { useState, useEffect } from 'react';
import DoctorPreview from '../components/doctor-preview/doctor-preview';
import { DoctorPreviewInterface } from '../interfaces/doctor-interface';
import './landing-page.css';

function LandingPage() {

  const [doctor, setDoctors] = useState(Array<DoctorPreviewInterface>);
  useEffect(() => {
    setDoctors([{
      id: 1,
      age: 30,
      img: 'https://i.pravatar.cc/300',
      name: 'Fabian',
      specialty: 'General'
    },
    {
      id: 2,
      age: 30,
      img: 'https://i.pravatar.cc/300',
      name: 'Marta',
      specialty: 'Psiquiatra'
    }])
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
