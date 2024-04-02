import StructureImg from "./StructureImg.jsx";

const StructureTab = () => {
  return (
    <div className='p-2'>
      <h4>Rows</h4>
      <ul className='list-unstyled mx-0'>
        <li className='my-2'>
          <button className='d-flex' style={{width: '100%'}}><StructureImg num={1}/><span
            className='px-2'>One Column</span></button>
        </li>
        <li className='my-2'>
          <button className='d-flex' style={{width: '100%'}}><StructureImg num={2}/> <span
            className='px-2'>Two Columns</span></button>
        </li>
        <li className='my-2'>
          <button className='d-flex' style={{width: '100%'}}><StructureImg num={3}/> <span className='px-2'>Three Columns</span>
          </button>
        </li>
        <li className='my-2'>
          <button className='d-flex' style={{width: '100%'}}><StructureImg num={4}/> <span
            className='px-2'>Four Columns</span></button>
        </li>
      </ul>
      <h4>Stacks <small>(must be placed in columns)</small></h4>
      <ul className='list-unstyled mx-0'>
        <li className='my-2'>
          <button className='d-flex' style={{width: '100%'}}><StructureImg num={2} stack={true} /> <span
            className='px-2'>Two Stack</span></button>
        </li>
        <li className='my-2'>
          <button className='d-flex' style={{width: '100%'}}><StructureImg num={3} stack={true}/> <span className='px-2'>Three Stack</span>
          </button>
        </li>
        <li className='my-2'>
          <button className='d-flex' style={{width: '100%'}}><StructureImg num={4} stack={true}/> <span
            className='px-2'>Four Stack</span></button>
        </li>
      </ul>
    </div>
  )
}

export default StructureTab;
