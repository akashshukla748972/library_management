import { app } from "./app.js";
import { config } from "./configs/globalVariable.js";

const PORT = config.port;
app.listen(PORT, () => {
  console.info(`Server started on http://localhost:${PORT}`);
});
