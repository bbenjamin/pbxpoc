import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Resizable } from 'react-resizable';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FieldTab from "./components/FieldTab.jsx";
import StructureTab from "./components/StructureTab.jsx";
import BespokeTab from "./components/BespokeTab.jsx";
import EditingBar from "./components/EditingBar.jsx";
function App() {
  const [count, setCount] = useState(0)
  const [LSizes, setLSizes] = useState({
    width: 70,
    height: 100,
  });
  const [RSizes, setRSizes] = useState({
    width: 30,
    height: 100,
  });

  const onLeftResize = (event, {node, size, handle}) => {
    // this.setState({width: size.width, height: size.height});
    setLSizes({width: size.width, height: size.height})

  };


//
  return (
    <>
      <div className='d-flex' style={{width: '100vw', minHeight: '100%'}}>
        <Resizable
          height={100}
          width={LSizes.width}
          onResize={onLeftResize}
          resizeHandles={['e']}
          handleClasses={{
          left: "pointer-events-none",
          right: "pointer-events-none",
        }}>
          <div className="box" style={{
            width: LSizes.width + '%',
            height: '130vh',
            border: '1px solid blue',
            backgroundColor: '#fffae9'}}>
            <EditingBar />
            <span>Contents</span>


          </div>
        </Resizable>

        <div className="box" style={{width: 100 - LSizes.width + '%', height: RSizes.height + 'vh'}}>
          <Tabs
            defaultActiveKey="fields"
            className="mb-3"
            >
              <Tab eventKey="fields" title="Fields" className='p-2'>
                <FieldTab />
              </Tab>
              <Tab eventKey="bespoke" title="Content" className='p-2'>
                <BespokeTab />
              </Tab>
              <Tab eventKey="layouts" title="Structure" className='p-2'>
                <StructureTab />
              </Tab>
            </Tabs>
          </div>

      </div>

    </>
  )
}

export default App
