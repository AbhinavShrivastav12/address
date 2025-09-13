import { useEffect, useState } from "react";
import "../index.css";

const AddressForm = () => {
  const [state, setState] = useState({
    name: "",
    address: "",
    address_second: "",
    postcode: "",
    city: "",
    our_reference: "",
    phone: "",
    email: "",
    acc_number: "",
    org_number: "",
    homepage: "",
  });
  const [isloading, SetIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/address`);
        if (!res.ok) throw new Error("Failed to fetch addresses");
        const data = await res.json();
        setState(data || {}); 
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        SetIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Auto-save on input change
  const handleAuto = async (field, value) => {
    setState((prev) => ({ ...prev, [field]: value })); // update UI immediately
    try {
      await fetch(`${API_URL}/address`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...state, [field]: value }),
      });
    } catch (err) {
      console.error("Auto-save error:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleAuto(name, value);
  };

  if (isloading) return <p>Loading ...........</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <form>
      <div className="form-data">
        <p>Your business details. To update them-just change them.</p>

        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter the namme"
            value={state.name || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="address">Address</label>
          <input
            name="address"
            type="text"
            placeholder="Enter your address"
            value={state.address || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="address_second">Address 2</label>
          <input
            name="address_second"
            type="text"
            placeholder="Enter your address"
            value={state.address_second || ""}
            onChange={handleChange}
          />
        </div>

        <div className="post-city">
          <div className="form-input mobile">
            <label htmlFor="postcode">Postcode</label>
            <input
              name="postcode"
              type="text"
              placeholder="Enter your postalcode"
              value={state.postcode || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="city">City</label>
            <input
              name="city"
              type="text"
              placeholder="Enter your city"
              value={state.city || ""}
              onChange={handleChange}
              className="city"
            />
          </div>
        </div>

        <div className="form-input">
          <label htmlFor="our_reference">Our reference</label>
          <input
            name="our_reference"
            type="text"
            placeholder="Enter"
            value={state.our_reference || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            type="text"
            placeholder="Enter your phone"
            value={state.phone || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={state.email || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="acc_number">Account no.</label>
          <input
            name="acc_number"
            type="text"
            placeholder="Enter account number"
            value={state.acc_number || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="org_number">Org. Number</label>
          <input
            name="org_number"
            type="text"
            placeholder="Enter org number"
            value={state.org_number || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="homepage">Homepage</label>
          <input
            name="homepage"
            type="text"
            placeholder="Will not show on invoices if left empty"
            value={state.homepage || ""}
            onChange={handleChange}
          />
        </div>

        <p>To change the settings-click settings at the top.</p>
      </div>
    </form>
  );
};

export default AddressForm;
