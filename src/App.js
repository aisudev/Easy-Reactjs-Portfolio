import bg from './assets/bg.mp4'
import Overlay from './component/Overlay';
import Header from './sections/Header';
import Info from './sections/Info';
import Nav from './sections/Nav';
import Skill from './sections/Skill';
import Exp from './sections/Exp'
import Work from './sections/Work'

function App() {
  return (
    <div
      style={{
        scrollBehavior:'smooth'
      }}
    >
      <Overlay src={bg} autoPlay loop muted />
      <Nav section={['Information', 'Skill', 'Experience', 'Work', 'Contact']} />
      <section id="Header" >
        <Header/>
      </section >
      <section id="Information">
        <Info/>
      </section>
      <section id="Skill">
        <Skill/>
      </section>
      <section id="Experience">
        <Exp/>
      </section>
      <section id="Work">
        <Work/>
      </section>
    </div>
  );
}
// #FFFFFF #A0FEAC #49AD47 #074400 #053000
export default App;
