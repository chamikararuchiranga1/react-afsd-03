import './style.css'

export default function Button ({name, bgColor, onCLick}){

    return(
        <button onClick={()=>onCLick(name)} className='button' style={{backgroundColor: bgColor}}>
            {name}
        </button>
    )
}
