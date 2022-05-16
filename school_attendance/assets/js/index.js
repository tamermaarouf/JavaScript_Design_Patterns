// ------------------------MODEL--------------------------------//
const model = {
  days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  currentStudent: null,
  studentName: [
    {
      name: "Slappy the Frog",
      daysMissed: 0,
    },
    {
      name: "Lilly the Lizard",
      daysMissed: 0,
    },
    {
      name: "Paulrus the Walrus",
      daysMissed: 0,
    },
    {
      name: "Gregory the Goat",
      daysMissed: 0,
    },
    {
      name: "Adam the Anaconda",
      daysMissed: 0,
    },
  ],
};

// ------------------------octopus--------------------------------//

const octopus = {
  init: function () {
    model.currentStudent = model.studentName[0];
    tableHeaderView.init();
    tableBodyView.init();
  },
  getDays: function () {
    return model.days;
  },
  getStudentName: function () {
    return model.studentName;
  },
  setCurrentStudent: function (current) {
    model.currentStudent = current;
  },
  getCurrentStudent: function () {
    return model.currentStudent;
  },
  // increments the counter for the currently-selected student
  incrementdayMissed: function (current) {
    model.currentStudent.daysMissed++;
  },
  // increments the counter for the currently-selected student
  decrementdayMissed: function (current) {
    model.currentStudent.daysMissed--;
  },
};

// ------------------------VIEW--------------------------------//
const tableHeaderView = {
  init: function () {
    this.tableHeader = document.getElementById("table_header");
    this.tableBody = document.getElementById("table_body");
    this.table_row = document.createElement("tr");
    this.table_header_studentName = document.createElement("th");
    this.table_header_studentName_content = document.createTextNode("");
    this.table_header_missed = document.createElement("th");
    this.table_header_missed_content = document.createTextNode("");

    this.getDays = octopus.getDays();
    this.render();
  },
  render: function () {
    this.tableHeader.innerHTML = "";
    this.table_header_studentName_content.textContent = "Student Name";
    this.table_header_studentName.appendChild(
      this.table_header_studentName_content
    );
    this.table_header_studentName.classList.add("name-col");
    this.table_row.appendChild(this.table_header_studentName);
    this.getDays.forEach((day) => {
      this.table_header_day = document.createElement("th");
      this.table_header_day_content = document.createTextNode("");
      this.table_header_day_content.textContent = day;
      this.table_header_day.appendChild(this.table_header_day_content);
      this.table_row.appendChild(this.table_header_day);
    });
    this.table_header_missed_content.textContent = "Days Missed-col";
    this.table_header_missed.appendChild(this.table_header_missed_content);
    this.table_header_missed.classList.add("missed-col");
    this.table_row.appendChild(this.table_header_missed);
    this.tableHeader.appendChild(this.table_row);
  },
};

const tableBodyView = {
  init: function () {
    this.tableBody = document.getElementById("table_body");
    this.getDays = octopus.getDays();
    this.studentNames = octopus.getStudentName();
    this.render();
  },
  render: function () {
    this.studentNames.forEach((studentName) => {
      this.table_row_data = document.createElement("tr");
      this.table_data = document.createElement("td");
      this.table_data_content = document.createTextNode("");
      this.table_data_content.textContent = studentName.name;
      this.table_data.appendChild(this.table_data_content);
      this.table_data.classList.add("name-col");
      this.table_row_data.appendChild(this.table_data);
      this.getDays.forEach((day) => {
        this.table_data_input = document.createElement("td");
        this.table_data_checkbox = document.createElement("input");
        this.table_data_checkbox.type = "checkbox";
        this.table_data_input.appendChild(this.table_data_checkbox);
        this.table_data_input.classList.add("attend-col");
        this.table_row_data.appendChild(this.table_data_input);
        this.table_data_checkbox.addEventListener(
          "change",
          (function (studentNameCopy) {
            return function () {
              // console.log(this.checked);
              if (this.checked) {
                octopus.setCurrentStudent(studentNameCopy);
                octopus.incrementdayMissed(studentNameCopy);
                missedColView.init();
              } else {
                octopus.setCurrentStudent(studentNameCopy);
                octopus.decrementdayMissed(studentNameCopy);
                missedColView.init();
              }
            };
          })(studentName)
        );
      });
      this.table_data_missed = document.createElement("td");
      this.table_data_missed_content = document.createTextNode("");
      this.table_data_missed_content.textContent = studentName.daysMissed;
      this.table_data_missed.appendChild(this.table_data_missed_content);
      this.table_data_missed.classList.add("missed-col");

      this.table_data_missed.setAttribute("data-link", studentName.name);
      this.table_row_data.appendChild(this.table_data_missed);

      this.table_row_data.classList.add("student");
      this.tableBody.appendChild(this.table_row_data);
    });
  },
};

const missedColView = {
  init: function () {
    this.currentStudent = octopus.getCurrentStudent();
    this.tableRow = document.querySelectorAll("[data-link]");
    this.render();
  },
  render: function () {
    this.tableRow.forEach((row) => {
      if (row.dataset.link === this.currentStudent.name) {
        row.textContent = this.currentStudent.daysMissed;
      }
    });
  },
};

// go octopus!
octopus.init();
