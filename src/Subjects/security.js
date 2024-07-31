const securityQuestions = [
  {
    question: "What does an authenticator application do?",
    choices: [
      "Generates single-use passcodes.",
      "Removes the need for password authentication.",
      "Validates only the simple login credentials of a user.",
      "Ensures the codes are valid forever.",
    ],
    answer: "",
    explanation:
      "Explanation: An authenticator application generates key values, or codes, that users must enter to gain access to their accounts. These codes can be valid for varying time periods and offer an additional layer of security beyond simple login credentials.",
  },
  {
    question: "What is Low-level formatting?",
    choices: [
      "A process that overwrites all of the bits on the disk with zeroes.",
      "A type of software, which is generally available for free, writes over all data on a device with strings of gibberish (or junk data) several times.",
      "A process of recycling or repurposing storage devices.",
      "A function to undelete files from a storage device.",
    ],
    answer: "",
    explanation:
      "Explanation: Low-level formatting, also known as physical formatting or zero-fill, overwrites all the bits on a disk with zeroes. It can be used to prepare a new disk for use or to completely erase a disk, ensuring the data cannot be addressed.",
  },
  {
    question:
      "In the context of physical security programs for staff, what do the policies often define?",
    choices: [
      "The lunch breaks and holidays",
      "The penalty for late staff",
      "The control mechanisms, methods, and devices that are used to implement a policy\u2019s restrictions",
      "The tasks and roles of each employee",
    ],
    answer: "",
    explanation:
      "Explanation: In the context of physical security, policies are often designed to define who is and isn\u2019t authorized to enter a facility and to describe the control mechanisms, methods, and devices that are used to effect these restrictions.",
  },
  {
    question: "What is the process of Spoofing in terms of network security?",
    choices: [
      "It is the process of protecting data by placing information into your packets.",
      "It is the process of pretending to be someone or something you are not by placing false information into your packets.",
      "It is the process of intruding a network system by destroying its core security system.",
      "It is the process of securing a network by putting up firewalls to protect data.",
    ],
    answer: "",
    explanation:
      "Explanation: Spoofing essentially involves masquerading as a different user or system by falsely inputting information such as user name, MAC, IP, email, or web address into data packets. This is done in order to deceive other systems or users into enabling the attack.",
  },
  {
    question:
      "What is the process to allow a particular application to pass through Windows Defender Firewall?",
    choices: [
      "Access the Firewall & Network Protection page, search for the application and modify its settings",
      "Manually enter the application name in the Firewall settings",
      "Use the Browse button to locate the application, then enter it into the Firewall white list",
      "Go to \u2019Allow Another App\u2019 and search for the application directly",
    ],
    answer: "",
    explanation:
      "Explanation: The correct process is to access the Firewall & Network Protection page, search for the application and modify its settings. This allows you to modify settings for the app such as network it\u2019s allowed on and save the changes.",
  },
  {
    question:
      "Which platform includes a native antivirus and anti-malware protection?",
    choices: ["iOS", "Android", "Windows 10/11 mobile", "None of the above"],
    answer: "",
    explanation:
      "Explanation: According to the text, only Windows 10/11 mobile devices have the Windows Defender application as a native app for antivirus and anti-malware protection. This implies that iOS and Android do not come with native antivirus or anti-malware applications, but such tools can be downloaded from various major security software providers.",
  },
  {
    question:
      "How can you disable the Guest Account in Windows to minimize security risks?",
    choices: [
      "Go to My Network Places | Properties",
      "Go to Local Policies | Security Options and change Guest Account Status to Disabled",
      "Directly right-click the Guest Account and select Disable",
      "Go to User Accounts and change the status of Guest Account to Disabled",
    ],
    answer: "",
    explanation:
      "Explanation: According to the text, to prevent the Guest account from being a security risk, it should be disabled by going to Local Policies | Security Options, double-clicking Accounts: Guest Account Status, and setting it to Disabled.",
  },
  {
    question: "What is the first line of defense against shoulder surfing?",
    choices: ["Screen filters", "User education", "Privacy", "Firewalls"],
    answer: "",
    explanation:
      "Explanation: Privacy is the first line of defense against shoulder surfing, this can involve simply preventing others from seeing your screen or keyboard as you\u2019re inputting sensitive information.",
  },
  {
    question:
      "What does the \u2019Notify me only when apps try to make changes to my computer (default)\u2019 option do in User Account Control (UAC) settings on a Windows 10/11 system?",
    choices: [
      "It never displays a notification for any changes made.",
      "It gives warnings only in the event of a change to a system setting or resource by an application and asks for a response before the system can resume operations.",
      "It always sends a notification for any changes, including trusted Windows settings.",
      "It continues to run processes in the background without dimming the Desktop.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Notify me only when apps try to make changes to my computer (default)\u2019 option in UAC settings of a Windows 10/11 system warns the user only when an application is attempting to make a change to the system. It pauses the system operations until the user has responded to this warning.",
  },
  {
    question:
      "What is one of the purposes of a software firewall like Windows Defender Firewall?",
    choices: [
      "To speed up your computer\u2019s boot time",
      "To prevent malware attacks originating from the network or the internet",
      "To manage your computer\u2019s power supply",
      "To optimize your hard drive space",
    ],
    answer: "",
    explanation:
      "Explanation: The text states that Software firewalls, like Windows Defender Firewall, serve the purpose of blocking malware attacks from the network or internet. This protection is a primary security feature of these types of firewalls.",
  },
  {
    question:
      "What is the function of the \u2019Active mode\u2019 in the Defender antivirus tool?",
    choices: [
      "It disables all actions, and no files are scanned.",
      "It scans files, reports threats, but leaves the remediation to other software.",
      "It is the primary antivirus tool of the Windows OSs, scans files for threats, and reports the found attacks",
      "It allows manual download of the latest definitions from Microsoft.",
    ],
    answer: "",
    explanation:
      "Explanation: In the \u2019Active mode\u2019, the Defender antivirus acts as the primary antivirus tool for the Windows Operating Systems. It actively scans files for any viruses, malware, and threats. Any attacks or threats found are reported to the organization\u2019s security information and retained in the data kept by the Windows Security application.",
  },
  {
    question:
      "What does AES employ to create a multilayered cipher text that is impossible to crack?",
    choices: [
      "Asymmetric key algorithm",
      "Substitution permutation network (SPN) algorithm",
      "Quantum computing",
      "Elliptic Curve Cryptography (ECC)",
    ],
    answer: "",
    explanation:
      "Explanation: AES employs Substitution Permutation Network (SPN) algorithm to create a multi-layered ciphertext that till date has been impossible to crack.",
  },
  {
    question:
      "What are the primary vulnerability types created by Bring-your-own-device (BYOD) policies?",
    choices: [
      "Data deletion and software crashes",
      "Data leakage and malware infections",
      "Password hijacking and user lockouts",
      "Network slow down and application interruptions",
    ],
    answer: "",
    explanation:
      "Explanation: The primary vulnerability types created by BYOD are data leakage and malware infections.",
  },
  {
    question:
      "Which of the following is the default profile for new network connections in Windows firewall and is initially the most secure of the three location profiles?",
    choices: [
      "Domain network",
      "Private network",
      "Public network",
      "Workgroup network",
    ],
    answer: "",
    explanation:
      "Explanation: The public network profile is the default profile for new network connections. It is initially the most secure of the three available profiles in Windows Defender Firewall, as it assumes that a public network isn\u2019t secure.",
  },
  {
    question:
      "What is the reason for the Windows 10/11 File Explorer to hide system files and folders by default?",
    choices: [
      "To save space",
      "To protect against a standard user accidentally or purposefully changing or erasing these files",
      "To enhance the system speed",
      "To prevent virus attacks",
    ],
    answer: "",
    explanation:
      "Explanation: By default, Windows 10 and 11 hide system files and folders to prevent accidental or purposeful modification or deletion by users.",
  },
  {
    question:
      "What is the primary function of a firewall in a home or SOHO network?",
    choices: [
      "To examine the efficiency of data packets",
      "To block or allow incoming traffic that isn\u2019t a response to outgoing traffic",
      "To enhance the speed of data transmission",
      "To allow all incoming and outgoing traffic without examination",
    ],
    answer: "",
    explanation:
      "Explanation: A firewall protects a network by using stateful packet inspection (SPI) to examine individual packets and block or allow incoming traffic that isn\u2019t a response to outgoing traffic. Its main goal is to protect the network from outside threats.",
  },
  {
    question:
      "Which of the following statements about the configuration and settings of a router in a home or SOHO network is correct?",
    choices: [
      "All SOHO networks have a specific device called a router.",
      "Home networks have become primarily wired.",
      "SOHO networks have remained solely wired.",
      "Home networks have become primarily wireless while SOHO networks may be wired or include wireless devices.",
    ],
    answer: "",
    explanation:
      "Explanation: Home networks were noted as being primarily wireless, while SOHO (Small Office/Home Office) networks may be wired or include wireless devices.",
  },
  {
    question: "What benefits does Single Sign-On (SSO) provide to a user?",
    choices: [
      "It permits access to multiple applications by using more than one username and password combination",
      "It eliminates the need for the user to have a separate local account for every computer they wish to access.",
      "It restricts a single Windows account to log on to any system in a domain.",
      "It allows all users to access all machines on a domain without a username or password.",
    ],
    answer: "",
    explanation:
      "Explanation: Single Sign-On (SSO) allows a user to access multiple applications or resources using a single username and password combination. It eliminates the need for a separate local account for each computer the user wishes to access.",
  },
  {
    question: "What is a whaling attack in the context of cybersecurity?",
    choices: [
      "It\u2019s an attack where a hacker tries to gain access to a network by pretending to be a low-level company employee",
      "It\u2019s an attack where a hacker targets a high-ranking individual within a company by pretending to be someone of similar rank",
      "It\u2019s an attack where a whale species is used as a code name for a dangerous virus",
      "It\u2019s an attack where a company uses phishing techniques to compete against other businesses",
    ],
    answer: "",
    explanation:
      "Explanation: In a whaling attack, the attacker, often posing as a high-ranked person, targets a senior-level employee within a company with the goal of misleading the victim into disclosing sensitive information, granting access to an internal network, or transferring money.",
  },
  {
    question:
      "What is implied when an Operating System (OS) has reached end-of-life (EOL) status?",
    choices: [
      "The OS will get upgraded with new features",
      "The provider will issue all the updates, fixes, and patches",
      "Any discovered bugs or flaws will not be corrected by the provider",
      "The OS will get enhanced security",
    ],
    answer: "",
    explanation:
      "Explanation: When an OS is declared end-of-life (EOL) by the provider, it signifies cessation of all updates, patches, and fixes. Consequently, any bugs or vulnerabilities discovered post the EOL declaration will remain unaddressed, potentially introducing a security loophole.",
  },
  {
    question:
      "What are the benefits of having security guards even if your organization uses badge readers, key fobs, or smart cards?",
    choices: [
      "They can program the biometric door locks",
      "They eliminate the need of any physical locks",
      "They provide an extra level of security and deterrence",
      "They enforce Group Policy settings",
    ],
    answer: "",
    explanation:
      "Explanation: While badge readers, key fobs, or smart cards can control access, security guards add an additional human layer of security and deterrent to potential threats.",
  },
  {
    question: "What is tailgating in the context of IT security?",
    choices: [
      "Unauthorized person using an authorized user\u2019s computer when they are away",
      "Unauthorized person entering a secure facility by physically sharing space with an authorized individual",
      "Unauthorized person gaining access to a network by riding on a valid user\u2019s connection",
      "Unauthorized person stealing package deliveries left at the facility entrance",
    ],
    answer: "",
    explanation:
      "Explanation: Tailgating, or piggybacking, is a social engineering breach physically. It happens when an unauthorized individual enters a secured facility by physically sharing a space with an authorized individual.",
  },
  {
    question:
      "Which of the following options is NOT a function of the recovery mode on a Windows 10/11 system?",
    choices: [
      "Removing an OS update",
      "Reinstalling the OS",
      "Improving device performance",
      "Using the Startup Repair function",
    ],
    answer: "",
    explanation:
      "Explanation: While recovery mode on a Windows 10/11 system indeed enables operations such as removing an OS update, reinstalling the OS, and using the Startup Repair function, it does not offer capabilities to improve device performance. That aspect is more accurately related to device maintenance and resource management, not system recovery.",
  },
  {
    question: "Where can content filtering feature be added?",
    choices: [
      "Client level",
      "Network level",
      "Through a web-based service",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: Content filtering can be done at both the client and network level. Additionally, a web-based service, such as Windows Family, can be used or a proxy server or a router can be configured with this feature.",
  },
  {
    question: "What is the primary function of Data destruction software?",
    choices: [
      "It prepares a new disk by setting up the sectors and tracks.",
      "It writes over all data on a device with various strings of data.",
      "It overwrites all of the bits on the disk with zeroes.",
      "It uninstalls unnecessary software from the device.",
    ],
    answer: "",
    explanation:
      "Explanation: Data destruction software, also known as hard drive eraser software or drive wiping software, writes over all data on a device with strings of gibberish (or junk data) several times. This process completely obliterates any data that originally existed on the device.",
  },
  {
    question:
      "Why is it important to change the default Service Set Identifier (SSID) on an Access Point (AP)?",
    choices: [
      "Because the SSID can reveal the manufacturer and model of the AP to potential attackers",
      "Because default SSIDs are difficult to remember",
      "Because multiple APs cannot have the same SSID",
      "Because the default SSID can interfere with network connections",
    ],
    answer: "",
    explanation:
      "Explanation: The SSID of an AP can provide clues to potential attackers about its manufacturer and model. This could help attackers exploit known vulnerabilities in the AP hardware. Hence, changing the default SSID is recommended to secure the network.",
  },
  {
    question:
      "Which of the following actions can trigger the initial infection of a virus?",
    choices: [
      "Installing an application",
      "Copying a file",
      "Opening an infected file",
      "Cleaning the computer",
    ],
    answer: "",
    explanation:
      "Explanation: Viruses can be triggered by user actions such as opening infected files. This allows the virus to execute, copy itself into other executables or data files, and begin its process of damage or theft.",
  },
  {
    question:
      "What tasks are performed when a fingerprint or palm print scan is conducted in biometric security systems?",
    choices: [
      "Captures an image and matches it against pre-scanned images of the same hand or finger",
      "Analyzes the structure of the cheek bones",
      "Captures the pattern of the retina and iris parts of a person\u2019s eye",
      "Records the person\u2019s voice",
    ],
    answer: "",
    explanation:
      "Explanation: The text mentions that hand or finger biometric technology performs two tasks: capturing an image of a section of a finger or a palm to record its characteristics, and determining if the pattern of the characteristics matches the pre-scanned and stored captures of the same hand or finger.",
  },
  {
    question:
      "What are the three primary considerations when selecting a security fence to enclose a secured facility?",
    choices: [
      "Can it be climbed? Can it be painted? What color is it?",
      "How much does it cost? Can it be penetrated? What material is it made from?",
      "Can it be climbed? Can it be penetrated? How much does it cost?",
      "What is its height? Can it be easily seen through? How much does it cost?",
    ],
    answer: "",
    explanation:
      "Explanation: The text mentions that the three primary considerations for a security fence are: whether it can be climbed, whether it can be penetrated, and the cost.",
  },
  {
    question:
      "What does BitLocker Drive Encryption do in Windows 10/11 Pro and Enterprise editions?",
    choices: [
      "It allows you to double-click the BitLocker Drive Encryption icon",
      "It enables you to encrypt removable media",
      "It encrypts the whole drive, including every user\u2019s files",
      "It validates on boot that the computer has not changed",
    ],
    answer: "",
    explanation:
      "Explanation: BitLocker Drive Encryption, a feature in Windows 10/11 Pro and Enterprise editions, encrypts the whole drive, including every user\u2019s files, to enhance security.",
  },
  {
    question:
      "What is the function of a Photo-sensor in a motion sensor system?",
    choices: [
      "It uses ultrasonic waves to detect movement",
      "It absorbs heat emitted by bodies",
      "It triggers an event when a light beam is interrupted",
      "It emits microwave pulses that are reflected back to the device",
    ],
    answer: "",
    explanation:
      "Explanation: Photo-sensors in motion sensor systems use a light beam and triggers an event if the beam is interrupted. They can be used to detect entry or exit through a doorway or an area, or for safety reasons, such as with a garage door opener.",
  },
  {
    question:
      "Why can policies and procedures relating to mobile devices be more complex than those for other types of computing devices?",
    choices: [
      "Because mobile devices usually have less processing power",
      "Because of questions regarding device ownership and management",
      "Because mobile devices are usually more expensive",
      "Because mobile devices lack security features",
    ],
    answer: "",
    explanation:
      "Explanation: The complexity in mobile device policies and procedures arises from determining who owns and manages the device. It could either be the user or the organization.",
  },
  {
    question:
      "Where do you need to go to enable account lockout duration or to set an account lockout threshold?",
    choices: [
      "Security Settings | Account Properties | Account Lockout Policy",
      "Account Settings | Security Policies | Account Lockout Policy",
      "Account Settings | Account Policies | Account Lockout Policy",
      "Security Settings | Account Policies | Account Lockout Policy",
    ],
    answer: "",
    explanation:
      "Explanation: According to the text, to enable lockout duration or to set an account lockout threshold, you need to go to Security Settings | Account Policies | Account Lockout Policy.",
  },
  {
    question: "What does an eye scan in a biometric system capture?",
    choices: [
      "It captures the image of the face",
      "It captures the pattern of the retina and iris parts of a person\u2019s eye",
      "It captures the veins in the hands",
      "It captures the shape of the eyes, nose, mouth, lips, chin, and jaws",
    ],
    answer: "",
    explanation:
      "Explanation: In a biometric system, an eye scan, which could also be termed a retina scan, captures the pattern of the retina and iris \u2013 areas of a person\u2019s eye. The pattern is formed by blood vessels in the eye and is as unique as a person\u2019s fingerprint.",
  },
  {
    question:
      "Which of the following is a recommended practice for ensuring the security of end user accounts, data, and resources?",
    choices: [
      "Use the same password for all accounts",
      "Use a unique password for each account",
      "Share your password with trusted friends",
      "Use easy-to-remember passwords like \u2019123456\u2019",
    ],
    answer: "",
    explanation:
      "Explanation: Using a unique password for each account can help to ensure the security of your account, data, and resources. This is because even if one password is compromised, other accounts remain secure.",
  },
  {
    question:
      "What are the benefits of keeping a router\u2019s firmware up to date?",
    choices: [
      "Fixes bugs and adds new features",
      "Decreases the security functions of the router",
      "The router loses its automatic firmware update feature",
      "The router\u2019s performance decreases",
    ],
    answer: "",
    explanation:
      "Explanation: The firmware updates for a router usually helps in fixing bugs, adding new features, and enhancing the security functions, improving the overall performance of the router.",
  },
  {
    question:
      "Which of the following is an example of the \u2019Something you have\u2019 factor used in a multifactor authentication (MFA) scheme?",
    choices: [
      "Remembered code or phrase",
      "GPS reading",
      "Iris details",
      "Bank card",
    ],
    answer: "",
    explanation:
      "Explanation: In the context of multifactor authentication, \u2019Something you have\u2019 refers to a physical device in the possession of the user that provides a security, account, or user ID code. A bank card, a key fob, or a badge are examples of this.",
  },
  {
    question: "What does a passive sensor do in a motion detection system?",
    choices: [
      "Emits ultrasonic waves to detect movement",
      "Absorbs heat emitted by bodies entering its monitored range",
      "Breaks a magnetic connection to trigger an alarm",
      "Uses light beam and triggers an event if the beam is interrupted",
    ],
    answer: "",
    explanation:
      "Explanation: A passive sensor, as described in the text, absorbs the heat emitted from bodies entering its monitored range.",
  },
  {
    question:
      "What is the specific functionality of Defender Antivirus in Passive Mode?",
    choices: [
      "It scans for viruses and performs remediation",
      "It doesn\u2019t scan for viruses but reports threats to Windows Security",
      "It works in the background, scanning for viruses and reports threats to Windows Security, but doesn\u2019t perform any remediation",
      "It disables all antivirus actions and reports no data",
    ],
    answer: "",
    explanation:
      "Explanation: In Passive mode, Defender antivirus operates behind other antivirus software. It scans files, and any detected malware or threats are reported to the organization\u2019s security information and to Windows Security. However, Defender antivirus does not perform any remediation in this mode, leaving that task to the primary antivirus application.",
  },
  {
    question:
      "Which of the following could potentially become a threat on a computer system?",
    choices: [
      "Regular system updates",
      "Strongly encrypted passwords",
      "Insecure data and information",
      "Secure firewalls and internetworking devices",
    ],
    answer: "",
    explanation:
      "Explanation: Insecure data and information can become a threat on a computer system as they present a possible vulnerability that can be exploited.",
  },
  {
    question:
      "What happens when the \u2019Never notify\u2019 setting is active in the User Account Control (UAC) of a Windows 10/11 system?",
    choices: [
      "UAC will always display a notification for any changes, including trusted Windows settings.",
      "UAC will display the challenge/warning box only when an application attempts to make a change to a system setting or resource.",
      "UAC will continue operating but won\u2019t dim the Desktop.",
      "No notice or warning is given for any changes.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Never notify\u2019 option, if selected in UAC settings, will not provide any notification or warning for any changes being made to the system, including trusted Windows settings and when an application tries to make changes.",
  },
  {
    question:
      "Which setting in the Local Security Policy app would you adjust to ensure passwords aren\u2019t stored with reversible encryption?",
    choices: [
      "Enforce password history",
      "Maximum password age",
      "Store passwords using reversible encryption",
      "Password must meet complexity requirements",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Store passwords using reversible encryption\u2019 setting handles whether or not a password is saved in a way that could potentially be exposed by an attacker using advanced methods. Keeping this setting disabled ensures that passwords aren\u2019t stored with reversible encryption.",
  },
  {
    question:
      "What is the length of a pre-shared key (PSK) used in a WPA2 protocol?",
    choices: [
      "1 to 20 characters",
      "5 to 35 characters",
      "8 to 63 characters",
      "10 to 100 characters",
    ],
    answer: "",
    explanation:
      "Explanation: In WI-Fi Protected Access 2 (WAP2) protocol, a Pre-Shared Key (PSK) is a very long series of alphanumeric characters and can be 8 to 63 characters in length.",
  },
  {
    question:
      "What is the difference between a Windows AD domain-based group policy and the Local Group Policy Editor?",
    choices: [
      "The Windows AD domain-based group policy applies to several systems, while the Local Group Policy Editor applies only to the local machine.",
      "The Windows AD domain-based group policy can only be used in a workgroup, while the Local Group Policy Editor can be used in a domain.",
      "The Windows AD domain-based group policy prohibits a user from editing the Registry, while the Local Group Policy Editor allows it.",
      "The Windows AD domain-based group policy can only be used on servers, while the Local Group Policy Editor can only be used on clients.",
    ],
    answer: "",
    explanation:
      "Explanation: The Windows AD domain-based group policy is used to apply settings to many systems at once by configuring the group policy on the server and pushing it out through login scripts. On the other hand, the Local Group Policy Editor is used to apply granular settings to the local machine only.",
  },
  {
    question:
      "According to the text, which of the following factors are important to consider when physically placing a router in a wireless network?",
    choices: [
      "Accessibility by unauthorized individuals",
      "Proximity to noisy devices which emit strong electromagnetic interference",
      "Proximity to RF transmitters such as TV or radio transmitters",
      "The color and design of the router",
    ],
    answer: "",
    explanation:
      "Explanation: The text states that radio frequency and electromagnetic interference is an important consideration when physically placing a wireless router. This can come from nearby wireless networks, RF transmitters, or noisy devices that emit strong electromagnetic interference.",
  },
  {
    question:
      "Which three user account types are created by default when the Windows OS is installed?",
    choices: [
      "Administrator, Standard & Guest",
      "Local, Microsoft & Power",
      "Administrator, Local & Microsoft",
      "Power, Standard & Microsoft",
    ],
    answer: "",
    explanation:
      "Explanation: When the Windows OS is installed, it creates three user account types by default: a standard user, a guest account, and an administrator account.",
  },
  {
    question:
      "What is the purpose of a certificate of destruction within an organization?",
    choices: [
      "To prove that data was destroyed in accordance with industry or government regulations",
      "To prove that the organization has the ability to recover destroyed data",
      "To certify that the organization has performed a recycling process",
      "To certify that an organization has properly stored confidential data",
    ],
    answer: "",
    explanation:
      "Explanation: A certificate of destruction provides evidence that the organization has destroyed data in accordance with applicable industry or government requirements. This includes confidential information about clients, customers, or applicants.",
  },
  {
    question:
      "Which Login/Sign-in option for a Windows 10/11 system makes use of a hardware device like a USB key?",
    choices: [
      "Windows Hello Face",
      "Windows Hello PIN",
      "Security Key",
      "Password",
    ],
    answer: "",
    explanation:
      "Explanation: The Security Key option uses a hardware device such as a USB key that substitutes for the entry of a username and password. This method is secure because even when the security key is lost or stolen, the attacker would need to know the PIN or have the user\u2019s fingerprint to gain access.",
  },
  {
    question:
      "What are some of the complexity requirements for setting a password according to the Local Security Policy app?",
    choices: [
      "The password must contain the user\u2019s full name",
      "The password can be less than six characters in length",
      "The password can contain the account\u2019s username",
      "The characters in a password must include at least three of the following four categories: uppercase alphabetic characters, lowercase alphabetic characters, digits, and special characters",
    ],
    answer: "",
    explanation:
      "Explanation: The Local Security Policy app requires that passwords meet a minimum complexity requirement, including: they cannot contain a username or any part of the user\u2019s name, they must be at least six characters long, and they have to contain characters from at least three of these categories: uppercase letters, lowercase letters, numbers, and special characters.",
  },
  {
    question:
      "What methods are commonly used for authentication on wireless networks?",
    choices: [
      "Single-factor authentication",
      "RADIUS, TACACS+, or multiple-factor authentication processes",
      "Password-only authentication",
      "Manual user identification",
    ],
    answer: "",
    explanation:
      "Explanation: RADIUS and TACACS+ are authentication protocols often used in wireless networks. Multiple-factor authentication processes are also commonly used in this context, as they offer additional layers of security beyond a simple password.",
  },
  {
    question:
      "What does the \u2019Remote Wipe\u2019 capability do that can help protect personal data?",
    choices: [
      "Allows to remotely turn off the device",
      "Enables a user to physically wipe the device",
      "Manages the device from a remote location",
      "Erases the data on the device to prevent unauthorized access",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Remote Wipe\u2019 capability is a security measure that allows the owner to erase all the data on the device, if it is lost or stolen, to prevent unauthorized access to personal data.",
  },
  {
    question:
      "Which tool, usually contained in most anti-malware packages, can detect unwanted or dangerous e-mail and senders and then quarantine or destroy detected messages?",
    choices: [
      "User training",
      "Secure e-mail gateway (SEG)",
      "Spam filter",
      "Encryption",
    ],
    answer: "",
    explanation:
      "Explanation: A Spam filter is a tool that is usually contained in most anti-malware packages. This tool can detect unwanted or dangerous email and then quarantine or destroy those detected messages based on its configuration.",
  },
  {
    question:
      "Which storage media can be rendered unrecoverable by using a shredder?",
    choices: [
      "Hard drives, flash drives, and magnetic tapes",
      "Power supplies",
      "Motherboards and memory boards",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: Shredding can render hard drives, flash drives, and magnetic tapes useless and the data unrecoverable. Some certified data destruction firms even offer services to shred these devices.",
  },
  {
    question: "What does CompTIA mean by password best practices?",
    choices: [
      "Enforcing policies that allow easy passwords",
      "Setting up open password policies",
      "Enforcing policies that increase the chances of successful attacks",
      "Setting up password policies that reduce the likelihood that attacks against password-protected resources will succeed.",
    ],
    answer: "",
    explanation:
      "Explanation: From the text, it\u2019s clear CompTIA means that by setting up stringent password policies that reduce the chances of successful attacks, you follow the best practices for passwords. It\u2019s about having policies that protect user accounts and other password-protected resources from being compromised.",
  },
  {
    question:
      "What does the term \u2019Login timeout\u2019 refer to in the context of security practices?",
    choices: [
      "Enabling a screensaver with a timeout setting after a short period of inactivity",
      "Enabling system logout after the system idles for an extended period",
      "Securing laptop or notebook PCs in a stationary location using a cable lock",
      "Using a unique password for each Microsoft account and other applications or websites",
    ],
    answer: "",
    explanation:
      "Explanation: In the context of computer security practices, \u2019Login timeout\u2019 refers to setting an automatic system logout when the system has been idle for a prolonged period. This is a measure to ensure that in case a user forgets to log out, the system automatically does so after a predetermined period of inactivity, preventing unauthorized access.",
  },
  {
    question:
      "What is a \u2019Contactless\u2019 hard token as used in a MFA procedure?",
    choices: [
      "A device that is physically inserted into a token reader",
      "A token that generates a one-time access code without being physically inserted into a reader",
      "A proximity device that uses Bluetooth or an RF signal to pass codes to the security system",
      "A device that requires physical contact to transfer security codes",
    ],
    answer: "",
    explanation:
      "Explanation: A Contactless hard token is a proximity device that uses Bluetooth or RF signals to pass security or authenticated codes to a security system. It does not require physical contact or to be inserted into a reader.",
  },
  {
    question:
      "What is the focus of logical security in the context of CompTIA A+ Core 2 objectives?",
    choices: [
      "Physical security measures",
      "AAA model (authentication, authorization, and accounting)",
      "Repairing hardware components",
      "Network topology design",
    ],
    answer: "",
    explanation:
      "Explanation: The text specifies that logical security in the context of CompTIA A+ Core 2 objectives focuses on the application of the AAA model, which includes authentication, authorization and accounting. This approach helps protect programming and data stored on computing equipment.",
  },
  {
    question: "What modes can the Defender antivirus be configured into?",
    choices: [
      "Active, Passive, Disabled",
      "Active, Passive, Enabled",
      "Active, Passive, Sleep",
      "Active, Passive, Offline",
    ],
    answer: "",
    explanation:
      "Explanation: The Defender antivirus can be configured into three modes: Active mode, Passive mode, and Disabled mode. Active mode makes Defender the primary antivirus tool of the Windows OSs. Passive mode allows Defender to work in the background behind other antivirus software. Disabled mode means that no actions take place, no files are scanned, and no remediation takes place.",
  },
  {
    question:
      "What does the principle of least privilege state in terms of logical security and access control?",
    choices: [
      "Users should be given as many permissions as possible",
      "Users are not assigned any permissions and rights",
      "The permissions and rights assigned to a user account should be no higher than those needed by the user to perform their assigned tasks",
      "All users should have equal permissions and rights",
    ],
    answer: "",
    explanation:
      "Explanation: The principle of least privilege states that a user should only be given the permissions and rights required to perform their assigned tasks. This limits their access to only the resources necessary for them to carry out their job, thus increasing security.",
  },
  {
    question:
      "Which encryption method is applied to Windows 10/11 mobile devices for storage and removable storage?",
    choices: [
      "Full device encryption",
      "Gilster\u2019s Law",
      "BitLocker or BitLocker To Go",
      "Android Encryption",
    ],
    answer: "",
    explanation:
      "Explanation: Windows 10/11 mobile devices use BitLocker or BitLocker To Go to encrypt storage and removable storage, respectively.",
  },
  {
    question: "What does a brute-force attack attempt to discover?",
    choices: [
      "System clock speed",
      "Set of instructions for a CPU",
      "Passwords, open ports, network IDs, IP addresses, or user names",
      "Firewall settings",
    ],
    answer: "",
    explanation:
      "Explanation: According to the text, a brute-force approach is often used to discover various kinds of useful information through exhaustive and rapid attempts. This includes passwords, open ports, network IDs, IP addresses, or user names.",
  },
  {
    question:
      "What should be considered while placing a router in a wireless network to mitigate signal path obstructions?",
    choices: [
      "Accessibility by unauthorized individuals",
      "Proximity to RF transmitters",
      "Placement near heavy wooden objects",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: For a wireless network, it is important to consider the physical location of the router or access point. Obstructions in the signal path, such as metal cabinets, mirrors, thick walls, ceilings, and heavy wooden objects, can impede the radio frequency (RF) signals. Connectivity may also be affected by nearby wireless networks using the same frequency or channel, RF transmitters (like TV or radio transmitters), and other devices that emit strong electromagnetic interference (EMI). Therefore, all of these factors should be considered when installing a wireless network.",
  },
  {
    question:
      "What is an example of \u2019Something you know\u2019 in a multifactor authentication (MFA) scheme?",
    choices: ["A key fob", "A fingerprint", "A GPS reading", "A passcode"],
    answer: "",
    explanation:
      "Explanation: In a multifactor authentication (MFA) scheme, \u2019Something you know\u2019 is represented by a remembered code or phrase. This could be a passcode or an answer to a security question.",
  },
  {
    question: "What is an Organizational Unit (OU) in Active Directory?",
    choices: [
      "A single user within a domain",
      "An Active Directory container that holds users, groups, and computers",
      "A domain that manages multiple computers",
      "A policy that is applicable to a particular group",
    ],
    answer: "",
    explanation:
      "Explanation: An Organizational Unit (OU) is defined as an Active Directory container that holds users, groups, and computers. An OU can be used to organize members of a department, have its own group policies and have its own administrator.",
  },
  {
    question:
      "What are some of the benefits of reinstalling the OS on a system?",
    choices: [
      "Improved system performance",
      "Elimination of malware",
      "Accumulation of junk files",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: All provided options are benefits of a clean installation. It improves system performance by eliminating unnecessary disk files that slow the drive down. It also helps in the elimination of malware accumulated unknowingly by the user. Junk files that pile up over an extended time of use are as well eliminated.",
  },
  {
    question: "How do anti-malware programs detect polymorphic malware?",
    choices: [
      "By comparing the drive\u2019s boot sector to a standard boot sector",
      "Through actively scanning for lurking malware",
      "By computing and storing a checksum from the contents of each executable file",
      "By comparing files against a library of signatures",
    ],
    answer: "",
    explanation:
      "Explanation: The text mentions that anti-malware programs detect polymorphic malware, which changes its signature to evade detection, by computing and storing a checksum from the contents of each executable file. Every time a program runs, the anti-malware software calculates a new checksum to see if the executable has changed.",
  },
  {
    question:
      "What is the function of a Magnetic sensor in a home or small office setup?",
    choices: [
      "It emits ultrasonic waves and an alarm is triggered when the wave pattern is disturbed.",
      "It absorbs heat emitted by bodies entering its monitored range.",
      "It breaks a magnetic connection to trigger an event.",
      "It uses a light beam and triggers an event if the beam is interrupted.",
    ],
    answer: "",
    explanation:
      "Explanation: A magnetic sensor is a contact sensor, typically used on windows and doors. An event is triggered when the contact sensor\u2019s magnetic connection is broken.",
  },
  {
    question:
      "What is the impact of not arranging IP filtering rules in a logical order?",
    choices: [
      "Increased network traffic",
      "Degradation of network speed",
      "Address may be denied that are supposed to be allowable",
      "Failure of the router or firewall",
    ],
    answer: "",
    explanation:
      "Explanation: If the rules for IP filtering are not in a logical order, an address that is supposed to be allowable could be denied. This could happen, for example, if a \u2019deny all\u2019 rule is placed before the rule that allows the address.",
  },
  {
    question:
      "What does the \u2019Minimum password age\u2019 setting define in a Windows 10/11 system\u2019s strong password policy?",
    choices: [
      "The maximum number of days a password must be used before it can be changed",
      "The minimum number of unique passwords that must be associated with a user account",
      "The minimum length requirement for any new password",
      "The minimum number of days that a password must be used before it can be changed again",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Minimum password age\u2019 setting dictates the minimum number of days that a password must be used before it can be changed again. If the value is set to 0, a user can change their password whenever they want.",
  },
  {
    question:
      "What is the correct order of steps to open the UEFI interface on a Windows 10/11 system?",
    choices: [
      "Open Settings, click Update & Security, Click Recovery, Restart Now, Choose an Option, Troubleshoot, Advanced Options, UEFI Firmware Settings, Restart.",
      "Open Settings, click Recovery, Restart Now, Choose an Option, Troubleshoot, Advanced Options, UEFI Firmware Settings, Restart.",
      "Open Settings, click Update & Security, Click Advanced Options, Choose Troubleshoot, Click Recovery, Restart Now, UEFI Firmware Settings, Restart.",
      "Open Settings, click UEFI Firmware Settings, Choose Troubleshoot, Click Recovery, Restart Now, Choose an Option, Advanced Options, Restart.",
    ],
    answer: "",
    explanation:
      "Explanation: The correct sequence is to first open \u2019Settings\u2019, then click \u2019Update & Security\u2019, followed by \u2019Recovery\u2019. Next, clicking \u2019Restart Now\u2019 takes you to the \u2019Choose an Option\u2019 screen. From there, you should navigate to \u2019Troubleshoot\u2019, then \u2019Advanced Options\u2019, then \u2019UEFI Firmware Settings\u2019 and finally, \u2019Restart\u2019. This will reboot the PC into the UEFI interface where you can set an administrator password.",
  },
  {
    question:
      "What is a common function of using pattern locks on smartphones?",
    choices: [
      "Prevent accidental dialing or app starts",
      "Creating personalized design backgrounds",
      "Improving battery life",
      "Enhancing the phone\u2019s processing speed",
    ],
    answer: "",
    explanation:
      "Explanation: The passage mentions that pattern locks are commonly used to prevent accidental dialing or app starts, thereby preventing unintentional actions on the smartphone.",
  },
  {
    question:
      "What is the purpose of port forwarding in the context of Network Address Translation (NAT)?",
    choices: [
      "To hide the true IP address of internal systems",
      "To open a port in the firewall and direct incoming traffic on that port to a specific IP address on your LAN",
      "To enable devices inside your LAN to reach a server outside it",
      "To block all incoming traffic on a specific port of your LAN",
    ],
    answer: "",
    explanation:
      "Explanation: Port forwarding is typically used with NAT to enable devices outside of your LAN to reach a server inside it. It works by opening a port in the firewall and directing incoming traffic on that port to a specific IP address on your LAN.",
  },
  {
    question:
      "What does the system lockout do when the number of unsuccessful login attempts exceeds the threshold value in the system\u2019s settings?",
    choices: [
      "Locks the system indefinitely",
      "Erases all data in the system",
      "Changes the system\u2019s password",
      "Protects the device from brute-force attacks",
    ],
    answer: "",
    explanation:
      "Explanation: The primary purpose of system lockout after exceeding the threshold for unsuccessful login attempts is to protect the device from any type of brute-force attack.",
  },
  {
    question:
      "Which of the following is not a type of screen lock mechanism discussed for the CompTIA A+ Core 2 (220-1102) exam?",
    choices: [
      "Pattern lock",
      "Fingerprint lock",
      "Passcode lock",
      "Firewall lock",
    ],
    answer: "",
    explanation:
      "Explanation: In the context of the CompTIA A+ Core 2 (220-1102) exam, a firewall lock is not described as a type of screen lock mechanism.",
  },
  {
    question:
      "When using multifactor authentication (MFA), what are the types of factors commonly used for the second factor?",
    choices: [
      "Something you need, such as a phone number",
      "Something you know, such as a password",
      "Something you have, such as a smart card, badge, or token",
      "Something you ate, like your last meal",
    ],
    answer: "",
    explanation:
      "Explanation: In the context of Multifactor Authentication (MFA), the second factor commonly used is \u2019something you have\u2019. For example, a user might be required to enter a code from a smart card, badge, or token, in addition to entering a username and password.",
  },
  {
    question: "What is a noncompliant system?",
    choices: [
      "A system that has had all the necessary updates and patches applied",
      "A system that has not had operating system updates and security patches, anti-malware updates and patches, or driver updates applied",
      "A system that is only vulnerable to attack",
      "A system that cannot be used as an attack vector",
    ],
    answer: "",
    explanation:
      "Explanation: A noncompliant system refers to a system that has not been updated with the necessary security patches including the operating system updates, anti-malware updates, and driver updates. This makes it vulnerable to attacks and it could be used as an attack vector.",
  },
  {
    question:
      "Which type of permission allows read, write, and execute actions?",
    choices: ["Full Control", "Modify", "Read & Execute", "Write"],
    answer: "",
    explanation:
      "Explanation: The \u2019Full Control\u2019 permission allows users to read, write, and execute operations on a file or folder.",
  },
  {
    question:
      "Which method of physical destruction is suitable for rendering storage devices inoperable at home?",
    choices: ["Incinerating", "Shredding", "Degaussing", "Drilling"],
    answer: "",
    explanation:
      "Explanation: Drilling multiple holes through the disk drives, motherboard, memory boards, expansion cards, and any other onboard devices, except the power supply, is a recommended method of physical destruction that can be performed at home. This is stated clearly in the text.",
  },
  {
    question:
      "What is the purpose of different types of tools and methods in terms of malware threats mentioned in the text?",
    choices: [
      "To enable malware",
      "To increase the number of malware threats",
      "To decrease the efficiency of systems",
      "To fight back against malware threats",
    ],
    answer: "",
    explanation:
      "Explanation: The text mentions that the purpose of having different types of tools and methods is to fight back against the diverse malware threats.",
  },
  {
    question: "How can the system be protected from casual snooping?",
    choices: [
      "By enabling the system to lock the display screen after a period of inactivity",
      "By turning off the system after a period of inactivity",
      "By removing the login requirement on the system",
      "By changing the desktop wallpaper",
    ],
    answer: "",
    explanation:
      "Explanation: By enabling the system to lock the display screen after a period of inactivity and requiring a login to unlock the screen, the system can be protected from casual snooping.",
  },
  {
    question:
      "What is one of the benefits of reinstalling the OS in the context of \u2019Elimination of junk files\u2019?",
    choices: [
      "It removes any malware on the system",
      "It removes accumulated temporary or task-related files",
      "It improves the system performance by removing unnecessary disk files",
      "It helps in file sharing",
    ],
    answer: "",
    explanation:
      "Explanation: Reinstalling the OS can remove accumulated temporary or task-related files. These types of files can accumulate over time, and although they can be managed somewhat with a disk cleanup app, a clean install of the OS can remove them entirely.",
  },
  {
    question: "What is vishing in computer security?",
    choices: [
      "It is a type of malware attack",
      "It is a type of ransomware attack",
      "It is a type of phishing attack that uses VoIP",
      "It is a type of DDoS attack",
    ],
    answer: "",
    explanation:
      "Explanation: Vishing is a type of phishing attack where criminals use Voice over IP (VoIP) to pose as representatives of reputable companies and trick victims into giving away their private, financial, and personal information.",
  },
  {
    question:
      "What is one significant difference between Bring Your Own Device (BYOD) and Corporate-Owned Personally Enabled (COPE) policies in organizations?",
    choices: [
      "In BYOD, the device is not permitted to access company data, while in COPE, it is.",
      "In BYOD, employees personally pay for the device service while in COPE, the organization bears the cost.",
      "In BYOD, devices are owned by the company, whereas in COPE, the devices are personally owned by the employees.",
      "In BYOD, devices cannot be used for personal reasons, while in COPE they can be used as if personally owned.",
    ],
    answer: "",
    explanation:
      "Explanation: In a BYOD policy, the employee is often responsible for the cost of the device and its service. In a COPE policy, the organization provides the device and the service, but the employee is allowed to use it as though it is personally owned.",
  },
  {
    question:
      "Whichever profile of Firewall & Network Protection in Windows Security is used by default for new network connections and is considered to be the most secure initially due to the presumption that a public network isn\u2019t secure?",
    choices: [
      "Domain Network",
      "Private Network",
      "Public Network",
      "SOHO Network",
    ],
    answer: "",
    explanation:
      "Explanation: The public network profile is the default profile for new network connections in Windows. It is initially considered the most secure because the assumption is that a public network isn\u2019t secure, so the settings are stricter to provide more protection.",
  },
  {
    question:
      "What is the main objective of implementing Mobile Device Management (MDM) in an organization?",
    choices: [
      "To manage workloads of IT admins",
      "To control the connection, use, and location of mobile devices",
      "To reduce workstation costs",
      "To automate device management processes",
    ],
    answer: "",
    explanation:
      "Explanation: MDM is primarily introduced in an organization to control the connection, use, and location of mobile devices. It helps regulate mobile devices that can connect to an organization\u2019s internal network and thereby helps control potential security threats.",
  },
  {
    question:
      "What does a swipe lock do on a mobile device such as a smartphone?",
    choices: [
      "It matches the motion and direction of a swipe pattern across the screen to a stored pattern to unlock the device",
      "It allows the user to swipe any pattern to unlock the device",
      "It uses a swipe to close the device",
      "It uses the direction of a swipe to track the user\u2019s location",
    ],
    answer: "",
    explanation:
      "Explanation: A swipe lock uses the motion and direction of the swipe across the screen. If the swipe matches the pattern that the user stored when setting up the lock, or if it matches the pattern of a swipe lock app, the device is unlocked.",
  },
  {
    question: "What is impersonation in the context of cybersecurity?",
    choices: [
      "The act of counterfeiting a product to exploit its brand popularity",
      "Claiming to be someone else, like another employee or personnel, to illicitly gather sensitive information",
      "Using a pseudonym online to hide one\u2019s real identity",
      "Copying someone else\u2019s behavior or body language to persuade others",
    ],
    answer: "",
    explanation:
      "Explanation: Impersonation in cybersecurity refers to the act of masquerading as someone else (like another employee or a technician) with the aim of exploiting the faith people place in that role to gather sensitive information like user names, office numbers, schedules etc. The goal is to make use of this data later for further social-engineering attacks.",
  },
  {
    question: "What is an \u2019Evil Twin\u2019 attack in a Wi-Fi network?",
    choices: [
      "An attack in which a mover twins the MAC address of a user\u2019s device",
      "A social-engineering attack in which a person manipulates others into revealing their passwords",
      "A method where an attacker places a fake access point to steal users\u2019 data when they connect to it",
      "An attack that involves deploying a twin server to monitor network traffic",
    ],
    answer: "",
    explanation:
      "Explanation: An evil twin attack involves the insertion of a rogue access point into a wireless network with the intention of tricking network users into connecting to it instead of the legitimate AP. The attacker is then able to intercept network traffic from these users and potentially obtain sensitive data.",
  },
  {
    question:
      "What is the main benefit of using the address reservation method in DHCP?",
    choices: [
      "It allows devices to change their IP addresses frequently",
      "It eliminates the chance of an IP address being issued to two different devices",
      "It enables a device to have multiple IP addresses",
      "It increases the DHCP address pool",
    ],
    answer: "",
    explanation:
      "Explanation: Address reservation in DHCP is used to assign permanent addresses by linking the MAC address of a device to a single IP. It eliminates the chance of issuing an IP address to two different devices by removing it from the DHCP address pool.",
  },
  {
    question: "What describes an unprotected system?",
    choices: [
      "A computer with both anti-virus and anti-malware installed",
      "A workstation with an updated firewall",
      "A computer, either a server or workstation, without any form of intrusion detection installed",
      "A system that is not connected to the internet",
    ],
    answer: "",
    explanation:
      "Explanation: An unprotected system, as defined, is a computer without anti-malware, antivirus, firewall, or any other form of intrusion detection installed. This makes the system utterly vulnerable to attacks.",
  },
  {
    question:
      "What is the primary difference between browser extensions and plug-ins, according to the passage?",
    choices: [
      "Extensions add features while plug-ins remove features.",
      "Extensions provide a link to an application while plug-ins add features.",
      "Extensions enhance the browser while plug-ins provide a link between the browser and an application.",
      "There is no difference; they are used interchangeably.",
    ],
    answer: "",
    explanation:
      "Explanation: The text specifies the primary difference to distinguish between browser extensions and plug-ins: Extensions emphases on enhancing the browser by adding features or functions, whereas plug-ins work as a link or conduit that enable a browser to communicate with other applications like QuickTime, Adobe Reader, etc.",
  },
  {
    question: "What are some of the benefits of reinstalling an OS?",
    choices: [
      "Improved system performance",
      "Elimination of malware",
      "Elimination of junk files",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: Reinstalling the OS can bring a variety of benefits such as improved system performance by wiping out unnecessary disk files, elimination of malware present on the system, and also discarding any junk/temporary files that may have accumulated on the system over time.",
  },
  {
    question: "What does a screened subnet refer to in networking terminology?",
    choices: [
      "A router that separates internal and external networks",
      "A router configured into three separate subnetworks",
      "A networking technique to connect two separate networks",
      "A type of router specialized for wireless connections",
    ],
    answer: "",
    explanation:
      "Explanation: A screened subnet refers to a router that has been configured as three completely separate subnetworks: an access router, an internal router, and a perimeter router. This creates a secured network that can be placed between an internal network and a presumed hostile network, such as the Internet.",
  },
  {
    question:
      "What does a \u2019Connected\u2019 type of hard token do in Multi-Factor Authentication (MFA)?",
    choices: [
      "It is inserted into a token reader and transfers security & authentication data automatically to a system.",
      "It generates a one-time access code without needing physical insertion into a reader.",
      "It sends security or authenticated codes using Bluetooth or an RF signal.",
      "It requires manual entry of a time-based passcode by the user.",
    ],
    answer: "",
    explanation:
      "Explanation: A \u2019Connected\u2019 hard token, as the name suggests, is securely connected to a system. It typically takes the form of a key fob or USB token, and it transfers security & authentication information automatically once it\u2019s inserted into the token reader.",
  },
  {
    question:
      "What is the common restriction placed on files from untrusted or unknown sources across different operating systems?",
    choices: [
      "The files can be opened without any restrictions",
      "The files are automatically deleted",
      "The files are restricted from being installed or used",
      "The files are restricted from being downloaded",
    ],
    answer: "",
    explanation:
      "Explanation: In the Microsoft, Android and Apple worlds, files from untrusted or unknown sources are generally restricted and denied for installation or use. These restrictions are in place to protect the system from potentially harmful or malicious software.",
  },
  {
    question:
      "What is the primary difference between a low-level format and a standard format?",
    choices: [
      "A low-level format is only used with internal drives, while a standard format is used with removable media.",
      "A low-level format overwrites data and sector markings, whereas a standard format leaves the data but makes it inaccessible if requested through the file system.",
      "A low-level format can be used to recover lost data, whereas a standard format can\u2019t.",
      "A low-level format is only possible with modern SATA drives, while a standard format can be used with any type of drive.",
    ],
    answer: "",
    explanation:
      "Explanation: A low-level format erases all data, including sector markings on the media. Meanwhile, a standard format, while leaving data intact, renders it inaccessible through the standard file system.",
  },
  {
    question: "What is the most secure protection for data at rest?",
    choices: [
      "Application-level encryption",
      "File system encryption",
      "Database encryption",
      "Full disk encryption (FDE)",
    ],
    answer: "",
    explanation:
      "Explanation: Full disk encryption (FDE) encrypts the entire contents of a storage device, providing the most secure protection for data at rest. Access typically requires authentication.",
  },
  {
    question:
      "Which of the following statements is TRUE about enabling the Windows Hello Face feature for facial recognition on a Windows system?",
    choices: [
      "The system does not require any special hardware for setup.",
      "Windows Hello Face can also be used to unlock the Microsoft Passport.",
      "The Android OS includes a Trusted Face app for facial recognition.",
      "Facial recognition on Windows does not use the Windows Biometric Framework (WBF).",
    ],
    answer: "",
    explanation:
      "Explanation: According to the passage, the Windows Hello Face tool, which is part of the Windows Biometric Framework (WBF), can be used not only to unlock a Windows system but also to unlock Windows Passport. Windows Passport is a two-factor user authentication tool that can be used instead of the standard username and password method.",
  },
  {
    question:
      "Which device in a video surveillance system allows the security personnel to observe the areas covered by the cameras?",
    choices: [
      "Surveillance system server",
      "Video cameras",
      "Disk storage device",
      "Display monitors",
    ],
    answer: "",
    explanation:
      "Explanation: Display monitors allow security personnel to observe the areas covered by the cameras in a video surveillance system. It\u2019s through these monitors that the captured images are displayed for observation.",
  },
  {
    question:
      "Which of the following is NOT a recommended defense for protecting e-mail from attacks mentioned in the passage?",
    choices: [
      "Encryption",
      "Spam filter",
      "Anti-malware software",
      "Anti-virus software",
    ],
    answer: "",
    explanation:
      "Explanation: While an anti-virus software is beneficial to ward off virus attacks, the text specifically mentions Encryption, Spam filter, User training, Anti-malware software, and Secure e-mail gateway (SEG) as defenses against email attacks. The text does not specifically mention Anti-virus software as a measure for protecting email security.",
  },
  {
    question:
      "What are the recommended practices when using screensaver locks for computer security?",
    choices: [
      "Only enable screensaver locks during night time",
      "Apply screensaver with a timeout that will display the screensaver in a prolonged time period and you should have a simple, easy-to-remember password requirement to close the screensaver",
      "Having screensaver without any lock or password",
      "Enable screensaver with a timeout setting that will display the screensaver in a short time period and you should have a password requirement to close the screensaver",
    ],
    answer: "",
    explanation:
      "Explanation: According to the provided text, if you are to be away from your computer for almost any amount of time while it\u2019s active and logged in, it\u2019s wise to have a screensaver enabled with a timeout setting that will display the screensaver in a relatively short time period, and you should have a password requirement to close the screensaver. This provides a layer of security to guard against unauthorized access.",
  },
  {
    question:
      "What must a domain controller (DC) have installed to function correctly?",
    choices: [
      "Windows 10 Professional",
      "Internet Information Services (IIS) server role",
      "Active Directory Domain Services (AD DS) server role",
      "Microsoft Office Suite",
    ],
    answer: "",
    explanation:
      "Explanation: For a system to function as a domain controller (DC), it must have the Active Directory Domain Services (AD DS) server role installed. AD DS is a service provided by Microsoft that allows management and storage of information about networked computers, enabling administrators to manage user data and security.",
  },
  {
    question:
      "What is a \u2019Dictionary Attack\u2019 in the context of cybersecurity?",
    choices: [
      "An attack based on the meanings of dictionary words.",
      "An attack that uses every password ever leaked online to guess a user\u2019s password.",
      "An attack where the hacker suggests a word and the user has to guess its meaning.",
      "An attack where the hacker uses a physical dictionary to find passwords.",
    ],
    answer: "",
    explanation:
      "Explanation: A Dictionary Attack is a type of brute force attack where a list of passwords (which might contain every password ever leaked online) is used to guess a user\u2019s password. Users who create their own passwords often recycle old passwords in whole or in part, making this type of attack potentially effective.",
  },
  {
    question:
      "What is the default browser provided on an Android operating device?",
    choices: ["Edge", "Safari", "Firefox", "Chrome"],
    answer: "",
    explanation:
      "Explanation: Android systems include the Chrome browser as the default browser, as they are provided by the same provider, Google.",
  },
  {
    question:
      "Which of the following types of hard tokens is a proximity device, transferring security codes through Bluetooth or an RF signal?",
    choices: ["Connected", "Disconnected", "Contactless", "Ad-hoc"],
    answer: "",
    explanation:
      "Explanation: The contactless hard token is a proximity device that uses Bluetooth or an RF signal to transmit security or authentication codes to the security system. This type of hard token does not require physical insertion into a reader.",
  },
  {
    question:
      "Which of the following is true about Facial biometric technology?",
    choices: [
      "It captures the pattern of the retina and iris parts of a person\u2019s eye.",
      "It captures an image of a section of a finger or a palm.",
      "It performs two tasks: capturing an image and matching the pattern of the characteristics.",
      "It captures the image of a person\u2019s face and analyzes the structure of the cheek bones as well as the shape of the eyes, nose, mouth, lips, chin, and jaws.",
    ],
    answer: "",
    explanation:
      "Explanation: The information provided states that \u2019A facial scan captures the image of a person\u2019s face and analyzes the structure of the cheek bones as well as the shape of the eyes, nose, mouth, lips, chin, and jaws. The geometry of these features yields a highly unique result that can be used for authenticating a person.\u2019 Hence, option D is the correct answer.",
  },
  {
    question:
      "Which is the correct order of wireless encryption protocols from strongest to weakest?",
    choices: [
      "WPA, WPA2, WPA3, WEP",
      "WPA3, WPA2, WPA, WEP",
      "WEP, WPA, WPA2, WPA3",
      "WPA2, WPA3, WPA, WEP",
    ],
    answer: "",
    explanation:
      "Explanation: The correct order, from strongest to weakest encryption protocols, is: WPA3, WPA2, WPA, and WEP as stated in the provided text.",
  },
  {
    question:
      "What is the main function of domain isolation in Windows Defender Firewall with Advanced Security?",
    choices: [
      "It allows only the network traffic that is necessary and approved by firewall rules.",
      "It prevents unsolicited messages from non-domain member devices from reaching domain member devices.",
      "It limits access to a server to only those devices authorized to do so.",
      "It authenticates clients and servers using certificates.",
    ],
    answer: "",
    explanation:
      "Explanation: Domain isolation in Windows Defender Firewall with Advanced Security is specifically designed to block unsolicited messages from non-domain member devices from reaching devices that are members of the domain. This is accomplished through specific rules and configurations set within the firewall.",
  },
  {
    question: "What function do password manager tools typically provide?",
    choices: [
      "They connect only to trusted source websites.",
      "They only generate strong passwords.",
      "They store credentials and offer other protective features.",
      "They monitor and control web content.",
    ],
    answer: "",
    explanation:
      "Explanation: Password manager tools, such as those provided by browsers and operating systems, not only store user credentials but also provide other security features. These may include secure data safes for sensitive data, strong password generation, and use monitoring to ensure users do not use the same password in too many places.",
  },
  {
    question:
      "What does a magnetometer, also known as a walk-through metal detector, measure?",
    choices: [
      "The weight of the metallic object",
      "The temperature of the metallic object",
      "The strength and direction of the magnetic field emitted by a metallic object",
      "The color of the metallic object",
    ],
    answer: "",
    explanation:
      "Explanation: A magnetometer measures the strength and direction of the specific magnetic field emitted by a metallic object. This is how it\u2019s able to detect the presence of ferrous and non-ferrous metals.",
  },
  {
    question:
      "Which of the following represents the best practice for downloading a Web browser to a PC or mobile device according to the text?",
    choices: [
      "Download it from any site that offers it",
      "Download it from the developer\u2019s website",
      "Randomly select a third-party site",
      "Download multiple files from untrusted source",
    ],
    answer: "",
    explanation:
      "Explanation: According to the text, the best trusted source for a browser is its developer\u2019s website. This ensures that you are downloading the official version of a software, free from any potential malware or unwanted additional downloads.",
  },
  {
    question:
      "Which feature within the Windows 10 Settings app allows users to use the \u2019Find My Device\u2019 service?",
    choices: [
      "Privacy & Security",
      "Update & Security",
      "Device & Bluetooth",
      "Network & Internet",
    ],
    answer: "",
    explanation:
      "Explanation: On a Windows 10 system, the settings for the \u2019Find My Device\u2019 feature is located within the \u2019Update & Security\u2019 section of the Settings app.",
  },
  {
    question:
      "In Google Chrome, where can you find the settings for managing \u2019Pop-ups and Redirects\u2019?",
    choices: [
      "Under Privacy and Security in Settings",
      "Under General Settings in Settings",
      "Under Cookies and Site Permissions in Settings",
      "Directly in the three-dot menu",
    ],
    answer: "",
    explanation:
      "Explanation: In Google Chrome, the \u2019Pop-ups and Redirects\u2019 settings can be found by navigating to the Settings menu, then selecting \u2019Privacy and Security\u2019, scrolling down to the \u2019Content\u2019 section, and finally clicking \u2019Pop-ups and Redirects\u2019.",
  },
  {
    question:
      "Which of the following is NOT one of the best defenses for protecting e-mail mentioned in the text?",
    choices: ["Encryption", "Anti-Spam Filter", "Using a VPN", "User Training"],
    answer: "",
    explanation:
      "Explanation: The passage mentions Encryption, Spam Filters, Anti-malware software, User training and Secure e-mail gateway as defenses for protecting e-mail. Using a VPN is not mentioned in this context.",
  },
  {
    question:
      "What is the primary function of the Private Browsing Mode in web browsers?",
    choices: [
      "To send anonymous emails",
      "To prevent online activities and caching of downloaded files",
      "Providing encrypted access to webpages",
      "To provide an ad-free browsing experience",
    ],
    answer: "",
    explanation:
      "Explanation: The primary function of the Private Browsing Mode in web browsers is to not record the user\u2019s online activities and to prevent caching of downloaded files.",
  },
  {
    question:
      "What is the primary reason it could be a good idea to disable or limit the use of AutoRun and AutoPlay on a Windows 10/11 system?",
    choices: [
      "To enhance the system performance",
      "To prevent malware or other bad stuff from being transferred onto the system",
      "To increase the speed of disc reading",
      "To reduce power consumptions",
    ],
    answer: "",
    explanation:
      "Explanation: AutoRun and AutoPlay automatically load or execute the content from an inserted media. This could potentially lead to malware or other harmful forms of software being transferred onto the system if the media has been infected. Thus, it can be beneficial to disable or limit these features on a Windows 10/11 system to improve system security.",
  },
  {
    question:
      "What benefits can reinstalling the operating system (OS) provide?",
    choices: [
      "Improved system performance",
      "Installation of malware",
      "Accumulation of junk files",
      "Slowing down of the system",
    ],
    answer: "",
    explanation:
      "Explanation: Reinstalling the OS could improve system performance by removing unnecessary files that may impact or slow down the system.",
  },
  {
    question:
      "Which of the following statements regarding the security of Short Message Service (SMS) is true?",
    choices: [
      "SMS messaging is fully private and secure",
      "SMS messages are encrypted over its entire path",
      "Cell service providers don\u2019t have access to SMS content",
      "SMS security can be compared to that of a fax machine that sends its content in the open.",
    ],
    answer: "",
    explanation:
      "Explanation: The provided text directly states that the security of SMS is like a fax machine sending content in the open, indicating a lack of privacy and a possible security risk.",
  },
  {
    question:
      "What are two primary methods to use software in order to completely wipe all data from a storage device?",
    choices: [
      "Data mining and Data encryption",
      "Data destruction software and Low-Level formatting",
      "Disk defragmentation and Disk cleanup",
      "File compression and File decompression",
    ],
    answer: "",
    explanation:
      "Explanation: Data destruction software or drive wiping software writes over all data on a device with strings of gibberish (or junk data) several times, thereby obliterating any data that originally existed on the device. Low-level formatting or physical formatting or zero-fill is used to set up the sectors and tracks of new disks or diskettes making them ready to be used. When used on an old disk, low-level formatting can also be used to completely erase a disk by overwriting every bit on the disk with zeroes.",
  },
  {
    question:
      "What are the categories of multifactor authentication (MFA) elements?",
    choices: [
      "Something you own, something you forgot, somewhere you\u2019ve been",
      "Something you have, something you recall, someplace you once were",
      "Something you have, something you know, something you are, somewhere you are",
      "Something you possess, something you used to know, somewhere you might go",
    ],
    answer: "",
    explanation:
      "Explanation: The four categories of authentication elements in a MFA scheme are indeed: something you have (a physical device), something you know (a code or phrase), something you are (related to your physical identity), and somewhere you are (related to location, such as a GPS reading).",
  },
  {
    question: "What are the two basic types of Access Control Lists (ACLs)?",
    choices: [
      "A list of MAC addresses and a list stored on the processor",
      "A list of IP addresses and a list stored on the wireless access point",
      "A list stored on the boot drive of a file system and a list of MAC addresses on a WAP",
      "A list of wireless networks and a list stored on the router",
    ],
    answer: "",
    explanation:
      "Explanation: The correct answer is C. The two basic types of ACLs are a list stored on the boot drive of a file system that provides the basis for user and group permissions, and a list of the MAC addresses permitted from a wireless network that is stored on a wireless access point (WAP). These lists are used to either permit or block access to a resource.",
  },
  {
    question: "What are USB locks and how can they contribute to security?",
    choices: [
      "USB locks are software interventions that block certain types of USB devices to be connected to the servers",
      "USB locks are physical contraptions that are inserted into USB ports and lock in place, preventing unauthorized USB usage.",
      "USB locks are special USB drives with encryption features that guard the data stored on them",
      "USB locks are fingerprint based security systems for more secure access to USB drives",
    ],
    answer: "",
    explanation:
      "Explanation: According to the passage, USB locks are physical devices that can be inserted into a USB port and locked in place, thereby providing a level of physical security against unauthorized USB device connections.",
  },
  {
    question:
      "What tasks does Universal Plug and Play (UPnP) perform through network protocols like TCP, IP, HTTP, and DHCP?",
    choices: [
      "Configure a network device with an IP address, build convergence with existing devices on a network, and create a web page interface for viewing device status",
      "Configure a network device with an IP address, but does not build convergence with existing devices on a network or create a web page interface for viewing device status",
      "Builds convergence with existing devices on a network and creates a web page interface for viewing device status, but does not configure a network device with an IP address",
      "Creates a web page interface for viewing device status, but does not configure a network device with an IP address or build convergence with existing devices on a network",
    ],
    answer: "",
    explanation:
      "Explanation: As outlined in the material, UPnP performs all the listed functions: configuring devices with an IP address, building convergence with existing network devices, and creating web page interfaces for viewing device status.",
  },
  {
    question:
      "What is the role of NTFS permissions while sharing a file or folder in Windows?",
    choices: [
      "They define what any group or account can or cannot do with a file or folder.",
      "They grant everyone Full Control network permissions.",
      "They are only applied when the resource is locally accessed.",
      "They only controls local user access, and does not affect network users.",
    ],
    answer: "",
    explanation:
      "Explanation: NTFS permissions in the Windows operating system are a set of rules that define what any group or account can or cannot do with a file or folder, regardless if the access is local or network-based.",
  },
  {
    question:
      "What does synchronization mean in the context of web browsers and mobile devices?",
    choices: [
      "The process of deleting outdated browser data",
      "The ability to coordinate browser software and settings between devices",
      "The process to update browsers and mobile device OSs.",
      "Transferring data from one mobile device to another",
    ],
    answer: "",
    explanation:
      "Explanation: In the context described, synchronization refers to the ability to keep browser software and settings coordinated between different devices. This could manifest as any changes made on one device being instantly reflected on all other synchronized devices.",
  },
  {
    question:
      "What is \u2019Somewhere you are\u2019 in the context of a multifactor authentication (MFA) scheme?",
    choices: [
      "A physical device in possession of the user providing security code",
      "A remembered code or phrase",
      "A biometric data like finger or hand print, iris details, voice, etc.",
      "A GPS reading or locations in a facility where one is authorized to access",
    ],
    answer: "",
    explanation:
      "Explanation: \u2019Somewhere you are\u2019 in the context of a multifactor authentication scheme refers to a GPS reading or locations in a facility in which you are authorized to access. It can be used to further verify the identity of the user, adding an additional layer of security.",
  },
  {
    question: "What are some purposes of pop-ups?",
    choices: [
      "To display advertisements",
      "To show messages while malware is being transferred",
      "To present surveys",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: Pop-ups can be used for various purposes such as displaying advertisements, showing messages while malware is being transferred, or presenting surveys.",
  },
  {
    question: "How do you block pop-ups and redirects in Microsoft Edge?",
    choices: [
      "Click the three-dot icon, select Settings, select Privacy and Security, scroll to Content section, select Pop-ups and Redirects",
      "Click the three-bar icon, scroll menu, select Settings, in left-side navigation select Privacy & Security, on Browser Privacy page select Block Pop-up Windows",
      "Click the three-dot symbol, scroll and select Settings, on Settings page click the three-line symbol, select Cookies and Site Permissions, scroll to All Permissions and select Popups and Redirects",
      "Click on Settings, scroll to Privacy & Security, select Cookies and Site Permissions, select Pop-ups and Redirects",
    ],
    answer: "",
    explanation:
      "Explanation: According to the text, to block pop-ups in Microsoft Edge, you need to navigate through the Settings menu to \u2019Cookies and Site Permissions\u2019. You then need to scroll down to \u2019All Permissions\u2019 and choose \u2019Popups and Redirects\u2019.",
  },
  {
    question:
      "Which of the following statements about biometric door locks is NOT true?",
    choices: [
      "Biometric door locks can be programmed",
      "They use fingerprint or hand readers for identity",
      "Biometric locks are not suitable for high-security areas",
      "Biometric locks vary in number of fingerprints they can store",
    ],
    answer: "",
    explanation:
      "Explanation: As per the given text, biometric door locks are very useful for controlling access to highly secure areas. Therefore, the statement \u2019Biometric locks are not suitable for high-security areas\u2019 is not true.",
  },
  {
    question:
      "What is the best way to protect data at rest as per the CompTIA A+ Core 2 exam?",
    choices: [
      "Using Antivirus software",
      "Regular Data Backups",
      "File compression",
      "Encryption",
    ],
    answer: "",
    explanation:
      "Explanation: The text explains that according to the CompTIA A+ Core 2 exam, the best way to protect data that is at rest, or idle on a storage device, is through encryption. Encryption is the conversion of plain-text data into cipher text.",
  },
  {
    question:
      "Which of these is not a recommended practice for ensuring the security of Personally Identifiable Information (PII)?",
    choices: [
      "Sharing PII cautiously",
      "Using a unique password for each account",
      "Knowing where your PII is stored",
      "Using the same password for all accounts",
    ],
    answer: "",
    explanation:
      "Explanation: Using the same password for all accounts can compromise your Personally Identifiable Information (PII) as if one account gets compromised, attackers will have access to other accounts as well. Using a unique password for each account is recommended to secure PII.",
  },
  {
    question:
      "Which of the following is NOT one of the four types of encryption that can be applied to data at rest?",
    choices: [
      "Application-level",
      "File system",
      "Network-level",
      "Full disk encryption (FDE)",
    ],
    answer: "",
    explanation:
      "Explanation: Network-level is not listed as one of the four types of encryption that can be applied to data at rest. The four types mentioned in the text are: Application-level, File system, Database, and Full disk encryption (FDE).",
  },
  {
    question:
      "What is a vulnerability in the context of the CompTIA A+ Core 2 exam?",
    choices: [
      "A type of malware",
      "A flaw or weakness in the physical or logical systems, controls, or processes",
      "A specific type of cyber attack",
      "The process of securing a system",
    ],
    answer: "",
    explanation:
      "Explanation: A vulnerability, as per the referenced material, is a flaw or weakness in the physical or logical systems, controls, or processes that could potentially be exploited by an attacker for malicious purposes. It is not a type of malware, a specific cyber attack, or a process, but rather a security gap that could allow those threats to occur.",
  },
  {
    question:
      "Which of the following statements about the Remote Authentication Dial-In User Service (RADIUS) protocol is NOT true?",
    choices: [
      "RADIUS is primarily used in larger wireless networks",
      "The user enters a standard domain/network login to request access on a RADIUS network",
      "RADIUS uses Transmission Control Protocol (TCP) for communication",
      "RADIUS protocol is partially encrypted",
    ],
    answer: "",
    explanation:
      "Explanation: RADIUS does not use TCP for communication. Instead, it uses User Datagram Protocol (UDP).",
  },
  {
    question:
      "What does the \u2019Enforce password history\u2019 setting in the Local Security Policy app on Windows 10/11 system do?",
    choices: [
      "It indicates when a user last changed their password, in days.",
      "It allows or disallows the minimum password length to be greater than 14 characters.",
      "It enables/disables a log file entry each time a user creates a password that is less than a certain value.",
      "It sets the maximum number of unique and not previously used passwords that must be associated with a user account before a previously used password can be reused.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Enforce password history\u2019 setting in Windows ensures that a user must cycle through a specific number of unique passwords before they are allowed to reuse an older one. This helps prevent the continuous use of the same password.",
  },
  {
    question:
      "Why is it important to change the default user name and password after purchasing a new SOHO router?",
    choices: [
      "To personalize the router",
      "Because the default credentials may not function properly",
      "To prevent others from easily accessing your network",
      "Because it\u2019s a rule set by the manufacturers",
    ],
    answer: "",
    explanation:
      "Explanation: Default user names and passwords are usually readily available on the Web. Not changing these login credentials could allow anyone with this knowledge to access your network.",
  },
  {
    question:
      "What is a \u2019Site survey\u2019 in the context of setting up a wireless LAN in a larger organization\u2019s office space?",
    choices: [
      "It is a survey involving the review of a specific site\u2019s physical location details to decide where to place a router.",
      "It is a survey to check the type of wireless devices used by the employees.",
      "It is an exercise, performed by employees or a thirdparty consultant, to identify any potential obstruction, interference, and range issues before the network is installed.",
      "It is a survey to select the appropriate frequency or channel for the wireless network.",
    ],
    answer: "",
    explanation:
      "Explanation: A \u2019Site survey\u2019 involves examining the premises before the installation or expansion of a wireless LAN. This is done to evaluate potential issues such as obstructions, interference, and range problems before setting up the network.",
  },
  {
    question:
      "Which of the following is NOT a requirement for the security aspect of a key policy?",
    choices: [
      "All individuals issued with keys must be trained on key and lock handling.",
      "All keys must be accessible to everyone.",
      "Codes used in lock entries should be treated as physical keys.",
      "All keys need to be inspected and inventoried regularly.",
    ],
    answer: "",
    explanation:
      "Explanation: According to the key policy, all keys must be controlled and accounted for at all times, which means they are not to be accessible to everyone.",
  },
  {
    question: "What is the difference between a DoS and a DDoS attack?",
    choices: [
      "In a DoS attack, multiple devices are used while a DDoS attack uses a single device",
      "A DDoS attack uses multiple coordinated devices while a DoS attack is an attempt by a single device",
      "A DDoS attack typically involves botnets while a DoS attack does not",
      "There is no difference; they are the same thing",
    ],
    answer: "",
    explanation:
      "Explanation: A DoS (Denial of Service) attack is an attempt to flood a device\u2019s Internet connection with requests in a way that overwhelms and ultimately disables it. This type of attack generally comes from a single device. On the other hand, a DDoS (Distributed Denial of Service) attack is similar but uses multiple devices in a coordinated fashion to perform the attack.",
  },
  {
    question:
      "Which of the following options is NOT a step in the process of viewing or modifying the attributes of a file or folder on a Windows 10/11 system?",
    choices: [
      "Use the File Explorer to navigate to the folder in which the targeted file is contained.",
      "Right-click the file you want to view or modify.",
      "Use the Start menu to find the attributes of the file.",
      "In the Attributes settings at the bottom of the General tab, alter the file\u2019s attributes to make it read-only or hidden.",
    ],
    answer: "",
    explanation:
      "Explanation: In the text, it is not mentioned that the Start menu is used to find the attributes of a file. The process involves using the File Explorer to navigate to the file, right-clicking and choosing properties, and modifying the properties within the dialog box.",
  },
  {
    question:
      "On Windows 10/11 systems, how can you run administrative commands at an elevation level?",
    choices: [
      "Left-click on the command and choose Standard User",
      "Right-click on the command on the Start menu and choose Run as Administrator",
      "Go to security settings and change user to Administrator",
      "Double-click on the command on the Desktop and choose Run as Administrator",
    ],
    answer: "",
    explanation:
      "Explanation: In order to run administrative commands at an elevated level on Windows 10/11 systems, you should right-click the command on the Start menu and choose the \u2019Run as Administrator\u2019 option. This allows users to overcome the limitations set by the system\u2019s security settings which prevents standard users from running certain commands.",
  },
  {
    question:
      "What is a detrimental effect of cryptominers being installed on enterprise servers?",
    choices: [
      "They cause data loss",
      "They increase power demands and electric bill",
      "They physically damage the servers",
      "They block server access",
    ],
    answer: "",
    explanation:
      "Explanation: The text states that \u2019cryptominers\u2019 are a large piece of software that consumes significant amounts of electrical power. Therefore, their installation on enterprise servers leads to increased power demands and a consequent rise in the electric bill.",
  },
  {
    question:
      "What is a PIN code as it pertains to user authentication, and what are its typical characteristics?",
    choices: [
      "It is a one-time code generated by the system for each login, usually comprising of six to eight digits.",
      "It is a long character string that serves in place of a password, compatible with all devices.",
      "It is a short series of numbers serving instead of a password, commonly four digits long.",
      "It is a graphical pattern drawn on the screen to access a user\u2019s account.",
    ],
    answer: "",
    explanation:
      "Explanation: A Personal Identification Number (PIN) code is typically a short series of numbers, usually four digits, that serves as an alternative to a username/password for user authentication. Some may also contain alpha characters.",
  },
  {
    question:
      "Which of the following is NOT used in biometric technologies for physical security programs?",
    choices: [
      "Hand and fingerprints",
      "Blood pressure readings",
      "Retina and iris patterns",
      "Facial structure characteristics",
    ],
    answer: "",
    explanation:
      "Explanation: Blood pressure readings are not used in biometric technologies for physical security programs. They use hand and fingerprints, retina and iris patterns, or facial structure characteristics for identification.",
  },
  {
    question: "What is the purpose of security lighting?",
    choices: [
      "To provide a safe environment",
      "To offer aesthetic enhancement",
      "To heat the premises",
      "To attract insects",
    ],
    answer: "",
    explanation:
      "Explanation: Security lighting is used to prevent intrusions and to provide a safe environment for employees, the public, and first responders, as per the text.",
  },
  {
    question:
      "What does the \u2019Maximum password age\u2019 setting in the Local Security Policy app of a Windows 10/11 system do?",
    choices: [
      "Determines the number of unique passwords that must be associated with an account before an old one can be reused",
      "Sets the minimum number of days a password must be used before it can be changed",
      "Specifies the length in days after a password change before it should be changed again",
      "Establishes the requirement for new password length",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Maximum password age\u2019 policy in the Windows 10/11 system sets the duration in days after a password change, at the end of which the user is required to change their password again. For example, setting this to 60 days would require the user to change their password every two months.",
  },
  {
    question:
      "Which of the following is not a type of encryption that can be applied to data at rest?",
    choices: [
      "Application-level",
      "File system",
      "VPN-level",
      "Full disk encryption (FDE)",
    ],
    answer: "",
    explanation:
      "Explanation: VPN-level encryption is not a type of encryption that is applied to the data at rest. It is a method used to secure data in transit, not when it is stored or at rest. The types of encryption that can be applied to data at rest include Application-level, File system, Database, and Full disk encryption (FDE).",
  },
  {
    question:
      "What are the two types of security accounts provided by Active Directory?",
    choices: [
      "User accounts and Group accounts",
      "User accounts and Computer accounts",
      "Computer accounts and Service accounts",
      "User accounts and System accounts",
    ],
    answer: "",
    explanation:
      "Explanation: Active Directory provides two types of security accounts: user accounts and computer accounts. User accounts tend to be associated with service accounts and applications, whereas computer accounts are used for computers. Both of these account types can be collected into and controlled by a security group to create a unit that can be managed as one entity.",
  },
  {
    question: "What does a keylogger do?",
    choices: [
      "It captures images from your computer screen",
      "It records your keystrokes and captures login information, banking or e-commerce transactions",
      "It scans your computer for viruses",
      "It blocks unwanted internet content",
    ],
    answer: "",
    explanation:
      "Explanation: A keylogger records the keystrokes made on a computer. This can include login details, banking or e-commerce transactions, essentially anything that a user does with the keyboard.",
  },
  {
    question:
      "When considering a door lock, why could a door lock combined with an access control vestibule improve security?",
    choices: [
      "It creates extra noise, which can alert security.",
      "It ensures that only authorized personnel with the key can enter.",
      "The vestibule recognises the identity of the person.",
      "It deter a determined intruder.",
    ],
    answer: "",
    explanation:
      "Explanation: An access control vestibule influences who can get through the door and it is designed to control people\u2019s access to certain areas. Combining this with a keyed door lock ensures that even if copies of the key are floating around, the vestibule can still confirm the identity of the person trying to enter and whether they have access rights.",
  },
  {
    question:
      "What is the first step to activate or deactivate Windows Defender Firewall?",
    choices: [
      "Select the Firewall & Network Protection option.",
      "Select the Update & Security link from the Settings app and choose Windows Security.",
      "Toggle the slide switch to On or Off under the Microsoft Defender Firewall heading.",
      "Select the desired location profile.",
    ],
    answer: "",
    explanation:
      "Explanation: The first step in activating or deactivating Windows Defender Firewall is to select the Update & Security link from the Settings app and choose Windows Security. This takes you to the Windows Security page where you can then select the Firewall & Network Protection option.",
  },
  {
    question: "What is a profile in terms of mobile device management?",
    choices: [
      "A photo of the user for identification",
      "A collection of configuration and security settings",
      "An overview of the user\u2019s favorite apps",
      "A list of device malfunctions and issues",
    ],
    answer: "",
    explanation:
      "Explanation: In the context of mobile device management, a profile is a collection of configuration and security settings created by an admin, often saved in XML format and distributed to the correct devices. Profiles can control access to applications, connections and servers, and are often used to tailor security settings to different types of users or device categories.",
  },
  {
    question:
      "What is the purpose of the \u2019Relax minimum length limits\u2019 setting in a Windows 10/11 system\u2019s security policy?",
    choices: [
      "It removes the requirement for a minimum password length.",
      "It allows the minimum password length to be set below 14 characters.",
      "It allows or disallows the minimum password length to be greater than 14 characters.",
      "It sets the minimum password length to be exactly 14 characters.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Relax minimum length limits\u2019 setting allows (when enabled) or disallows (when disabled) the minimum password length to be greater than 14 characters.",
  },
  {
    question:
      "What is the function of the \u2019Notify me only when apps try to make changes to my computer (do not dim my desktop)\u2019 option in the User Account Control (UAC) settings for Windows 10/11?",
    choices: [
      "It stops all processes running in the background.",
      "It allows a system setting or resource change without any notification or warning.",
      "It displays a warning box when an application tries to make changes but allows other processes to continue running without dimming the desktop.",
      "It shows a notification for any changes, including trusted Windows settings.",
    ],
    answer: "",
    explanation:
      "Explanation: This option in User Account Control provides a warning when an application attempts to change a system setting or resource, but it differs from the other options as it continues to let processes run in the background \u2013 it doesn\u2019t dim the desktop.",
  },
  {
    question: "What is regarded as the most dangerous form of spyware?",
    choices: ["Adware", "Matcash", "Legitimate software", "Search redirection"],
    answer: "",
    explanation:
      "Explanation: Matcash is mentioned as the most dangerous form of spyware as it quietly collects private information without detection.",
  },
  {
    question:
      "What is the recommended method for disposing of medium-to-large volumes of paper, magnetic tape, and optical media?",
    choices: ["Drilling", "Shredding", "Degaussing", "Incinerating"],
    answer: "",
    explanation:
      "Explanation: Incineration, or burning, is suggested as a good method for disposing of medium-to-large volumes of paper, magnetic tape, and optical media. However, it should be performed by a third-party data disposal facility.",
  },
  {
    question: "What does a properly-configured firewall do?",
    choices: [
      "It allows all inbound and outbound network traffic",
      "It permits authorized inbound and outbound network traffic and denies what its rules specifically exclude",
      "It blocks all network traffic",
      "It allows only outbound traffic",
    ],
    answer: "",
    explanation:
      "Explanation: A properly configured firewall permits authorized (meaning approved) inbound and outbound network traffic and denies traffic that the firewall\u2019s rules specifically exclude.",
  },
  {
    question:
      "What is the function of a Secure e-mail gateway (SEG) in an organization\u2019s security policies?",
    choices: [
      "It is a form of firewall that scans inbound and outbound e-mail for illicit content",
      "It trains users to detect social engineering attacks",
      "It turns the contents of an e-mail and its attachments into unreadable cipher text",
      "It detects unwanted or dangerous e-mail and senders and then quarantines or destroys detected messages",
    ],
    answer: "",
    explanation:
      "Explanation: A Secure e-mail gateway (SEG) is described as a form of firewall that logically sits between a user\u2019s e-mail account and the outside world. It scans both inbound and outbound e-mail for any illicit content or attachments in order to enforce the organization\u2019s security policies.",
  },
  {
    question:
      "What is the primary benefit of using User Account Control (UAC) on a Windows 10/11 system?",
    choices: [
      "It allows automatic installation of all applications",
      "It prevents major system changes and keeps unauthorized or unsigned applications from being installed",
      "It accelerates the process of system changes",
      "It enables installation of unsigned applications without warning",
    ],
    answer: "",
    explanation:
      "Explanation: User Account Control (UAC) helps users to prevent major system changes and unauthorized or unsigned applications from being installed to bolster system security, particularly against malware and malicious software.",
  },
  {
    question:
      "What was the purpose of Temporal Key Integrity Protocol (TKIP) in WPA2?",
    choices: [
      "To allow user authentication through EAP",
      "To protect against attacks to which WEP was vulnerable",
      "To replace CCMP and SAE",
      "To provide a separate encryption key for each received packet",
    ],
    answer: "",
    explanation:
      "Explanation: TKIP was used with WPA2 to protect against attacks to which WEP was vulnerable, not to allow authentication through EAP, replace CCMP and SAE, or provide separate encryption keys for received packets.",
  },
  {
    question:
      "What are some recommended actions an organization should take when using a third-party disposal company?",
    choices: [
      "Perform a background check on the vendor",
      "Monitor the vendor\u2019s employees when they are on the organization\u2019s premises",
      "Inspect the vendor\u2019s operating sites for security and privacy",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: The text recommends that an organization perform a background check on the vendor, monitor the vendor\u2019s employees if or when they are on the organization\u2019s premises, and inspect the vendor\u2019s operating sites for security, privacy, and the methods used when a third-party disposal company is used.",
  },
  {
    question:
      "What type of technology does an active sensor use in a home or small office setting?",
    choices: [
      "It uses a light beam",
      "It uses magnetic connections",
      "It uses ultrasonic waves",
      "It absorbs heat",
    ],
    answer: "",
    explanation:
      "Explanation: An active sensor, also known as a radar-based sensor, uses ultrasonic waves. When the returning wave pattern is disturbed, an alarm is triggered.",
  },
  {
    question:
      "What is the primary purpose of the Terminal Access Controller Access-Control System Plus (TACACS+) in wireless networks?",
    choices: [
      "For device user administration",
      "For network security",
      "For device administration",
      "For network optimization",
    ],
    answer: "",
    explanation:
      "Explanation: The text states that TACACS+ is primarily used for device administration in larger wireless networks.",
  },
  {
    question:
      "Which of the following is NOT a method of physical security mentioned in the text?",
    choices: [
      "Door locks",
      "Privacy tokens",
      "Firewall",
      "Prevention of misuses",
    ],
    answer: "",
    explanation:
      "Explanation: Firewall is not mentioned in the text as a method of physical security. A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules, and is typically considered part of a systems or network security, not physical security.",
  },
  {
    question:
      "Which of the following options is not a way to secure IoT devices according to the text?",
    choices: [
      "Keeping their firmware up to date",
      "Isolating devices on their networks as much as possible",
      "Installing antivirus software",
      "Limiting access to them from the outside",
    ],
    answer: "",
    explanation:
      "Explanation: The text mentions that IoT devices are secured by keeping their firmware up to date and isolating devices on their networks as much as possible, and by limiting access to them from the outside. It does not mention the installation of antivirus software as a method for securing IoT devices.",
  },
  {
    question:
      "Why is it particularly important to create unique passwords for each account, application, and sensitive item on the computer?",
    choices: [
      "To prevent a screensaver from displaying",
      "To ensure compliance with GDPR",
      "To protect personally identifiable information",
      "So if one password is compromised, all the others remain secure",
    ],
    answer: "",
    explanation:
      "Explanation: Creating unique passwords for each account and application provides an added layer of security. If one password is compromised, it would not affect the security of the rest of the accounts or applications on a computer.",
  },
  {
    question: "What is the purpose of a login script?",
    choices: [
      "It resets the user\u2019s password",
      "It is used to set up variables for the user such as mapping folders to drive letters, setting a default printer for a specific user, capturing information about the user or device that is logged in, and more.",
      "It initiates the shutdown sequence",
      "It sends automated email responses",
    ],
    answer: "",
    explanation:
      "Explanation: A login script is run every time a user logs in to an Active Directory domain to set up variables for that specific user which may include making network resources available, setting up peripherals, and tracking information.",
  },
  {
    question: "What is the purpose of using a degausser on a storage device?",
    choices: [
      "To physically destroy the device",
      "To make the device appear intact but not readable",
      "To incinerate the device",
      "To create multiple holes in the device",
    ],
    answer: "",
    explanation:
      "Explanation: Degaussing is a method used to reduce or remove the magnetization used to store data on hard disks, magnetic tape media, and other forms of magnetic data storage. This results in a device that appears intact but does not have readable magnetic data.",
  },
  {
    question: "What triggers an event in a magnetic sensor?",
    choices: [
      "Interruption of a light beam",
      "Alterations in wave patterns",
      "Disturbance in the returning wave pattern",
      "Breaking of the sensor\u2019s magnetic connection",
    ],
    answer: "",
    explanation:
      "Explanation: According to the text, a magnetic sensor, which is a contact sensor typically used on doors and windows, triggers an event when its magnetic connection is disrupted, or broken.",
  },
  {
    question:
      "In the \u2019Password must meet complexity requirements\u2019 setting on a Windows 10/11 system, what is the main function of this setting?",
    choices: [
      "It specifies the lifespan of a password",
      "It sets the length requirement for new passwords",
      "It either enables or disables the use of strong passwords",
      "It keeps a log file entry of a user\u2019s password history",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Password must meet complexity requirements\u2019 setting enables or disables the use of strong passwords. If enabled, this policy setting forces users to create strong passwords that have certain complexity and they are difficult to guess. If it is disabled, they may have passwords without a complexity rule.",
  },
  {
    question:
      "What is the purpose of server isolation in the context of Windows Defender Firewall configuration?",
    choices: [
      "It blocks unsolicited messages from devices that aren\u2019t domain members.",
      "It allows a device to receive messages from non-domain member devices.",
      "It restricts access to a specific server to only those devices specifically authorized.",
      "It uses certificates for authenticating clients and servers.",
    ],
    answer: "",
    explanation:
      "Explanation: Server isolation is a design policy in Windows Defender Firewall with Advanced Security which restricts access to a particular server to only devices designated as authorized. This policy can make the server a part of a domain isolation zone.",
  },
  {
    question: "What is the main purpose of an ad blocker?",
    choices: [
      "Enhancing audio quality",
      "Removing codes from web page file that display ads",
      "Increasing data speed",
      "Improving graphic display",
    ],
    answer: "",
    explanation:
      "Explanation: An ad blocker\u2019s main purpose is to remove the coding from the downloaded web page file that would display the ad or advertising content.",
  },
  {
    question:
      "What is the primary function of a soft token in the context of computer security?",
    choices: [
      "To hinder a user\u2019s access to a system",
      "To verify a user\u2019s identity and grant them access to a system",
      "To generate a one-time password (OTP) that is valid indefinitely",
      "To solely integrate with smartphones and biometric devices",
    ],
    answer: "",
    explanation:
      "Explanation: A soft token is used to verify a user\u2019s identity for the purpose of gaining access to a system and its resources. This is achieved through multi-step measures like the use of a username, password or a PIN. Additionally, a soft token system might also require the use of a one-time password (OTP) that remains relevant for a short while.",
  },
  {
    question:
      "Which of the following is the most secure protection for data at rest?",
    choices: [
      "Application-level encryption",
      "File system encryption",
      "Database encryption",
      "Full disk encryption (FDE)",
    ],
    answer: "",
    explanation:
      "Explanation: Full Disk Encryption (FDE) provides the most secure protection for data at rest as it encrypts entire contents of a storage device. Accessing this encrypted data typically requires authentication.",
  },
  {
    question: "What two types of data are typically saved by a browser?",
    choices: [
      "Random data and browsing data",
      "Cached data and browsing data",
      "Temporal data and cached data",
      "Browsing data and temporal data",
    ],
    answer: "",
    explanation:
      "Explanation: Browsers typically save cached data and browsing data. Cached data is data that is remembered by the browser in anticipation of you visiting the site again. Browsing data is a historical record of the websites you\u2019ve visited and downloaded during a recent period of time.",
  },
  {
    question:
      "What is the primary purpose of Kerberos in the authentication process, according to the text?",
    choices: [
      "Send passwords over the internet.",
      "Offer a variety of encryption methods.",
      "Authenticate a user without transmitting a password over the Internet.",
      "Act as the main database for websites.",
    ],
    answer: "",
    explanation:
      "Explanation: The text specifically states that the primary purpose of Kerberos is to authenticate a user without the need to transmit a password over the Internet. This means it provides identity verification without revealing sensitive password information.",
  },
  {
    question:
      "Which editions of Windows 10/11 support the Encrypting File System (EFS)?",
    choices: ["Home", "Basic", "Pro", "Starter"],
    answer: "",
    explanation:
      "Explanation: According to the information given, the Pro and Enterprise editions of Windows 10/11 support the Encrypting File System (EFS). So, Pro edition is a correct answer.",
  },
  {
    question:
      "What must you have enabled to use Windows Hello on a Windows 10/11 system?",
    choices: ["Touch ID", "A PIN", "Face recognition", "Gmail account"],
    answer: "",
    explanation:
      "Explanation: To set up Windows Hello, which includes fingerprint lock, you must first have a PIN enabled on your device.",
  },
  {
    question:
      "In the Local Security Policy app on a Windows 10/11 system, which policy enables you to set a limit on the number of unique passwords that must be associated with a user account before a previously used password can be reused?",
    choices: [
      "Enforce password history",
      "Maximum password age",
      "Minimum password age",
      "Minimum password length",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Enforce password history\u2019 policy sets the maximum number of unique and not previously used passwords that must be associated with a user account before a previously used password can be reused. This ensures that users do not continue to use the same password, regardless of any time limits set for it to change.",
  },
  {
    question:
      "What is a recommended best practice to optimize operating system security?",
    choices: [
      "Leave the default Administrator or Guest accounts with their default names and passwords.",
      "Name the accounts according to the company\u2019s CEO name to avoid forgetting it.",
      "Rename default accounts and apply strong passwords.",
      "Only use the accounts that do not have admin privileges.",
    ],
    answer: "",
    explanation:
      "Explanation: Renaming default accounts and applying strong passwords is a recommended operating system security best practice. This mitigates the risk of unauthorized users gaining access using the default accounts and passwords.",
  },
  {
    question:
      "What purpose do bollards serve in the security of a secured facility?",
    choices: [
      "They deter intruders from using lock picks on door locks",
      "They prevent USB devices from being connected to servers",
      "They provide protection against physical damage or breaches caused by vehicles",
      "They restrict access to server ports and drives",
    ],
    answer: "",
    explanation:
      "Explanation: Bollards, which could be anything from plastic tubes to hydraulic steel cylinders, are used to protect secured facilities from physical breaches caused by vehicles. They\u2019re designed to prevent accidents and intentional breaches, such as using a car or truck to crash into a facility and gain unauthorized access.",
  },
  {
    question: "What makes an unpatched system highly vulnerable to attack?",
    choices: [
      "The system is not up to date with the latest user interface upgrades",
      "The system is not up to date with the latest performance improvements",
      "The system is not up to date with the latest security-related patches, fixes, or upgrades",
      "The system did not install the latest gaming features",
    ],
    answer: "",
    explanation:
      "Explanation: An unpatched system, which is a system that is not up to date with the latest security patches or fixes, is highly vulnerable to attack. This includes potential bugs or flaws, especially a zero-day flaw, going unresolved when a patch or fix is available.",
  },
  {
    question:
      "Which of the following firewall design isolates particular server to limit its access only to those devices that are authorized to do so?",
    choices: [
      "Basic",
      "Domain isolation",
      "Server isolation",
      "Certificate-based",
    ],
    answer: "",
    explanation:
      "Explanation: Server isolation design is used to limit the access to a particular server only to those devices that are designated as authorized to do so.",
  },
  {
    question:
      "Which of the following is NOT a key consideration when physically placing a wireless router or an access point?",
    choices: [
      "Obstructions to the signal path",
      "Radio frequency and electromagnetic interference",
      "Visibility to all network nodes",
      "Site survey prior to installation",
    ],
    answer: "",
    explanation:
      "Explanation: While it is important for a router to have a clear signal path to network nodes, it is not necessary for it to be visible to all nodes. Physical obstruction such as walls or furniture does not necessarily prevent wireless signals from reaching network nodes.",
  },
  {
    question:
      "Which of the following describes the \u2019Domain network\u2019 profile in Windows Defender Firewall?",
    choices: [
      "This is the default profile for new network connections and is initially the most secure.",
      "This profile is used for SOHO networks on which the users and devices are trusted.",
      "The computer is connected to a domain controller.",
      "It allows the computer to have direct internet access without any security measures.",
    ],
    answer: "",
    explanation:
      "Explanation: The Domain network profile is utilized when the computer is connected to a domain controller. It is a type of firewall setting in Windows.",
  },
  {
    question: "What is the role of policies in account management in Windows?",
    choices: [
      "They prevent users from creating accounts",
      "They restrict actions a group or account can perform",
      "They help in setting up hardware",
      "They are only available in Home version of Windows",
    ],
    answer: "",
    explanation:
      "Explanation: In the context of Windows account management, policies essentially define the limitations or restrictions on what actions an account or group is permitted to perform. This could involve specific capabilities like opening a command prompt, installing software, or logging on at a specific time.",
  },
  {
    question: "How can you block pop-up windows in Firefox?",
    choices: [
      "Click the three-dot icon in the top-right corner of the page and select \u2019block pop-ups\u2019",
      "Click the three-bar icon in the top-right corner of the page, click Settings, click Privacy & Security, on the Browser Privacy page, check the box for Block Pop-up Windows.",
      "Click the three-bar icon, go to security settings and select \u2019no pop-ups\u2019",
      "Click the three-dot symbol, select the settings option and turn on the pop-up blocker.",
    ],
    answer: "",
    explanation:
      "Explanation: The correct steps to block pop-up windows in Firefox is to first click the three-bar icon in the top-right corner of the page, then click on Settings. From there, you navigate to the Privacy & Security settings and on the Browser Privacy page, a box is available to be checked for \u2019Block Pop-up Windows\u2019. This will ensure all pop-up windows are blocked.",
  },
  {
    question:
      "Which of the following options represents an example of the \u2019Something you are\u2019 factor in a multifactor authentication (MFA) scheme?",
    choices: [
      "Answer to a security question",
      "Bank card",
      "Facial recognition",
      "GPS reading",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Something you are\u2019 factor in multifactor authentication schemes pertains to physical aspects about you. These can be fingerprints or facial details that can be used for identification like facial recognition. This differs from things that you possess like a bank card or something you can recount from memory like the answer to a security question.",
  },
  {
    question:
      "What happens when Microsoft Defender Antivirus is configured in \u2019Disabled mode\u2019?",
    choices: [
      "It becomes the primary antivirus tool and actively scans files for viruses",
      "It works in the background behind other antivirus software and scans files",
      "No actions take place, no files are scanned, no data is reported, and no remediation takes place",
      "It provides up-to-date descriptions and signatures of known malware and virus attacks",
    ],
    answer: "",
    explanation:
      "Explanation: In \u2019Disabled mode\u2019, Microsoft Defender Antivirus suspends all activities. It doesn\u2019t scan files, report data, or perform any remediation.",
  },
  {
    question:
      "What is the purpose of an access control vestibule (ACV) in security systems?",
    choices: [
      "To provide an additional entry and exit point",
      "To detect and prevent unauthorized individuals from carrying weapons into a facility",
      "To provide a resting area for security personnel",
      "To control the air ventilation in facilities",
    ],
    answer: "",
    explanation:
      "Explanation: According to the provided text, an ACV is a patented security screening system intended to prevent unauthorized individuals from carrying weapons like firearms, knives, explosives, etc., into a facility. If a weapon is detected, ACV\u2019s bulletproof doors are automatically locked, trapping the person inside until security personnel can handle the situation.",
  },
  {
    question:
      "How can the logon time restrictions be set up for specific users?",
    choices: [
      "By creating a new user account",
      "By using group policy on a domain controller",
      "By changing user permissions",
      "By using the Windows Firewall",
    ],
    answer: "",
    explanation:
      "Explanation: The logon time restrictions for specific users can be set up using group policy on a domain controller or by using the \u2019net user\u2019 command on a workgroup or an individual PC using an elevated command prompt.",
  },
  {
    question: "What is the primary function of Ransomware?",
    choices: [
      "It spreads spam emails",
      "It encrypts system data and demands a ransom, often in Bitcoin",
      "It slows down the system performance",
      "It copies all the system files and sends them to the attacker",
    ],
    answer: "",
    explanation:
      "Explanation: Ransomware is a type of malicious software that encrypts all accessible data on a system, then demands a ransom (often in the form of Bitcoin) in exchange for the decryption keys.",
  },
  {
    question:
      "What does the \u2019Always notify me when\u2019 option do in User Account Control (UAC) settings in Windows 10/11?",
    choices: [
      "It sets the UAC to never display a notification for any changes.",
      "It sets the UAC to display the challenge/warning box only when an application attempts to make a change to a system setting or resource.",
      "It sets the UAC to always display a notification for any changes, including trusted Windows settings.",
      "It keeps processes running in the background without dimming the Desktop.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Always notify me when\u2019 option in the UAC adjusts the settings so that a user will always receive a notification for any changes to the system, even if they involve trusted Windows settings.",
  },
  {
    question:
      "What is an effective method to protect the contents of an e-mail and its attachments making it unreadable cipher text?",
    choices: [
      "Anti-malware software",
      "User training",
      "Encryption using PKI and other methods",
      "Secure e-mail gateway (SEG)",
    ],
    answer: "",
    explanation:
      "Explanation: Encryption, especially using Public Key Infrastructure (PKI) and other methods, is an effective way of protecting the contents of an e-mail and its attachments. It converts readable data into an unreadable format to protect it from unauthorized access.",
  },
  {
    question: "Why is it recommended to disable unused ports on a router?",
    choices: [
      "To increase the network speed",
      "To reduce the risk of an attack",
      "To free up space on the hard drive",
      "To reduce power consumption",
    ],
    answer: "",
    explanation:
      "Explanation: Enabled (open) ports on a router that aren\u2019t used and are unnecessary can be an attack waiting to happen. Therefore, reducing the risk of an attack is accomplished by disabling the unneeded or unused ports.",
  },
  {
    question:
      "What does the \u2019Minimum password length audit\u2019 setting do in the Windows 10/11 Local Security Policy?",
    choices: [
      "It creates a length requirement for any new password.",
      "It creates a log file entry each time a user creates a password that is less than a certain value.",
      "It is a toggle setting that enables or disables the complexity requirements of passwords.",
      "It allows or disallows the minimum password length to be greater than 14 characters.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Minimum password length audit\u2019 setting turns on an audit function that creates a log file entry each time a user creates a password that is less than a certain value. If this value is set to 12, but the minimum password length is 8, any time a password is created with a length more than 8 but less than 12, a log file entry is generated.",
  },
  {
    question:
      "What is the term for any program or code designed to harm a system or network?",
    choices: ["Debugging", "Scanning", "Sandbox", "Malware"],
    answer: "",
    explanation:
      "Explanation: Malware, short for malicious software, is any program or code designed to harm a system or network, typically without the consent or knowledge of the user or owner of the system or network.",
  },
  {
    question:
      "Which of the following is NOT recommended as an end-user best practice for ensuring the security of accounts, data, and resources?",
    choices: [
      "Use different strong passwords for each account and keep them private",
      "Enable a system logout after idling for an extended period",
      "Secure laptop and notebook PCs with a cable lock",
      "Create identical passwords for all Microsoft accounts and other applications",
    ],
    answer: "",
    explanation:
      "Explanation: Creating identical passwords for all accounts and applications defies the recommendation to use unique passwords for all accounts. This practice would make it easy for an attacker who has gained access to one password to gain access to all accounts and applications.",
  },
  {
    question: "How can a port be opened on Windows Defender Firewall?",
    choices: [
      "By closing all other applications",
      "By configuring another application to communicate with the port",
      "By allowing a particular application and its associated port to pass or by configuring the port directly using an inbound rule",
      "By resetting the network settings",
    ],
    answer: "",
    explanation:
      "Explanation: A port can be opened on Windows Defender Firewall either by permitting a specific application and its linked port to pass through, or by directly setting up the port using an inbound security rule.",
  },
  {
    question: "What is the purpose of a cable lock in a security context?",
    choices: [
      "To stop cars and trucks from crashing into the facility",
      "To lock USB ports and prevent unauthorized connection of devices",
      "To provide physical security for portable devices with Kensington security lock connectors",
      "To identify individuals via fingerprints or handprints",
    ],
    answer: "",
    explanation:
      "Explanation: Within the text, it is stated that a cable lock provides good physical security for portable devices, such as laptops and external drives, that have Kensington security lock connectors.",
  },
  {
    question:
      "What could an SQL injection (SQLi) attack potentially accomplish in a business database?",
    choices: [
      "Share posts on the company\u2019s social media account",
      "Gain administrator rights to the database and possibly access and manipulate sensitive data",
      "Submit a job application on the company\u2019s behalf",
      "Change the company\u2019s registered email",
    ],
    answer: "",
    explanation:
      "Explanation: When an SQLi attack happens, it can be disastrous for a business because the attacker may gain administrator rights to the database and moderate access and manipulate sensitive data. This could include customer lists, financial records, and more, according to the paragraph.",
  },
  {
    question:
      "What is the purpose of setting strong passwords on Windows 10/11 systems?",
    choices: [
      "To increase the speed of the system",
      "To make the system resistant to a calculated attack by password-guessing programs",
      "To improve the user interface of the system",
      "To free up storage space on the system",
    ],
    answer: "",
    explanation:
      "Explanation: A strong password helps to make a system resistant to a calculated attack by password-guessing programs. This is achieved by configuring several security settings.",
  },
  {
    question:
      "What are the improvements brought by Wi-Fi Protected Access 3 (WAP3) over WPA2?",
    choices: [
      "It simplifies the protocol\u2019s use and increases its encryption strength.",
      "It reduces the encryption strength for faster transmission.",
      "It maintains the same level of encryption as WPA2 but is easier to use.",
      "It only provides a fix to the WPA2 KRACK flaw without improving the encryption methods.",
    ],
    answer: "",
    explanation:
      "Explanation: WAP3 improves on WPA2 by simplifying its use and increasing the encryption strength. It provides stronger authentication and encryption methods and fixes the WPA2 KRACK flaw. It is also suitable for use in Internet of Things networks.",
  },
  {
    question:
      "What is the main function of \u2019Inheritance\u2019 in NTFS permissions?",
    choices: [
      "It manipulates existing folder permissions.",
      "It determines the permissions for new files or folders.",
      "It disables all parent folder permissions for subfolders.",
      "It allows users to adjust the priority of permissions.",
    ],
    answer: "",
    explanation:
      "Explanation: In NTFS permissions, inheritance refers to how permissions set on a parent folder are passed down to files or subfolders within it. Hence, new files or folders will get the NTFS permissions of the parent folder.",
  },
  {
    question:
      "What is the function of the \u2019Certificate-based\u2019 design policy in Windows Defender Firewall with Advanced Security?",
    choices: [
      "It permits only required and authorized network traffic.",
      "It blocks unsolicited messages from non-domain devices.",
      "It limits access to a server to only authorized devices.",
      "It uses certificates for authenticating clients and servers, including non-Windows OS devices.",
    ],
    answer: "",
    explanation:
      "Explanation: In the Windows Defender Firewall with Advanced Security, the \u2019Certificate-based\u2019 design policy is used for the application of certificates that authenticate clients and servers. This can be used with devices running Operating Systems other than Windows as well.",
  },
  {
    question:
      "Which of the following technologies does a badge reader use to read ID badges?",
    choices: [
      "Biometrics",
      "WiFi",
      "NFC",
      "RFID, Magnetic strip, barcode, QR code",
    ],
    answer: "",
    explanation:
      "Explanation: A badge reader uses RFID (Radio Frequency Identification), magnetic strip, barcode, or QR (Quick Response) code technologies to read ID badges for security purposes.",
  },
  {
    question:
      "What is the main benefit of using a home folder in an Active Directory network?",
    choices: [
      "It can be used to set up drives for users",
      "It stores user\u2019s files in their own home folder on a remote server",
      "It stores files in each computer\u2019s Documents folder",
      "It allows users to log in to different computers in a domain",
    ],
    answer: "",
    explanation:
      "Explanation: The main benefit of using a home folder in an Active Directory network is that it can store each user\u2019s files in their own home folder on a remote server. This allows for easy access regardless of which computer they log in to in the domain.",
  },
  {
    question:
      "Which of the following is NOT a method of completely erasing or wiping all data from a storage device?",
    choices: [
      "Data destruction software",
      "Low-level formatting",
      "Undelete functions",
      "Physical formatting",
    ],
    answer: "",
    explanation:
      "Explanation: Undelete functions are not methods of completely erasing or wiping all data from a storage device. They are, in fact, used to recover deleted data.",
  },
  {
    question:
      "What is the best practice concerning the guest account on a wireless router?",
    choices: [
      "It is always secure, and you should enable it",
      "Enable it only if you expect many guests",
      "It is insecure and should always be enabled",
      "It is insecure and should always be disabled",
    ],
    answer: "",
    explanation:
      "Explanation: Unless you expect to have many guests using your home wireless network, it is best to disable guest accounts or networks in the router\u2019s configuration. This is because the security of these accounts can vary depending on the router manufacturer or model.",
  },
  {
    question:
      "What are the primary non-overlapping channels in the United States?",
    choices: ["1, 2, and 3", "2, 4, and 8", "1, 6, and 11", "5, 10, and 15"],
    answer: "",
    explanation:
      "Explanation: Based on the provided text, in the United States, the primary non-overlapping channels are 1, 6, and 11. These channels do not overlap with each other and can thus be used simultaneously without interfering with each other.",
  },
  {
    question:
      "What type of features and functions do the settings on most browsers enable or disable?",
    choices: [
      "Internet connection and Wi-Fi settings",
      "Multiple windows and tab control",
      "Pop-up and ad blockers, browsing history, and other basic functions",
      "Sound control and video playback optimization",
    ],
    answer: "",
    explanation:
      "Explanation: The settings on most browsers are primarily engaged in controlling or enabling features like pop-up and ad blockers, browsing history, and other basic functions.",
  },
  {
    question:
      "What are the three layers of protection provided by SSL/TLS for a web page that is transmitted back to the user?",
    choices: [
      "Confidentiality, Encryption, Integrity",
      "Encryption, Authentication, Integrity",
      "Authentication, Confidentiality, Non-repudiation",
      "Encryption, Confidentiality, Non-repudiation",
    ],
    answer: "",
    explanation:
      "Explanation: Secure Socket Layer/Transport Layer Security (SSL/TLS) provides three layers of protection for the web page transmitted back to the user: encryption, to keep the data private; authentication, to ensure the data is from the same site the user requested it from; and integrity, to ensure the data isn\u2019t altered in transit.",
  },
  {
    question:
      "What technology does a microwave sensor use and for what purpose in a commercial or industrial context according to CompTIA A+ (220-1102)?",
    choices: [
      "It uses radio waves to penetrate walls and furniture to detect any motion.",
      "This type of sensor absorbs heat emitted by bodies entering its monitored range.",
      "The sensor uses a light beam and triggers an event if the beam is interrupted.",
      "This sensor emits microwave pulses that are reflected back to the device. Changes in the wave patterns help determine position and movement of an interfering object.",
    ],
    answer: "",
    explanation:
      "Explanation: The microwave sensor emits microwave pulses that are reflected back to the device. Variations in the wave patterns allow the sensor to determine the position and movement of any objects interfering with the wave patterns.",
  },
  {
    question: "Which of the following are wireless-specific security settings?",
    choices: [
      "MAC address and IP address",
      "SSID and security settings",
      "Passwords and usernames",
      "DHCP and DNS settings",
    ],
    answer: "",
    explanation:
      "Explanation: SSID and security settings, such as encryption type and security keys, are specific to wireless networks. They\u2019re essential components of wireless network security.",
  },
  {
    question: "Which among the following is NOT a type of equipment lock?",
    choices: ["Door Lock", "USB Lock", "Vehicle Lock", "Server Lock"],
    answer: "",
    explanation:
      "Explanation: A Vehicle Lock is not listed in the text as a type of equipment lock. Door Locks, USB Locks, and Server Locks are all mentioned.",
  },
  {
    question: "What is a rootkit?",
    choices: [
      "A program to optimize your system\u2019s hardware",
      "A program that burrows deep into the system\u2019s operating system or hardware",
      "An anti-malware tool",
      "A program that helps to create botnets",
    ],
    answer: "",
    explanation:
      "Explanation: A rootkit exploits root-level access to bury itself deep into the system\u2019s operating system or hardware. It can often hide from all but the most aggressive anti-malware tools, and be used for malicious activities.",
  },
  {
    question:
      "What does anti-phishing or phishing-awareness training mainly aim to achieve?",
    choices: [
      "Help employees recognize natural human tendencies and combat them",
      "Show employees how to carry out successful phishing attacks",
      "Give employees understanding of how a malware attack starts",
      "Both A and C",
    ],
    answer: "",
    explanation:
      "Explanation: Anti-phishing or phishing-awareness training works to help an organization\u2019s employees recognize a phishing attempt, understand the tactics typically involved in such an attack, and provide them with appropriate actions to take when such attempts are detected. It aims to address the trust issue often exploited in phishing, and to make employees aware that most malware attacks have roots in some form of phishing.",
  },
  {
    question: "What is the main objective of a phishing attack?",
    choices: [
      "To trick a person into providing their personally identifiable information (PII) to someone they believe to be a legitimate requestor",
      "To steal a person\u2019s computer",
      "To spread computer viruses",
      "To make a legitimate request for information",
    ],
    answer: "",
    explanation:
      "Explanation: In a phishing attack, the attacker tricks the victim into voluntarily providing their personally identifiable information (PII), such as names, user names, passwords, financial information, credit card numbers, etc. to someone they believe to be a legitimate requestor but who in reality is not.",
  },
  {
    question:
      "Why is it not advisable to drill the power supply of a device while attempting data disposal?",
    choices: [
      "It can cause an explosion",
      "It holds essential data that could be lost",
      "It contains capacitors that store electrical power",
      "Drilling it does not render the device inoperable",
    ],
    answer: "",
    explanation:
      "Explanation: Power supplies include capacitors that store electrical power making it dangerous to drill. Additionally, there\u2019s no data stored there for data disposal purposes.",
  },
  {
    question:
      "What are the recommended practices to secure a laptop that is used in a stationary location for some time?",
    choices: [
      "Use a cooling pad and a cable lock",
      "Put it in a laptop locker or use a security plate",
      "Both A and B are correct",
      "Do not use it in a stationary location",
    ],
    answer: "",
    explanation:
      "Explanation: According to the text, for a laptop used at a stationary location, it is recommended to secure it with a cable lock to prevent theft, cool it with a cooling pad, and/or secure it with a laptop locker or a security plate.",
  },
  {
    question:
      "What is the best practice to reduce vulnerability to dumpster diving?",
    choices: [
      "Throw away the sensitive documents",
      "Immediately shred unneeded documents",
      "Donate the documents to a recycling center",
      "Search the dumpster first before throwing away documents",
    ],
    answer: "",
    explanation:
      "Explanation: Immediately shredding unneeded documents that may contain sensitive information is the best way to reduce vulnerability to dumpster diving because it ensures the information cannot be recovered.",
  },
  {
    question:
      "Which group in Windows has the capability to back up and restore files, but cannot change security settings?",
    choices: [
      "Administrators",
      "Backup Operators",
      "Power Users",
      "Remote Desktop Users",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Backup Operators\u2019 group in Windows has the capability to back up and restore files, but members of this group cannot change security settings.",
  },
  {
    question:
      "Which devices receive OS and firmware updates from mobile service providers?",
    choices: [
      "Windows 10/11 mobile devices and iOS devices",
      "Android tablets without cellular service",
      "Android smartphones and cellular-equipped tablets",
      "iOS devices only",
    ],
    answer: "",
    explanation:
      "Explanation: According to the text, Android smartphones and cellular-equipped tablets receive OS and firmware updates from mobile service providers, while other types of devices might receive updates from different sources.",
  },
  {
    question:
      "What are the steps to create a new inbound rule that allows traffic for a specific port number to pass through the Windows Defender Firewall?",
    choices: [
      "Open the Firewall & Network Protection page, click Advanced Settings, choose Inbound Rules, select Port option, choose port TCP or UDP, select allow options, choose location policy, and name the rule.",
      "Access the Settings app, click on Update & Security, select Windows Security, open Virus & threat protection, select Manage settings, and allow the new inbound rule.",
      "Go to the Windows Defender Firewall, click on Firewall settings, select new rule, enter port number, select connectivity options, choose location policy, name the rule, and save.",
      "Open the Network & Internet settings, select Windows Firewall, create a new rule, allow the connection, choose the location policy, name the rule, and close the window.",
    ],
    answer: "",
    explanation:
      "Explanation: The prompted steps provided in option A recreate the process outlined from the text for creating a new inbound rule that allows traffic for a specific port number to pass through the Windows Defender Firewall. This sequence of steps opens the necessary settings, selects and configures the required options, and ultimately sets up the desired inbound rule.",
  },
  {
    question: "What is a zero-day attack in context of software security?",
    choices: [
      "An attack that is carried out using known vulnerabilities.",
      "An attack that exploits a vulnerability that was unknown to the software\u2019s developers.",
      "An attack carried out ten days after a vulnerability is discovered.",
      "An attack that targets old or outdated software versions.",
    ],
    answer: "",
    explanation:
      "Explanation: A zero-day attack refers to the exploitation of a software vulnerability that was unknown to its developers, giving them no time (zero days) to fix it. This makes the software vulnerable until a patch to fix the vulnerability is released and installed.",
  },
  {
    question:
      "What is Folder Redirection primarily used for in an Active Directory network?",
    choices: [
      "To delete a known folder and recreate it in a different location",
      "To transfer files from one folder to another",
      "To redirect users of a known folder to a different folder, like from a local Documents folder to a user\u2019s home folder",
      "To rename a known folder",
    ],
    answer: "",
    explanation:
      "Explanation: Folder redirection serves to redirect users of a known folder to a different folder, commonly transitioning from a local Documents folder to the user\u2019s home folder on an Active Directory network.",
  },
  {
    question:
      "According to the Fair and Accurate Credit Transactions Act (FACTA) regulations, what are the responsibilities of a business when using an outside vendor for data and device destruction and disposal?",
    choices: [
      "The business can delegate all responsibility to the outside vendor",
      "The business must ensure the outside vendor adheres to FACTA regulations for data disposal",
      "The business only needs to follow FACTA regulations if they deal with consumer\u2019s private information",
      "The business is not responsible for proper destruction and disposal of its data",
    ],
    answer: "",
    explanation:
      "Explanation: According to the passage, the FACTA rules state that a business must use a data destruction and disposal service that follows the FACTA regulations on correct disposal of consumers\u2019 private information. The business still has responsibility for the proper destruction and disposal of its data.",
  },
  {
    question:
      "What requirements are needed for a router\u2019s static IP configuration in a WAN?",
    choices: [
      "It requires coordination with the ISP, DNS server and gateway addresses",
      "It requires coordination with only the ISP",
      "It needs to be internally configured with no assistance from ISP",
      "It requires DNS server and gateway addresses only",
    ],
    answer: "",
    explanation:
      "Explanation: A static IP address for a SOHO network\u2019s router requires coordination with the Internet service provider (ISP), as well as the DNS server and gateway addresses, which can be static or dynamic.",
  },
  {
    question: "What is a Disconnected hard token in MFA procedure?",
    choices: [
      "It is a physical device inserted into a token reader.",
      "It generates a one-time access code that is passed as a signal to a receiver.",
      "It uses Bluetooth or an RF signal to pass the security codes.",
      "It is a physical key fob.",
    ],
    answer: "",
    explanation:
      "Explanation: A disconnected hard token in MFA procedure generates a one-time access code that is passively submitted to a receiver, and does not require a direct physical connection to a device or system to function.",
  },
  {
    question:
      "Which application does Windows 10 mobile devices use for file backup and restore?",
    choices: ["iCloud", "Google Sync", "iTunes", "OneDrive"],
    answer: "",
    explanation:
      "Explanation: Windows 10 mobile devices use OneDrive for file backup and restore.",
  },
  {
    question:
      "What does the \u2019Enforce password history\u2019 setting do in the Windows 10/11 Local Security Policy app?",
    choices: [
      "Limits password length",
      "Sets a logging function for password creation",
      "Sets the maximum number of unique used and expired passwords before a password can be reused",
      "Disallows minimum password length to be greater than 14 characters",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Enforce password history\u2019 setting determines how many unique used and expired passwords must be associated with a user account before a password can be reused. For example, if a value of 24 is given, a user would need to exhaust 24 unique passwords before a previous one can be reused.",
  },
  {
    question:
      "According to the text, how does the policy of password expiration and password history enforcement contribute to system security?",
    choices: [
      "It allows users to remember their password more easily.",
      "It reduces the exposure of a user\u2019s password to random attacks.",
      "It ensures the user has a unique password for every account.",
      "It automatically locks out users after too many incorrect attempts.",
    ],
    answer: "",
    explanation:
      "Explanation: The text mentions that \u2019Setting passwords to expire regularly reduces the exposure of a user\u2019s password to random attacks.\u2019 Therefore, the policy of password expiration and password history enforcement contributes to system security by reducing the potential for random password attacks.",
  },
  {
    question:
      "Which of the following is not a common key for booting into BIOS?",
    choices: ["DEL", "F8", "ESC", "F12"],
    answer: "",
    explanation:
      "Explanation: The designated key for booting into BIOS varies depending on the motherboard\u2019s manufacturer. The commonly used keys are DEL, F2, ESC, F10, or F12. F8 is not mentioned in the common keys used for booting into BIOS.",
  },
  {
    question: "What does a boot sector virus do?",
    choices: [
      "It infects the RAM of the system",
      "It changes the code in the master boot record (MBR) with harmful code",
      "It corrupts the files on the system",
      "It infects the BIOS of the system",
    ],
    answer: "",
    explanation:
      "Explanation: A boot sector virus infects the space or the master boot record (MBR) by replacing some or all of the code with malicious code. When the infected PC boots up, the malware code seeks to infect other disk and storage devices on the system.",
  },
  {
    question:
      "What definition does the U.S. Cybersecurity and Infrastructure Security Agency (CISA) give for \u2019insider threat\u2019?",
    choices: [
      "It is a threat that comes from external sources",
      "It is the threat triggered by unauthorized users",
      "It is a threat to an organization\u2019s data by competitors",
      "It is the threat that an insider will use his or her authorized access, wittingly or unwittingly, to do harm to an organization\u2019s resources",
    ],
    answer: "",
    explanation:
      "Explanation: According to the text, the U.S. Cybersecurity and Infrastructure Security Agency (CISA) defines an \u2019insider threat\u2019 as the risk that an authorized person within an organization could willingly or unwillingly cause harm to the organization\u2019s resources, data, employees, or physical assets.",
  },
  {
    question: "What is the primary purpose of a BIOS/UEFI password?",
    choices: [
      "To prevent all unauthorized or ill-intended users from booting a system",
      "To stop users from using USB drives",
      "To provide a backup feature for data recovery",
      "To ensure compatibility with Windows 10 and Windows 11",
    ],
    answer: "",
    explanation:
      "Explanation: The primary purpose of a BIOS/UEFI password is to prevent unauthorized, curious or ill-intended individuals from booting a system at all, thereby acting as a first line of security to a system, its data, and other resources.",
  },
  {
    question:
      "What steps must be followed to make hidden files visible on a Windows 10/11 system?",
    choices: [
      "Click the File Explorer Options icon, then on View tab, find the Hide Protected Operating System Files option and uncheck it.",
      "Click the View tab on the Control Panel, find the Hidden Files and Folders attribute and select the Show Hidden Files option.",
      "Click the File Explorer Options icon on the Control Panel, select the View tab, find the Hidden Files and Folders attribute and select the Show Hidden Files, Folders, and Drives radio button.",
      "Click on the Advanced Settings list in the Control Panel, find the Hidden Files and Folders attribute then select the Show Hidden Files option.",
    ],
    answer: "",
    explanation:
      "Explanation: This method is the correct way to reveal hidden files and folder on a Windows 10/11 system, according to the text.",
  },
  {
    question:
      "What is the primary purpose of software firewalls in relation to individual mobile devices?",
    choices: [
      "To interact with the traffic that a typical firewall blocks",
      "To filter specific traffic coming into the host, which may also include anti-malware and basic intrusion detection",
      "To protect the Wi-Fi networks that the mobile devices connect to",
      "To serve as a backup for the cellular networks\u2019 firewall",
    ],
    answer: "",
    explanation:
      "Explanation: Software firewalls are mainly used to filter specific traffic coming into the host which may also include anti-malware and basic intrusion detection. The purpse of these firewalls is to protect individual mobile devices from network-based threats.",
  },
  {
    question:
      "Which protocols are most commonly used to protect cellular and VoIP voice calls?",
    choices: [
      "HTTP and SMTP",
      "FTP and Pop3",
      "TLS, SIP with TLS, and SRTP",
      "TCP and UDP",
    ],
    answer: "",
    explanation:
      "Explanation: TLS, SIP with TLS, and SRTP are the most commonly used protocols to protect cellular and VoIP voice calls. They provide encryption for the voice signal and data in transit to protect the message\u2019s authentication and integrity as well as to guard against replay attacks.",
  },
  {
    question: "What is the main function of a tomographic sensor?",
    choices: [
      "It uses a light beam and triggers an event if the beam is interrupted.",
      "It emits microwave pulses that are reflected back to the device.",
      "It uses radio waves, which can penetrate walls and furniture, to detect an intruder or motion.",
      "It uses ultrasonic waves, and when the returning wave pattern is disturbed, an alarm is triggered.",
    ],
    answer: "",
    explanation:
      "Explanation: A tomographic sensor is a device that uses radio waves that can penetrate through walls and furniture in order to detect any intruders or motion within its scanning range.",
  },
  {
    question:
      "What is the purpose of security protocols and encryption standards in wireless networks?",
    choices: [
      "They enhance the performance of the wireless network",
      "They safeguard the wireless networks",
      "They stabilize the frequency of wireless signal transmission",
      "They increase the range of wireless signal transmission",
    ],
    answer: "",
    explanation:
      "Explanation: Security protocols and encryption standards are used to protect wireless networks. They ensure that the data transmitted over the networks is secured and cannot be easily intercepted by unauthorized users.",
  },
  {
    question: "What components make up a typical alarm system?",
    choices: [
      "Detection devices, a video processor, viewing monitors, and a storage device",
      "Fire extinguishers, an intruder alarm, CCTVs, and a video processer",
      "Servers, viewing monitors, a video processor, and a failsafe system",
      "An intruder alarm, a video processor, temperature sensors, and a failsafe system",
    ],
    answer: "",
    explanation:
      "Explanation: As mentioned in the text, a typical alarm system is composed of detection devices (usually sensors), a video processor or server, viewing monitors, and a video recording storage device.",
  },
  {
    question: "What is a characteristic of a Trojan?",
    choices: [
      "It replicates itself frequently",
      "It tricks users into installing it by appearing useful",
      "It asks users for permission before performing any action",
      "It strengthens the security of the system it is installed on",
    ],
    answer: "",
    explanation:
      "Explanation: A Trojan deceives users into installing it, often pretending to be a useful tool or program such as an antivirus or a media player update.",
  },
  {
    question:
      "What does the \u2019Minimum password length\u2019 setting in the Local Security Policy app in a Windows 10/11 system do?",
    choices: [
      "It sets a requirement for the password to include both upper- and lowercase characters, numbers, and special characters.",
      "It ensures that the passwords are stored using a reversible encryption.",
      "It creates a length requirement for any new password.",
      "It sets the length of time in days that after a password is changed, it must be changed again.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Minimum password length\u2019 setting creates a length requirement for any new password. For instance, a value of 8 in this setting would necessitate a new password to be at least eight characters in length.",
  },
  {
    question:
      "What is the first line of defense against malware attacks and how can it be implemented?",
    choices: [
      "The first line of defense is the anti-malware software and assigning an IT administrator to regularly update the software.",
      "The first line of defense is user education and training them to be cautious with emails from unrecognized senders, avoid questionable websites, install apps from trusted sources, and keep their anti-malware software up-to-date.",
      "The first line of defense is a virus shield and ensuring it scans email, downloads and running programs automatically.",
      "The first line of defense is limiting the users\u2019 say over their systems and having the admin regulate all actions.",
    ],
    answer: "",
    explanation:
      "Explanation: The passage emphasizes on the importance of user education and training in forming the first line of defense against malware and other cyber threats. By educating users to avoid questionable links or attachments, ensuring app installations only from trusted sources and keeping their anti-malware software updated, organizations can ensure a strengthened defense.",
  },
  {
    question:
      "What is the main purpose of disabling the SSID broadcast on an AP according to the CompTIA objective?",
    choices: [
      "To secure a wireless network",
      "To avoid interference with other wireless devices",
      "To enhance Wi-Fi speed",
      "To hide an SSID from wireless scanning programs",
    ],
    answer: "",
    explanation:
      "Explanation: As per the CompTIA objectives, disabling the SSID broadcast on an AP is seen as a method for securing a wireless network.",
  },
  {
    question:
      "What is the role of User Training in defending against email attacks?",
    choices: [
      "It trains users to create stronger passwords for email accounts",
      "It trains users to detect social engineering attacks and report them",
      "It trains users to install anti-malware software on their devices",
      "It trains users to use public key infrastructure for email encryption",
    ],
    answer: "",
    explanation:
      "Explanation: In the context of email security, user training is mainly focused on enabling email recipients to detect, report and block social engineering attacks such as phishing and spoofing.",
  },
  {
    question:
      "Which of the following is NOT a method used in social engineering as described in the text?",
    choices: [
      "Talking with people to gather information",
      "Posing as a cleaning personnel",
      "Gathering passwords, employee names, and office numbers",
      "Using cryptography to decipher encrypted data",
    ],
    answer: "",
    explanation:
      "Explanation: The text describes methods used in social engineering, including talking with people to gather information, posing as a certain personnel, and gathering passwords and other useful information. However, it does not mention the use of cryptography to decipher encrypted data.",
  },
  {
    question:
      "What is a common method used in a Cross-Site Scripting (XSS) attack?",
    choices: [
      "XSS attacks involve the attacker interfering with a router to interrupt internet service",
      "XSS attacks are performed by inserting malicious code into a web page that executes when the web page is displayed in a user\u2019s browser",
      "XSS attacks are done by flooding a network with excessive data to deny service for genuine users",
      "XSS attacks involve using software vulnerabilities to take control of multiple computers and use them to generate large-scale attacks",
    ],
    answer: "",
    explanation:
      "Explanation: Cross-Site Scripting attacks involve the attacker inserting malicious code, often JavaScript, into a web page. This code is executed when the user\u2019s browser displays the web page, making it a client-side attack.",
  },
  {
    question:
      "What is the function of Active Directory in a Windows Server domain?",
    choices: [
      "It provides gaming services",
      "It provides directory services",
      "It provides dictation services",
      "It provides writing services",
    ],
    answer: "",
    explanation:
      "Explanation: Active Directory in a Windows Server domain provides directory services that include the centralization of user accounts, passwords, and access to resources on a network via a domain controller. This allows the users to access all resources on the domain after logging in once, a feature known as single sign-on (SSO).",
  },
  {
    question: "What is an on-path attack and what are its characteristics?",
    choices: [
      "An on-path attack is a cyber attack carried out by the user, often targeting a secure email server.",
      "An on-path attack is a type of man-in-the-middle (MITM) attack where the attacker positions themselves between a user and a network in order to intercept or alter data.",
      "An on-path attack is a form of DNS attack where the attacker reroutes the user to a spoofed website.",
      "An on-path attack is a malicious act carried out by an off-path attacker, who executes their attack from outside the network.",
    ],
    answer: "",
    explanation:
      "Explanation: In an on-path attack, the attacker inserts themselves somewhere between the user and the network the user is trying to contact. This can be a website, email, DNS requests, or public Wi-Fi hotspot connections. The method of attack is commonly known as a man-in-the-middle (MITM) attack, where the attacker is able to intercept and potentially modify data being transmitted between two systems, often without the knowledge of the user.",
  },
];

export default securityQuestions;
