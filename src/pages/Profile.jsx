import React, { useContext, useState } from "react";
import { $api, BASE_URL } from "../utils";
export default function Profile() {
  const profile = JSON.parse(localStorage.getItem('user'));
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    avatar: null,
  });



  const [preview, setPreview] = useState( BASE_URL + '/' + profile.avatar || null);

  // Input maydonlarining qiymatini yangilash
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Rasm yuklash funksiyasi
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, avatar: file });
      setPreview(URL.createObjectURL(file)); // Rasmni oldindan ko‘rsatish
    }
  };

  // Formni yuborish
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("password", formData.password);
    if (formData.avatar) {
      formDataToSend.append("avatar", formData.avatar);
    }

    try {
      const response = await $api.patch("/auth/profile-update", formDataToSend);
      console.log(response)
      alert(response.data?.response?.message);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile Update</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"

            value={formData.name || profile.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password }
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Avatar
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full mt-1"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-24 h-24 rounded-full object-cover"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}