/* Your Code Here */

const createEmployeeRecord = function (employee) {
  // need obj to parse emp data into
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

function createEmployeeRecords(employees) {
  return employees.map((element) => createEmployeeRecord(element));
}

function createTimeInEvent(event) {
  let [date, hour] = event.split(" ");

  console.log(event);
  console.log(this);

  let eventObj = {
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  };

  this.timeInEvents.push(eventObj);
  return this;
}
function createTimeOutEvent(event) {
  let [date, hour] = event.split(" ");

  console.log(event);
  console.log(this);

  let eventObj = {
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  };

  this.timeOutEvents.push(eventObj);
  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date);
  const timeOut = this.timeOutEvents.find(event => event.date === date);

  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  const hours = hoursWorkedOnDate.call(this, date);
  return this.payPerHour * hours;
}

function calculatePayroll(employees) {
   const record = employees.map(employee => allWagesFor.call(employee));

   return record.reduce((currentValue, total) => currentValue + total);
}

function findEmployeeByFirstName(employees, firstNameString) {
  return employees.find((emp) => emp.firstName === firstNameString);
}

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
