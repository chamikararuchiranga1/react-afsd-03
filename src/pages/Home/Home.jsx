import Button from "../../component/Button/Button.jsx";
import {Link, useNavigate} from "react-router-dom"

export default function Home() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Home</h1>
            <Link to={'/dashboard'}>
                <Button name={'Go to Dashboard Page'} bgColor={'purple'}/>
            </Link>
            <br/><br/>
            <Button name={'Go to Dashboard Page'} bgColor={'purple'} onCLick={()=>{navigate('/dashboard')}}/>
        </div>
    )
}
