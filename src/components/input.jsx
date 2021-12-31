

export const Limits=({getValues})=>{
    
    let init=0;
    let fin=0;
    const getFinal=(e)=>{
        fin=e.target.value;
    }
    const getInitial=(e)=>{
       init=e.target.value;
    }
    const getValue=()=>{
        getValues(init,fin);
    }
    return <div>
         <input type="text" name="time" id="initial" placeholder="Enter starting time" onChange={getInitial}/>
         <input type="text" name="time" id="final" placeholder="Enter ending time" onChange={getFinal}/>
         <button onClick={getValue}>Start Timer</button>
    </div>
}