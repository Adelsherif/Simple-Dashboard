import React,{ Component } from 'react';
//import [image1,image2,image3] from ['./customer-01.jpg' , './customer-02.jpg','./customer-03.jpg'];
import './recent.css';


class Recent extends Component{
       state = {
        orders:[
            {name:"Star refrigerator",price:`$${1200}`,payment:"Paid",status:"Delivered"},
            {name:"Window Coolers",price:`$${110}`,payment:"Due",status:"Pending"},
            {name:"Speaker",price:`$${620}`,payment:"Paid",status:"Return"},
            {name:"Hp Laptoop",price:`$${110}`,payment:"Due",status:"InProgress"},
            {name:"Apple watch",price:`$${1200}`,payment:"Paid",status:"Delivered"},
            {name:"Star refrigerator",price:`$${1200}`,payment:"Paid",status:"Delivered"},
            {name:"Window Coolers",price:`$${110}`,payment:"Due",status:"Pending"},
            {name:"Speaker",price:`$${620}`,payment:"Paid",status:"Return"},
            {name:"Hp Laptoop",price:`$${110}`,payment:"Due",status:"InProgress"},
            {name:"Apple watch",price:`$${1200}`,payment:"Paid",status:"Delivered"},
            {name:"Speaker",price:`$${620}`,payment:"Paid",status:"Return"},
            ],
        customers:[
            {image:require('./customer-01.jpg'),name:"David",countery:"Italy"},
            {image:require('./customer-02.jpg'),name:"Muhammed",countery:"India"},
            {image:require('./customer-03.jpg'),name:"Amelia",countery:"France"},
            {image:require('./customer-01.jpg'),name:"Olivia",countery:"USA"},
            {image:require('./customer-02.jpg'),name:"Amit",countery:"japan"},
            {image:require('./customer-03.jpg'),name:"Ashraf",countery:"India"},
            {image:require('./customer-01.jpg'),name:"Diana",countery:"Malaysia"},
            {image:require('./customer-02.jpg'),name:"Amit",countery:"India"},
        ]
       }
   render(){
    let Orders = this.state.orders.map(order =>{
        return(
        <div className='order' key={Math.random()}>
            <div className='name' style={{width:"30%"}}>
               {order.name}
            </div>
            <div className='price' style={{width:"20%"}}>
                {order.price}
            </div>
            <div className='pay' style={{width:"20%"}}>
                {order.payment}
            </div>
            <div  style={{width:"20%"}} id="status">
                <div className={order.status} id='inner'>
                {order.status}
                </div>
            </div>
        </div>
        )
    })
   let Customers = this.state.customers.map(customer =>{
    return(
    <div className='customer' key={Math.random()}>
        <div className='image'>
           <img  src={customer.image} alt="image" />
        </div>
        <div className='information'>
            <div><h6>{customer.name}</h6></div>
            <div><span> {customer.countery}</span></div>
        </div>
    </div>
    )
   })
return (
    <div className="recent">
       <div className='orders'>
         <div className='text'>
            <h3>Recent Orders</h3>
         </div>
         <div className='head'>
            <h5 style={{width:"30%"}}>Name</h5>
            <h5 style={{width:"20%"}}>Price</h5>
            <h5 style={{width:"20%"}}>Payment</h5>
            <h5 style={{width:"20%"}}>Status</h5>
         </div>
         {Orders}
       </div>
       <div className='customers'>
       <div className='text'>
            <h3>Recent Customers</h3>
         </div>
         {Customers}
        </div>
    </div>
  );
}
}

export default Recent;

