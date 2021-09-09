// import logo from './logo.svg';
// import './App.css';
import bg1 from "./img/bg1.jpg";
import bg3 from "./img/bg3.jpg";
import HeaderBlock from './components/HeaderBlock';
import FooterBlock from './components/FooterBlock';
import LayoutBlock from './components/LayoutBlock';
const App= () =>{
  return(
    <>
    <HeaderBlock title="It is title of header" descr="It is description of header" />
    <LayoutBlock title="It is title of 1 layout" descr="It is description of 1 layout"  urlBg={bg1}  />
    <LayoutBlock title="It is title of 2 layout" descr="It is description of 2 layout"   colorBg='red' />
    <LayoutBlock title="It is title of 3 layout" descr="It is description of 3 layout"  urlBg={bg3}  />
    <FooterBlock />
    </>
  );
}
export default App;
