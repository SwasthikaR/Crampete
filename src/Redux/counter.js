import { useDispatch, useSelector } from "react-redux";
import { decreament, increment, selectCount,dynamicAdd,selectVal,dynamicSub } from "./counterReducer";
function Counter(){
    const dispatch = useDispatch();
    const data = useSelector(selectCount);
    const data1 = useSelector(selectVal);
    return(
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <p>{data}</p>
            <button onClick={()=>dispatch(decreament())}>-</button><br></br>
            <button onClick={()=>dispatch(dynamicAdd(5))}>+5</button>
            <p>{data1}</p>
            <button onClick={()=>dispatch(dynamicSub(5))}>-5</button>

        </div>
    )
}

export default Counter;