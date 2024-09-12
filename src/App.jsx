import './index.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <h2 className="profile-title">Profil</h2>
      <img
        className="profile-image"
        src="patimura.jpeg"
        alt="patimura"
      />
      <div className="profile-info">
        <h3>Min Yoongi</h3>
        <p>01 april 1930</p>
        <p>jawa barat, indonesia</p>
      </div>
    </div>
  );
};

export default ProfileCard;
