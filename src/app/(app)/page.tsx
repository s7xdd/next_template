"use client";

import { handleCommonApi } from "@/config/api/common-services";
import useApi from "@/hooks/api/use-api";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", description: "" });

  const { data, triggerRequest } = useApi(() => handleCommonApi("/api/items", "get"), {}, "", true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      triggerRequest();
      setForm({ name: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Item name" value={form.name} onChange={handleChange} />
        <input name="description" placeholder="Item description" value={form.description} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {data &&
          data.map((item) => (
            <li key={item._id}>
              {item.name} - {item.description}
            </li>
          ))}
      </ul>
    </div>
  );
}
