import { FC } from "react";

interface Props {
    title: string,
    color?: string,
    backgroundColor?: string,
    onCLick: () => void
}

const Button: FC<Props> = (props) => {
    console.log("Btn Props: ", props.color);
    
    return(
        <div style={{
            display: 'flex',
            color: props.color || 'rebeccapurple',
            backgroundColor: props.backgroundColor || 'coral',
            borderRadius: '10px',
            padding: '15px',
            
        }}>
            <button style={{
                display: 'flex',
                color: props.color || 'rebeccapurple',
                backgroundColor: props.backgroundColor || 'coral',
                borderRadius: '10px',
                padding: '15px',
                cursor: 'pointer',
                outline: 'none'
            }} onClick={() => props.onCLick()}>
                {props.title}
            </button>
        </div>
    )
}


export default Button;