import mobileDevicesQuestions from "./Subjects/mobileDevices";
import networkingQuestions from "./Subjects/networking";

const subjects = [
  {
    subject: "Mobile Devices",
    questions: mobileDevicesQuestions,
  },
  {
    subject: "Networking",
    questions: networkingQuestions,
  },
  {
    subject: "Science",
    questions: [
      {
        question: "What planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        explanation: "Mars is known as the Red Planet.",
      },
      {
        question: "What is the chemical symbol for water?",
        choices: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O",
        explanation: "H2O is the chemical symbol for water.",
      },
    ],
  },
];

export default subjects;
