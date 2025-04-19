import React, { useState } from "react";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "", // required by your schema
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User added successfully!");
        setFormData({ name: "", email: "", password: "" }); // Clear form
        console.log("Saved user:", data);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error("Failed to add user:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h4 className="text-lg font-bold mb-4">Add Users</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-200 p-2 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-200 p-2 rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
