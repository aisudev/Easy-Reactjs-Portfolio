import bg from './assets/bg.mp4'
import Overlay from './component/Overlay';
import Header from './sections/Header';
import Info from './sections/Info';
import Nav from './sections/Nav';
import Skill from './sections/Skill';
import Exp from './sections/Exp'

function App() {
  return (
    <div>
      <Overlay src={bg} autoPlay loop muted />
      <Nav section={['Information', 'Skill', 'Experience', 'Work', 'Contact']} />
      <section>
        <Header/>
      </section>
      <section>
        <Info/>
      </section>
      <section>
        <Skill/>
      </section>
      <section>
        <Exp/>
      </section>
    </div>
  );
}
// #FFFFFF #A0FEAC #49AD47 #074400 #053000
export default App;
