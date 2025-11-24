import "./style.css";
import { useNavigate } from "react-router-dom";
import bgImage from "./images/image1.jpeg";

function App() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="page-title">
        VVCC Report Card Generator
        <div className="page-subtitle">Professional Swimming Assessment System</div>
      </div>
      
      <section className="hero-section">
        <div className="card-container">
          <div className="card">
            <div onClick={() => navigate("/parent-tot")} className="card-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="content">
              <div onClick={() => navigate("/parent-tot")} className="card-category">Parent & Tot</div>
              <h3 onClick={() => navigate("/parent-tot")} className="card-heading">1-3</h3>
            </div>
          </div>

          <div className="card">
            <div onClick={() => navigate("/preschool")} className="card-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="content">
              <div onClick={() => navigate("/preschool")} className="card-category">Preschool</div>
              <h3 onClick={() => navigate("/preschool")} className="card-heading">1-5</h3>
            </div>
          </div>

          <div className="card">
            <div onClick={() => navigate("/swimmers-1-5")} className="card-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="content">
              <div onClick={() => navigate("/swimmers-1-5")} className="card-category">Swimmer</div>
              <h3 onClick={() => navigate("/swimmers-1-5")} className="card-heading">1-5</h3>
            </div>
          </div>

          <div className="card">
            <div onClick={() => navigate("/swimmers-6-10")} className="card-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="content">
              <div onClick={() => navigate("/swimmers-6-10")} className="card-category">Swimmer</div>
              <h3 onClick={() => navigate("/swimmers-6-10")} className="card-heading">6-10</h3>
            </div>
          </div>

          <div className="card">
            <div onClick={() => navigate("/adult")} className="card-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="content">
              <div onClick={() => navigate("/adult")} className="card-category">Adult</div>
              <h3 onClick={() => navigate("/adult")} className="card-heading">1-3</h3>
            </div>
          </div>

          <div className="card">
            <div onClick={() => navigate("/teen")} className="card-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="content">
              <div onClick={() => navigate("/teen")} className="card-category">Teen</div>
              <h3 onClick={() => navigate("/teen")} className="card-heading">1-3</h3>
            </div>
          </div>
        </div>
      </section>
      
      <div className="footer-credit">
        Developed by Vishal Das
      </div>
    </>
  );
}

export default App;