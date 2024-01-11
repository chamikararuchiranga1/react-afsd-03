import './style.css';
import Button from "../Button/Button.jsx";


export default function MyCard({title, subTitle, bgColor, content}){
    return(
        <div className='card'>
            <h2 className='title' style={{backgroundColor: bgColor}}>{title}</h2>
            <h3>{subTitle}</h3>
            <div>
                <p className='content'>{content}</p>
            </div>
            <Button name={'Add Button'} bgColor={'purple'}/>
        </div>
    )
}
