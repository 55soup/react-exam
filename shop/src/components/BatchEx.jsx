import { useDeferredValue, useState, useTransition } from "react";

let a = new Array(100).fill(0);

export default function BatchEx(){
    let [name, setName] = useState('');
    // 계산이 오래걸리는 것 성능 향상
    // state에 성능 문제가 있을 때 Transition 사용.
    // 실행시점을 변경해 빨리 반영을 함. 
    let [isPending, startTransition] = useTransition(); 
    let state = useDeferredValue(name); // useDeferredValue : 늦게 처리함
    return(
        <div>
            {name}
           <input onChange={(e)=>{ 
             startTransition(()=>{
                setName(e.target.value)
             })
            }}/> 
           {
            isPending ? "로딩중기다리셈" : // isPending : startTransition() 으로 감싼 코드가 처리중일 때 true로 변하는 변수
            a.map(()=>{
                return <div>{state}</div>
            })
           }
        </div>
    );
}