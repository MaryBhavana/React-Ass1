import './ass1.css';
import React,{useState} from 'react';

const Func = () => {
     const[show,setShow] = useState(false)
    return ( 
        <div>
        <button className='functionb'   onClick={()=>setShow(!show)}>To see styling in Functional component</button>
        {
            show? <div className='function'>
                <h2>This is created using Functional Component</h2>
                <p>This is done using external CSS</p>
                <p style = {{color:'blue'}}>This is done using inline CSS</p>
                </div>

                :
                null
        }
        </div>
     );
}
 
export default Func;