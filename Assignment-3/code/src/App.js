import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<"
var arrowclose=">"
function App() {
  const person = {
    name:"Alan Ford",
    id: "00005152"
  }
  const customerInfo = {
    AppointmentTime: "9:00",
    AppointmentDate: "24-05-2016",
    email: "alan.form@gmail.com",
    phone: "+31123456789"
  }
  const orderInfo = {
    status:"In progress",
    door:"Mark",
    time:"10:30",
    date: "25-05-2016"
  }
  const productList = {
    title: "Boltaart Bosbessen",
    description: "overheek Boltaart met Bosbessen Uit de Keuken Van de Bijenkorf",
    productImage: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  return (
    <div className="site-container">
    {/* Start Your code here */}
        <div className = "person">
      <div>
      <div className="arrow">
        <b>{arrow}</b>
        </div>
        <div>
        <b>{person.name}</b>
        </div>
        <div>
        <button><b>Print</b></button>
        </div>
        </div>
        <div className="personid">
        {person.id}
        </div>
        </div>
      <div className = "customer-info">
          <p><strong>Appointment On:  </strong>{customerInfo.AppointmentTime} ({customerInfo.AppointmentDate})</p>
          <p><strong>Email:  </strong>{customerInfo.email} </p>
          <p><strong>Phone:  </strong>{customerInfo.phone}</p>
      </div>
      <div className = "order-info">
        <div className='col'>
          <h4><strong>Status </strong></h4>
          <ul>
            <li>{orderInfo.status}</li>
          </ul>
        </div>
        <div className='col'>
        <h4><strong>Door </strong></h4>
          <p>{orderInfo.door}</p>
        </div>
        <div className='col'>
        <h4><strong>Time </strong></h4>
          <p>{orderInfo.time} ({orderInfo.date})</p>
        </div>
      </div>
      <div className = "product-list">
      <input type="checkbox" ></input>
        <img src={productList.productImage} alt='cannot load product image'/>
        <div className='productDescription'>
        <h4>{productList.title}</h4>
        <p className='productdescription'>{productList.description}</p>
        </div>
        <b className='arrowclose'>{arrowclose}</b>
      </div>
    </div>
  );
}

export default App;
