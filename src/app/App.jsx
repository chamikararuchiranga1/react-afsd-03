import './App.css';
import MyApp,{MyApp1,MyApp2} from '../component/MyApp/MyApp.jsx';
import Button from '../component/Button/Button.jsx';
import MyCard from '../component/MyCard/MyCard.jsx';
import TextField from "../component/TextField/TextField";
import {useState, useEffect} from "react";
import Dashboard from "../pages/Dashboard/Dashboard.jsx"
import Home from "../pages/Home/Home.jsx"
import { Route, Routes, Navigate} from "react-router-dom"
import Bootstrap from "../pages/Bootstrap/Bootstrap";

function App() {

    const [data, setData] = useState('ACPT');
    const [text, setText] = useState('ACPT');

    useEffect(()=> {
        console.log('start');
    },[data, text]);

  return (
      <div>

          {/*<h1>{data}</h1>*/}
          {/*<br/><br/>*/}
          {/*<Button name={'Add Button'} bgColor={'purple'} onCLick={(val)=> {setData(val)}}/>*/}
          {/*<Button name={'Update'} bgColor={'green'} onCLick={(val)=> {setData(val)}}/>*/}
          {/*<Button name={'Delete'} bgColor={'red'} onCLick={(val)=> {setData(val)}}/>*/}

          {/*    <br/><br/>*/}
          {/*    <TextField type={'text'} placeholder={'Input Name'} onChange={(val)=> console.log(val)}/>*/}
          {/*<br/><br/>*/}
          {/*<MyApp name={'Chamikara Ruchiranga'} address={'Panadura'}/>*/}
          {/*<MyApp1 name={'Yasindu Sathsara'} address={'Aluthgama'}/>*/}
          {/*<MyApp2 name={'Raveen Yasith'} address={'Galle'}/>*/}
          {/*<br/><br/>*/}

          {/*<div style={{display: 'flex'}}>*/}
          {/*        <MyCard*/}
          {/*            bgColor={'#fd4a4a'}*/}
          {/*            title={'Title 1'}*/}
          {/*            content={'Lorem ipsum dolor sit amet, ' +*/}
          {/*                'consectetur adipisicing elit. Accusantium culpa deleniti dolorem ' +*/}
          {/*                'dolorum eius eligendi impedit inventore iure minima nemo, nisi non ' +*/}
          {/*                'numquam quisquam repudiandae voluptas? Doloribus fugiat nemo quod.'}*/}
          {/*            subTitle={'Sub Title 1'}*/}
          {/*        />*/}
          {/*        <MyCard*/}
          {/*            bgColor={'#6bfd4a'}*/}
          {/*            title={'Title 2'}*/}
          {/*            content={'Lorem ipsum dolor sit amet, ' +*/}
          {/*                'consectetur adipisicing elit. Accusantium culpa deleniti dolorem ' +*/}
          {/*                'dolorum eius eligendi impedit inventore iure minima nemo, nisi non ' +*/}
          {/*                'numquam quisquam repudiandae voluptas? Doloribus fugiat nemo quod.'}*/}
          {/*            subTitle={'Sub Title 2'}*/}
          {/*        />*/}
          {/*        <MyCard*/}
          {/*            bgColor={'#4a62fd'}*/}
          {/*            title={'Title 3'}*/}
          {/*            content={'Lorem ipsum dolor sit amet, ' +*/}
          {/*                'consectetur adipisicing elit. Accusantium culpa deleniti dolorem ' +*/}
          {/*                'dolorum eius eligendi impedit inventore iure minima nemo, nisi non ' +*/}
          {/*                'numquam quisquam repudiandae voluptas? Doloribus fugiat nemo quod.'}*/}
          {/*            subTitle={'Sub Title 3'}*/}
          {/*        />*/}
          {/*</div>*/}
          {/*<Dashboard/>*/}
          {/*<Home/>*/}

          <Routes>
              <Route path={"*"} element={<Navigate to={'/bootstrap'}/>}/>
              <Route path={'/dashboard'} element={<Dashboard/>}/>
              <Route path={'/bootstrap'} element={<Bootstrap/>}/>
          </Routes>
      </div>
  )
}

export default App
