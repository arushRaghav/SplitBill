import { useState } from "react"

export default function Circle(){

    const [posi , setPosi] = useState({
        x:0,
        y:0
    })

    return <div style = {{
        backgroundColor:"yellow", 
        height:'20px', 
        width:'20px',
        position:'absolute',
        borderRadius: '50%',
        boxShadow: '0px 0px 20px red',
        translate: `${posi.x}px ${posi.y}px`

    }}>
    {
        window.addEventListener('mousemove', e => {
            e.preventDefault();
            setPosi({
                x:e.clientX,
                y:e.clientY
            })
        })
    }

    </div>
}