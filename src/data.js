import mobileDevicesQuestions from "./Subjects/mobileDevices";
import networkingQuestions from "./Subjects/networking";
import hardwareQuestions from "./Subjects/hardware";
import virtualizationAndCloudComputingQuestions from "./Subjects/virtualizationAndCloudComputing";
import hardwareAndNetworkTroubleshootingQuestions from "./Subjects/hardwareAndNetworkTroubleshooting";
import operatingSystemsQuestions from "./Subjects/operatingSystems";
import securityQuestions from "./Subjects/security";
import softwareTroubleshootingQuestions from "./Subjects/softwareTroubleshooting";
import operationalProceduresQuestions from "./Subjects/operationalProcedures";

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
    subject: "Hardware",
    questions: hardwareQuestions,
  },
  {
    subject: "Virtualization and Cloud Computing",
    questions: virtualizationAndCloudComputingQuestions,
  },
  {
    subject: "Hardware and Network Troubleshooting",
    questions: hardwareAndNetworkTroubleshootingQuestions,
  },
  {
    subject: "Operating Systems",
    questions: operatingSystemsQuestions,
  },
  {
    subject: "Security",
    questions: securityQuestions,
  },
  {
    subject: "Software Troubleshooting",
    questions: softwareTroubleshootingQuestions,
  },
  {
    subject: "Operational Procedures",
    questions: operationalProceduresQuestions,
  },
  // {
  //   subject: "Science",
  //   questions: [
  //     {
  //       question: "What planet is known as the Red Planet?",
  //       choices: ["Earth", "Mars", "Jupiter", "Venus"],
  //       answer: "Mars",
  //       explanation: "Mars is known as the Red Planet.",
  //     },
  //     {
  //       question: "What is the chemical symbol for water?",
  //       choices: ["O2", "H2O", "CO2", "NaCl"],
  //       answer: "H2O",
  //       explanation: "H2O is the chemical symbol for water.",
  //     },
  //   ],
  // },
];

export default subjects;
