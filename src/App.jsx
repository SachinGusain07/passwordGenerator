import { useState, useEffect , useRef , useCallback} from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(4);
  const [number, setNumber] = useState(false);
  const [character ,setCharacter]=useState(false);
  const [password , setpassword]= useState('');
  const ref =useRef();

  
 
 
   const  genpass = ()=>{
   
    

    let arr = ['!','@','#','$','%','^','&','*','(',')','?']
    
   
    if (number){
        let num =  [0,1,2,3,4,5,6,7,8,9];
        arr = arr.concat(num);
    }

    if(character){
      let char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        arr = arr.concat(char);
    }
       let password1 =''
    
    
    for (let i = 0; i < count; i++) {
        password1 += arr[Math.floor(Math.random() * arr.length)];
    }
     setpassword(password1);
    console.log(password1);

  }
  useEffect(()=>{
    genpass()
  }, [count, number, character]);

  const copy =()=>{
    window.navigator.clipboard.writeText(password);
    ref.current?.select();
    
  } 



  return (
    <>
      <div className="container"> 
        <h2>Password Generator</h2>

        
      
      
         <div className="fistPart">
          
         <input type ="text" name ="text" id = "text"  spellCheck="false"  value={password} 
         onChange={(e)=>setpassword(e.target.value)}
         ref ={ref} />
         <button onClick={copy} >Copy</button>

         </div>


         <div className="secondPart">
         <input type = "range" id = "range" name ="range"
         value = {count}
         onChange ={(e)=>{setCount(e.target.value)}}
         />
         <label  htmlFor="range">Length ({count})</label>
         <input type ="checkbox" id ="checkbox1" name ="checkbox1" 
          onChange = {(e)=>{setNumber(e.target.checked)}} />
         <label htmlFor="checkbox1"> Numbers</label>
         <input type = "checkbox" id = "checkbox2" name ="checkbox2"
         onChange = {(e)=>{setCharacter(e.target.checked)}}
         />
         <label htmlFor ="checkbox2"> Chracter</label>
         </div>
       
      
         
      </div>

    </>
  );
}

export default App;
