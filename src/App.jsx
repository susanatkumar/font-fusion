
import './App.css'
import './index.css'

function App() {

  const textColor= (colorName)=>{
    document.getElementById('text').style.color=colorName
  }

  const textBg= (colorName)=>{
    document.getElementById('text').style.backgroundColor=colorName
  }

  return (
    <>
      <center>
        <h1>Font Fusion</h1>
        <div className='main'>
          <div className='l-main'>
            <h2 contentEditable="true" id="text">Write Any thing....</h2>
            <button>Download</button>
          </div>

          <div className='r-main'>

            <div>Choose your Bg color
              <button onClick={()=>{textBg('red')}} style={{ backgroundColor: 'red' }}>click me</button>
              <button onClick={()=>{textBg('green')}} style={{ backgroundColor: 'green' }}>click me</button>
              <button onClick={()=>{textBg('blue')}} style={{ backgroundColor: 'blue' }}>click me</button>
              <button onClick={()=>{textBg('yellow')}} style={{ backgroundColor: 'yellow' }}>click me</button>
              <button onClick={()=>{textBg('black')}} style={{ backgroundColor: 'black' }}>click me</button>
              <br />
              <input type='color'></input>
            </div>

            <div>Choose your text color
              <button onClick={()=>{textColor('red')}} style={{ backgroundColor: 'red' }}>click me</button>
              <button onClick={()=>{textColor('green')}} style={{ backgroundColor: 'green' }}>click me</button>
              <button onClick={()=>{textColor('blue')}} style={{ backgroundColor: 'blue' }}>click me</button>
              <button onClick={()=>{textColor('yellow')}} style={{ backgroundColor: 'yellow' }}>click me</button>
              <button onClick={()=>{textColor('black')}} style={{ backgroundColor: 'black' }}>click me</button>
              <br />
              <input type='color'></input>
            </div>

          </div>
        </div>
      </center>
    </>
  )
}

export default App
