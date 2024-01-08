"use client"; // this form have state and client interaction so making it client component

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const ticket = {
      title,
      body,
      priority,
      user_email: "user@example.dev",
    };
    const response = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });
    if (response.status === 201) {
      // router.refresh to show new ticket on tickets page if not showing on adding
      // this refresh will reduce the calling of get tickets on tickets page.
      router.refresh()
      router.push("/tickets");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label htmlFor="title">
        <span>Title:</span>
        <input
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label htmlFor="body">
        <span>Body:</span>
        <input
          type="text"
          name="body"
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label htmlFor="priority">
        <span>Priority:</span>
        <select
          name="priority"
          required
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </label>
      <button type="submit" className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}
