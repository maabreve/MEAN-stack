import App from "./app";

let port = process.env.PORT || '3040';

App.app.listen(port, function () {
  console.log(`Server running in port ${port}`);
});
