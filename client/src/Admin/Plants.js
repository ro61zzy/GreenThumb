import React, { useState } from "react";

export default function AdminForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [selectedFile, setSelectedFile] = useState();

  //   const handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     const form = new FormData();
  //     form.append("name", formData.name);
  //     form.append("description", formData.description);
  //     form.append("image", formData.image);
  //     form.append("price", formData.price);
  //     // Call backend API to save data to MongoDB
  //   };

  //   const handleInputChange = (event) => {
  //     const name = event.target.name;
  //     const value =
  //       event.target.type === "file" ? event.target.files[0] : event.target.value;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };
  const handlePlantImage = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  async function uploadPlantImage() {
    const file = selectedFile;
    const form = new FormData();
    form.append("file", file);

    const response = await fetch("http://localhost:4000/api/v1/addPlantImage", {
      method: "POST",
      body: form,
    });
    const data = response.json();
    console.log(data);
    return data.fileUrl;
  }

  async function uploadPlant() {
    const imageUrl = await uploadPlantImage();
    if (imageUrl) {
      const { name, description } = formData;
      console.log(name);
      const response = await fetch("http://localhost:4000/api/v1/addPlant", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, description, imageUrl }),
      });
      const data = response.json();
      console.log(data);
    }
  }

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handlePlantImage}
        />
      </label>
      <br />
      <label>
        Price:
        {/* <input type="text" name="price" value={formData.price} onChange={""} /> */}
      </label>
      <br />
      <button onClick={uploadPlant}>Submit</button>
    </div>
  );
}
