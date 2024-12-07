import React, { useState } from 'react';
import FooterMenu from './FooterMenu';
import '../styles/perfil.css';


const Perfil = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [bio, setBio] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [privacy, setPrivacy] = useState('public');

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const handlePrivacyChange = (event) => {
    setPrivacy(event.target.value);
  };


  const handleSave = () => {
    console.log('Profile saved:', {
      profilePic,
      bio,
      birthDate,
      privacy,
    });
    
  };

  return (

    <><div className="perfil-container">

      <h2> Personalizar perfil </h2>

      <div className="profile-pic-section">
        {profilePic ? (
          <img src={profilePic} alt="Profile" className="profile-pic" />
        ) : (
          <div className="profile-pic-placeholder"> Foto de perfil </div>
        )}
        <input type="file" onChange={handleProfilePicChange} />
      </div>

      <div className="bio-section">
        <h3> Biografia </h3>
        <textarea
          value={bio}
          onChange={handleBioChange}
          placeholder="Escreva sua biografia aqui" />
      </div>
     

      <button onClick={handleSave} className="save-button"> Salvar </button>
    </div><FooterMenu /></>

  );
};

export default Perfil;