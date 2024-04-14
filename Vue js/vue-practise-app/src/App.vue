<template>
  <insert-data @insert-data="insertData"></insert-data>
  <header>
    <h1>Employee Details</h1>
  </header>
  <section>
    <emp-details
      v-for="employee in employees"
      :key="employee.id"
      :id="employee.id"
      :name="employee.name"
      :email="employee.email"
      :mobileNumber="employee.mobileNumber"
      :salary="employee.salary"
      :isSalaryCredited="employee.isSalaryCredited"
      @sal-credit="salCredited"
      @del-data="deleteData"
    ></emp-details>
  </section>
</template>
<script>
export default {
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "venkatesh",
          email: "venkynunna2001@gmail.com",
          mobileNumber: 6309875788,
          salary: 25000,
          isSalaryCredited: false,
        },
        {
          id: 2,
          name: "Ganesh",
          email: "Ganinunna2003@gmail.com",
          mobileNumber: 9652717037,
          salary: 25000,
          isSalaryCredited: true,
        },
      ],
    };
  },
  methods: {
    salCredited(employeeId) {
      // alert(employeeId);
      const salCredit = this.employees.find((employee) => {
        return employee.id === employeeId;
      });
      salCredit.isSalaryCredited = !salCredit.isSalaryCredited;
    },
    deleteData(employeeId) {
      this.employees = this.employees.filter((employee) => {
        return employee.id !== employeeId;
      });
    },
    insertData(name, email, mobileNumber, salary) {
      const newEmp = {
        id: 3,
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        salary: salary,
        isSalaryCredited: false,
      };
      return this.employees.push(newEmp);
    },
  },
};
</script>
