const admin = require("firebase-admin");
const XLSX = require("xlsx");
const fs = require("fs");

// Carga tu clave privada
const serviceAccount = require("./calamar2-firebase-adminsdk-fbsvc-36415957ba.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const workbook = XLSX.readFile("Listado de la conveción - 27 de mayo 2025.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);

(async () => {
  for (const row of data) {
    const email = row["correo"];
    if (email) {
      try {
        await admin.auth().createUser({
          email: email.trim(),
          password: "123456",
        });
        console.log(`✅ Usuario creado: ${email}`);
      } catch (error) {
        if (error.code === "auth/email-already-exists") {
          console.log(`🟡 Ya existe: ${email}`);
        } else {
          console.log(`❌ Error con ${email}: ${error.message}`);
        }
      }
    }
  }
})();
