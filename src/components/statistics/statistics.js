import React from 'react';
import { FaEye,FaComment,FaMoneyBill,FaCartPlus } from 'react-icons/fa';
import './statistics.css';



function Statistics(){
   
  return (
    <div className="statistics">
       <div className='statis'>
        <div className='text'>
            <h1>1,645</h1>
            <p>Daliy views </p>
            </div>
            <div className='iconbody'>
                 <FaEye />
           </div></div>
       <div className='statis'>
       <div className='text'>
            <h1>80</h1>
            <p>Sales </p>
            </div>
            <div className='iconbody'>
              <FaCartPlus />
           </div>
       </div>
       <div className='statis'>
       <div className='text'>
            <h1>468</h1>
            <p>Comments </p>
            </div>
            <div className='iconbody'>
                <FaComment />
           </div>
       </div>
       <div className='statis'>
       <div className='text'>
            <h1>1,155 $</h1>
            <p>Earning </p>
            </div>
            <div className='iconbody'>
               <FaMoneyBill />
           </div>
       </div>
    </div>
  );
}


export default Statistics;

