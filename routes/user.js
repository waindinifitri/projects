//call the middleware here

import { userCOntroller } from "../controllers/user";
import { authentication, authorization } from "../middleware/auth";

app.post("user/register", userCOntroller.register);
app.post("user/login", authentication, authorization, userCOntroller.login);
app.get("user/list", authentication, authorization, userCOntroller.getAllUser);
app.update("user/update/:id", authentication, authorization);
app.delete(
  "user/delete/:id",
  authentication,
  authorization,
  userCOntroller.deleteUser
);

//localhost:3000/user/delete/:id
