import bg from './assets/bg.mp4'
import Overlay from './component/Overlay';
import Header from './sections/Header';
import Info from './sections/Info';
import Nav from './sections/Nav';

function App() {
  return (
    <div>
      <Overlay src={bg} autoPlay loop muted />
      <Nav section={['Information', 'Skill', 'Experience', 'Contact']} />
      <section>
        <Header/>
      </section>
      <section>
        <Info/>
      </section>
    </div>
  );
}
// #FFFFFF #A0FEAC #49AD47 #074400 #053000
export default App;
