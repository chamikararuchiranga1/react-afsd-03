import Button from "../../component/Button/Button.jsx";
import {Link, useNavigate} from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Dashboard</h1>
            <Link to={'/home'}>
                <Button name={'Go to Home Page'} bgColor={'purple'}/>
            </Link>
            <br/><br/>
            <Button name={'Go to Home Page'} bgColor={'purple'} onCLick={()=>{navigate('/home')}}/>
        </div>
    )
}
