import { app } from "./app.js";
import { connectDB } from "./configs/db.js";
import { config } from "./configs/globalVariable.js";

connectDB();
const PORT = config.port;
app.listen(PORT, () => {
  console.info(`Server started on http://localhost:${PORT}`);
});
