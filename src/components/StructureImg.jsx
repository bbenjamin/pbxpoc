// eslint-disable-next-line react/prop-types
const StructureImg = ({num , stack}) => {

  const rowsColumnsImg = () => (<div style={{width: '60px', height: '40px', backgroundColor: '#000', marginInline: 0}} className='container'>
    <div className='row'>
      {
        Array.from(
          { length: num },
          (item, index) => <div key={index} className='col card' style={{backgroundColor: '#FFFFFF', borderColor: '#000', height: '40px'}}>&nbsp;</div>
        )
      }
    </div>
  </div>)

  const stackImg = () => (<div style={{width: '60px', height: '60px', backgroundColor: '#000', marginInline: 0}} className='container'>
      {
        Array.from(
          { length: num },
          (item, index) => <div key={index} className='row card' style={{backgroundColor: '#d77777', borderColor: '#000', height: `${60/num}px`}}>&nbsp;</div>
        )
      }
  </div>)

  return stack ? stackImg() : rowsColumnsImg();
}

export default StructureImg;
