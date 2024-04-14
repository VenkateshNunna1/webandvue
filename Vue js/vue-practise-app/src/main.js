import { createApp } from "vue";
import App from "./App.vue";
import EmployeeDetails from "./components/EmployeeDetails.vue";
import EmployeeeInserted from "./components/EmployeeeInserted";
const app = createApp(App);
app.component("emp-details", EmployeeDetails);
app.component("insert-data", EmployeeeInserted);
app.mount("#app");
