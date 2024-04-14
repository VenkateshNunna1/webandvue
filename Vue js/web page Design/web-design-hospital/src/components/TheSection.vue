<template>
  <article class="section1">
    <section class="sec1">
      <div>
        <img src="../assets/doctor.jpg" alt="" />
      </div>
      <div class="doctor-profile">
        <p class="title">Doctor</p>
        <div class="bio">
          <h3 class="name">Tejinderpal Singh</h3>
          <div class="quali">
            <p class="spec">Speciality</p>
            <p class="surg">Orthopedic Surgeon</p>
          </div>
          <div class="experience">
            <p class="exp">Experience</p>
            <p class="year">10 years</p>
          </div>
        </div>
      </div>
      <div class="patient-profile">
        <p class="title">Patient</p>
        <div class="bio">
          <h2 class="patient-name">John Armar Phil</h2>
          <div class="relation">
            <p class="relation-title">Relation</p>
            <p class="relation-type">Self</p>
          </div>
        </div>
      </div>
    </section>
    <section class="trans">
      <div class="trans-text">
        <p>Transaction Information</p>
        <p>Payment/Non-Payment</p>
      </div>
      <div class="des">
        <div class="id">
          <p class="ti">Transaction ID</p>
          <p class="idnum">123456789</p>
        </div>
        <div class="date">
          <p class="td">Transaction Date</p>
          <p class="date1">09-10-2024</p>
        </div>
        <div class="method">
          <p class="pm">Payment Method</p>
          <p class="credit1">Credit</p>
        </div>
      </div>
      <div class="total">
        <p class="pay">Total Payment</p>
        <p><span>100 </span>MYR</p>
      </div>
    </section>
  </article>
</template>
<script></script>
<style scoped>
.ti,
.td,
.pm {
  font-size: 20px;
}
.method {
  padding-right: 60px;
}
.idnum,
.date1,
.credit1 {
  font-size: 28px;
}
.pay {
  font-size: 24px;
}
span {
  font-size: 25px;
  font-weight: bold;
}

.section1 {
  display: flex;
  gap: 20px;
  font-family: Segoe UI;
}
.des {
  padding-right: 100px;
  padding-left: 25px;
}
.trans {
  background-color: #ffffff;
  border: 1px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  flex: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
}
.trans-text {
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 18px;
}
.id {
  padding-right: 10px;
}
.id,
.date,
.method {
  display: flex;
  justify-content: space-between;
}
.total {
  background-color: #2cc849;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
.sec1 {
  flex: 60%;
  border-radius: 8px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-around;
  padding: 40px 15px 40px 15px;
  font-family: "Segoe UI", sans-serif;
}

.quali,
.experience,
.relation {
  display: flex;
  align-items: center;
}

.spec,
.relation-title {
  margin-right: 10px;
}

.exp {
  margin-right: 10px;
}

img {
  height: 100px;
  width: 100px;
  margin-top: 20px;
}

.title {
  text-align: center;
  color: #b3b3b3;
  margin-bottom: 15px;
}

.bio {
  margin-left: 20px;
  overflow: hidden; /* Hide content overflowing the box */
}
.spec,
.exp,
.relation-title,
.ti,
.td,
.pm,
.idnum,
.date,
.credit1 {
  color: #b3b3b3;
}

.surg,
.year,
.relation-type {
  font-weight: bold;
}
.patient-profile {
  /* Set a max-width or adjust width as needed */
  max-width: 300px;
  overflow: hidden; /* Hide content overflowing the box */
}
.relation-title,
.relation-type {
  /* ... (existing code) */
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden; /* Hide content overflowing the box */
}
@media screen and (max-width: 768px) {
  .section1 {
    flex-direction: column; /* Stack items vertically on small screens */
  }

  .trans {
    flex: 100%; /* Take full width on small screens */
    margin-top: 20px; /* Add some space between the sections */
  }

  .sec1 {
    flex: 100%; /* Take full width on small screens */
    padding: 20px; /* Adjust padding for better spacing on small screens */
  }

  .ti,
  .td,
  .pm {
    font-size: 16px; /* Adjust font size for small screens */
  }
}
</style>
