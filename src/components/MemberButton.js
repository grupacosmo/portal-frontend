import React,{useState,useEffect} from "react";
import {Button} from 'antd';

const MemberButton = (props) =>{
    const [display,setDisplay] = useState("inline")

    useEffect(() => {
        if(props.props.displayNum === props.props.data.length)
        setDisplay("none")

    },[])

    function handleClick(){
        if(props.props.displayNum !== props.props.data.length ) {
            props.props.setFunction(props.props.data.length)
            setDisplay("none")
        }
    }

    return(
        <Button style={{display: display}} size="Large" shape="round" block onClick={handleClick}>Wyświetl wszystkich</Button>
    )
}

export default MemberButton