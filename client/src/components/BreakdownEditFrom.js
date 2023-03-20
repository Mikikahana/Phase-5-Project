import { useEffect, useState } from "react";


function BreakdownEditForm({ breakdown }) {
  const [name, setName] = useState(breakdown.name);
  const [phoneNumber, setPhoneNumber] = useState(breakdown.phone_number);
  const [address, setAddress] = useState(breakdown.address);
  const [image, setImage] = useState(breakdown.image);
  const [description, setDescription] = useState(breakdown.description);
  const [carType, setCarType] = useState(breakdown.car_type);

  function handleSubmit(event) {
    event.preventDefault();
    // Send the updated breakdown data to the server
    // ...
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Car Type:
        <input
          type="text"
          value={carType}
          onChange={(event) => setCarType(event.target.value)}
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
}
export default BreakdownEditForm