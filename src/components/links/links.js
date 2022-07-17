/* eslint-disable react/no-direct-mutation-state */
import React,{ Component } from 'react';
import { FaApple,FaHome,FaUserAlt,FaFacebookMessenger,FaQuestion,FaHeadset,FaLock,FaSignOutAlt } from 'react-icons/fa';
import './links.css';


class Links extends Component{
    state = {
        links : [
        {id:1,name:"Dashbord",link:"/",class:"active"},
        {id:2,name:"Customer",link:"Customer",class:""},
        {id:3,name:"Message",link:"Message",class:""},
        {id:4,name:"Help",link:"Help",class:""},
        {id:5,name:"Setting",link:"Setting",class:""}
        ,{id:6,name:"Password",link:"Password",class:""}
        ,{id:7,name:"Sign Out",link:"Signout",class:""}
    ]
    }

 selected(id){
        let link=this.state.links .filter((el) =>{
                 return el.id === id ?(
                    el.class = "active",
                    el.name =el.name,
                    el.id=el.id,
                    el.link =el.link
                 ):
                 (
                    el.class = "",
                    el.name =el.name,
                    el.id=el.id,
                    el.link =el.link
                   )
              })
             this.setState({links:link})
             localStorage.setItem("links",JSON.stringify(link));    
    }

   render(){
     let arr =[ <FaHome className='icon'/>,<FaUserAlt className='icon'/>,
                <FaFacebookMessenger className='icon'/>,<FaQuestion className='icon'/>,
                <FaHeadset className='icon'/>,<FaLock className='icon'/>,
                <FaSignOutAlt className='icon'/>
              ];
    console.log(this.state.links);
     let x=-1;    
     this.state.links =JSON.parse(localStorage.getItem("links"));
     const DoLinks= this.state.links.length !== 0 && this.state.links.map(value => 
        x++;
        return(
        <div className='link' key={value.id}>
                <ul>
                    <li className={value.class} onClick={() => this.selected(value.id)}>
                      <a href={value.link}>{arr[x]}  {value.name}</a>
                    </li>
                </ul>
        </div>
        )
    )
      return (
    <div className="links toggler" id='links'>
        <div className='inner'>
         <p className='head' ><FaApple className='icon'/>Brand Name</p>
         {DoLinks}
        </div>
    </div>
  );
}
}
export default Links;

