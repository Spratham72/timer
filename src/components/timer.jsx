import { useState } from "react";
import { useEffect } from "react";
import {Limits} from './input';
export const Timer=()=>{
   
    const [initialTime, setTime]=useState(0);
    const [finalTime, setFinal]=useState(0);
    
    const value=(a,b)=>{
        setTime(+a);
        setFinal(+b);
    }
    useEffect(()=>{
            const id=setInterval(()=>{
                
                return setTime((p)=>{
                    if(finalTime===p){
                        clearInterval(id);
                        return p;
                    }
                    return p+1;
                })

            },1000)
        return ()=>{
            clearInterval(id);
        }
    },[finalTime]);
   
    return <>
        <Limits getValues={value}/>
        <h3>{initialTime}</h3>
    </>
}