"use client";
import { useState, type FormEvent } from "react";

export default function Home() {
  const [documents, setDocuments] = useState<string[]>([]);
  const [draft, setDraft] = useState("");

  function addDocument(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (draft.trim() === "") return;

    setDocuments((current) => [...current, draft]);
    setDraft("");
  }

  return (
    <main>
      <form onSubmit={addDocument}>
        <label htmlFor="document">Document title</label>
        <input
          id="document"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        <button type="submit">Add Document</button>
      </form>

      <ul>
        {documents.map((document, index) => (
          <li key={index}>{document}</li>
        ))}
      </ul>
    </main>
  );
}