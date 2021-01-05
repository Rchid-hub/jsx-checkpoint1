import './App.css';
import firstimage from './imageInSrc.jpg'
import "./style.css";

function App() {
  return (
    <div>
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
      <h1 className="title red">Rchid Baccouchi</h1>
      <br />
      <img src={firstimage} alt ="firstimg"></img>
      <br />
      <br />
      <img src="/imageInPublic.jpg" alt="secondimg"></img>
    </div>
  {/*just a random video*/}
    <video className="vid" width="320" height="240" controls>
      <source src="Videos/MyVideo.mp4" type="video/mp4"></source>
      </video> 
    </div>

  );
    
  
}

export default App;
