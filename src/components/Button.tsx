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
            color: props.color || 'rebeccapurple',
            backgroundColor: props.backgroundColor || 'coral',
            width: '3rem',
            height: '2rem'
            
        }}>
            <button onClick={() => props.onCLick()}>
                {props.title}
            </button>
        </div>
    )
}


export default Button;