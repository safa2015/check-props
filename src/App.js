import './App.css';
import Profile from './profile/Profile';
import Photo from './profile/Photo';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const user = [
    {
      fullName: "Safa Eleuchi",
      bio: "Never Losing Hope",
      profession: "Full Stack JS",
    },

  ];
  const handleName = (fullName) => {
    alert(`Profile ${fullName}`)
  }
  return (
    <div style={{ backgroundColor: "#92a8d1", height: "700px" }}>
      <Photo>./img/photoprofile.jpg</Photo>
      {user.map((e, index) => <Profile key={index} handleName={handleName} bio={e.bio} fullName={e.fullName} profession={e.profession} >
      </Profile>
      )
      }

    </div>
  );
}

export default App;
