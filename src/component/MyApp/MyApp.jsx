import './style.css';
import Button from '../Button/Button.jsx'
function MyApp (props){

    return(
        <div className={'my-app'}>
            <h1>{props.name}</h1>
            <h2>{props.address}</h2>
            <Button name={"Click me 2"} bgColor={'#4d104a'}/>
        </div>
    )
}

export default MyApp;

export function MyApp1 (props){

    return(
        <div className={'my-app'}>
            <h1>{props.name}</h1>
            <h2>{props.address}</h2>
            <Button name={"Click me 1"} bgColor={'#135b04'}/>
        </div>
    )
}

export function MyApp2 (props){

    return(
        <div className={'my-app'}>
            <h1>{props.name}</h1>
            <h2>{props.address}</h2>
            <div className='content'>
                <Button name={"Click me"} bgColor={'#046449'}/>
            </div>
        </div>
    )
}
