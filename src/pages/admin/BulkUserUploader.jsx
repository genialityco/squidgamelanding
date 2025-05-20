import React, { useState } from "react";
import * as XLSX from "xlsx";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.js";

const BulkUserUploader = () => {
  const [status, setStatus] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    const auth = getAuth(app);

    const results = [];

    for (const row of jsonData) {
      const email = row["Correo electrónico del trabajo"];
      if (email) {
        try {
          await createUserWithEmailAndPassword(auth, email.trim(), "123456");
          results.push({ email, status: "✅ Creado" });
        } catch (error) {
          results.push({ email, status: `❌ Error: ${error.code}` });
        }
      }
    }

    const summary = results.map((r) => `${r.email}: ${r.status}`).join("\n");
    setStatus(summary);
  };

  return (
    <div>
      <h2>Cargar Excel para crear usuarios en Firebase</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <pre style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>{status}</pre>
    </div>
  );
};

export default BulkUserUploader;
