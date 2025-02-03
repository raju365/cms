const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1 - Update Software",
        description: "Update the software on all company computers.",
        date: "2024-12-05",
        category: "Software",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        title: "Task 2 - Attend Meeting",
        description: "Attend the project kick-off meeting.",
        date: "2024-12-06",
        category: "Meeting",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1 - Prepare Report",
        description: "Prepare the monthly sales report.",
        date: "2024-12-06",
        category: "Report",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        title: "Task 2 - Client Call",
        description: "Call the client to discuss project progress.",
        date: "2024-12-07",
        category: "Call",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1 - System Maintenance",
        description: "Perform system maintenance and backups.",
        date: "2024-12-08",
        category: "Maintenance",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        title: "Task 2 - Design New Feature",
        description: "Design a new feature for the product.",
        date: "2024-12-09",
        category: "Design",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
      {
        title: "Task 3 - Team Training",
        description: "Conduct a training session for new team members.",
        date: "2024-12-10",
        category: "Training",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1 - Review Code",
        description: "Review the code written by the team for the new feature.",
        date: "2024-12-05",
        category: "Code Review",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        title: "Task 2 - Bug Fixing",
        description: "Fix the bugs reported by users in the application.",
        date: "2024-12-06",
        category: "Bug Fixing",
        active: true,
        newTask: false,
        complete: false,
        failed: true,
      },
      {
        title: "Task 3 - Documentation Update",
        description: "Update the software documentation for the new version.",
        date: "2024-12-07",
        category: "Documentation",
        active: true,
        newTask: false,
        complete: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1 - Marketing Campaign",
        description: "Launch a new marketing campaign for the product.",
        date: "2024-12-05",
        category: "Marketing",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        title: "Task 2 - Website Redesign",
        description: "Redesign the company website to improve user experience.",
        date: "2024-12-06",
        category: "Website",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
      {
        title: "Task 3 - Email Newsletter",
        description: "Prepare and send the monthly email newsletter.",
        date: "2024-12-07",
        category: "Newsletter",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem("employees"));
//   const admin = JSON.parse(localStorage.getItem("admin"));
//   return { employees, admin };
// };
