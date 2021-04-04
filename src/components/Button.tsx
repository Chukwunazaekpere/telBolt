import { FC } from "react";

interface Props {
    title: string,
    color?: string,
    backgroundColor?: string,
    onCLick: () => void,
    fontSize?: string,
    padding?: string
}

const Button: FC<Props> = (props) => {
    console.log("Btn Props: ", props.color);
    
    return(
        <div style={{
                display: 'flex',
                color: props.color || 'rebeccapurple',
                backgroundColor: props.backgroundColor || 'coral',
                borderRadius: '10px',
                padding: '7px',
            }}>
            <button style={{
                display: 'flex',
                color: props.color || 'rebeccapurple',
                backgroundColor: props.backgroundColor || 'coral',
                borderRadius: '10px',
                padding: props.padding || '15px',
                cursor: 'pointer',
                outline: 'none',
                fontWeight: "bold",
                fontSize: props.fontSize || '15px',
                fontFamily: "Georgia, 'Times New Roman', Times, serif"

                }} onClick={() => props.onCLick()}>
                    {props.title}
            </button>
        </div>
    )
}


export default Button;