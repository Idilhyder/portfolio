import Card from "./components/general-ui/Card";
import Buttons from "./layout/Buttons";
import Layout from "./layout/Layout";
import classes from './layout/Layout.module.css'

function App() {
  function timer() {}
  return (
    <Layout>
      <h1>Idil Hyder</h1>
      <Card>
        <p>This site is under construction...</p>
        <div>
          <img className = {classes.image} src="https://w0.peakpx.com/wallpaper/97/819/HD-wallpaper-man-silhouette-snow-winter-void.jpg" alt="winter-void" />
        </div>

        <div>{timer}</div>

        <h2>Web3 - Full Stack - ReactJS - NodeJS - IRL Products</h2>
        <Buttons>
          <button>View My Work</button>
          <button>Buy My Work</button>
        </Buttons>
      </Card>
    </Layout>
  );
}

export default App;
