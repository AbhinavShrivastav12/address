import React from "react";
import "../index.css";

const AddressForm = () => {
  return (
    <form method="POST">
     <div className="form-data">
      <p>Your business details. To update them-just change them.</p>
     <div className="form-input">  <label htmlFor="">Name</label>
       <input type="text" placeholder="Enter the namme" /></div>
      <div className="form-input">
        <label htmlFor="">Address</label>
      <input type="text"  placeholder="Enter your address"/>
      </div>
     <div className="form-input">
       <label htmlFor="">Address 2</label>
      <input type="text" placeholder="Enter your address" />
     </div>
      <div className="post-city">
      <div className="form-input">
          <label htmlFor="">Postcode</label>
        <input type="text"  placeholder="Enter your postalcode"/>
      </div>
      <div className="form-input">
          <label htmlFor="">City</label>
        <input type="text" placeholder="Enter your city" style={{marginLeft: "-55px"}}/>
      </div>
      </div>
    <div className="form-input">
        <label htmlFor="">Our reference</label>
      <input type="text" placeholder="Enter"/>
    </div>
     <div className="form-input">
       <label htmlFor="">Phone</label>
      <input type="text" placeholder="Enter your phone"/>
     </div>
     <div className="form-input">
       <label htmlFor="">Email</label>
      <input type="text" placeholder="Enter your email"/>
     </div>
     <div className="form-input">
       <label htmlFor="">Account no.</label>
      <input type="text" placeholder="Enter account number"/>
     </div>
     <div className="form-input">
       <label htmlFor="">Org. Number</label>
      <input type="text" placeholder="Enter org number"/>
     </div>
      <div className="form-input">
        <label htmlFor="">Homepage</label>
      <input type="text" placeholder="Will not show on invoices if left empty"/>
      </div>
      <p>To change the settings-click settings at the top.</p>
     </div>
    </form>
  );
};

export default AddressForm;
