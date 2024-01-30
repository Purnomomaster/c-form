import axios from 'axios'
import {saveAs } from 'fs'
import './App.css';

function App() {
  const email = ''
  const image = ''
  const data ={email,image}  
  const SubmitForm= async(e)=>{
  e.preventDefault()

  await axios.post(`http://localhost:8000/create`,data)//create pdf next=> get pdf
  .then(()=>
        axios.get(`http://localhost:8000/fetch`,{responseType:'blob'})//to fetch the generated pdf
        .then((res)=>{
          const pdfBlob = new Blob([res.data],{type:'application/pdf'}) 
          saveAs(pdfBlob,'page1.pdf')  //to save we use file saver
          saveAs(pdfBlob,'page2.pdf')  //to save we use file saver
}))
}

  return (
    <div className="App">
      <form onSubmit={SubmitForm}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input name="email" value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputImage" class="form-label">Image</label>
        <input name="image" value={image} type="file" class="form-control" id="exampleInputImage"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}

export default App;
