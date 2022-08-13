import React from 'react';
import { DoctorPreviewInterface } from '../../interfaces/doctor-interface';
import './doctor-preview.css';

export 

function DoctorPreview(props: DoctorPreviewInterface) {
  return (
    <div className="doctor-preview-container">
        <img src={props.img} alt="" />
        <p>Nombre: {props.name}</p>
        <p>Especialidad: {props.specialty}</p>
        <p>Edad: {props.age}</p>
    </div>
  );
}

export default DoctorPreview;
