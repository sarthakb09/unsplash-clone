//import logo from './logo.svg';
import './App.css';
import React,{useState}  from 'react';

function App() {
  const [text, setText] = useState('')
  const[results,setResults] = useState([])
  //w_wraTKMiBVc6si1Yb5lTT11fNsOKgJReCYS9v5Ambc
  const fetchApi = ()=>{
  fetch(`https://api.unsplash.com/search/photos?client_id=w_wraTKMiBVc6si1Yb5lTT11fNsOKgJReCYS9v5Ambc&query=${text}&orientation=squarish&per_page=12`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setResults(data.results)
    console.log(results)
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <span>Unsplash</span>
        <input className='input' type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>fetchApi()}>send</button>
      </div>
      <div className='photos'>
        {
          results.map((item)=>{
            return <img className='image' key={item.id} src={item.urls.regular}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
