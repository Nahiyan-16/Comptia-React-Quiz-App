const softwareTroubleshootingQuestions = [
  {
    question:
      "What can be a potential cause for Bluetooth connectivity issues on a mobile device?",
    choices: [
      "Time zone mismatches",
      "Inadequate amount of power",
      "Overheated device",
      "Low signal strength for Wi-Fi",
    ],
    answer: "",
    explanation:
      "Explanation: Bluetooth devices use a lot of power. If the mobile device does not have sufficient power, it might fail to connect.",
  },
  {
    question:
      "What action does a motherboard take when the processor\u2019s temperature is overly high?",
    choices: [
      "It increases the speed of the system during startup",
      "It removes the check from the box next to Turn On Fast Startup (Recommended) in the Power Options",
      "It shuts down the threatening component to protect itself",
      "It updates the firmware of the BIOS/UEFI",
    ],
    answer: "",
    explanation:
      "Explanation: When a processor, either the CPU or GPU, overheats, the system may shut down. The motherboard is designed to protect itself by shutting down any component that threatens it.",
  },
  {
    question:
      "What options can be chosen after booting a computer into the WinRE recovery system and selecting Advanced Options?",
    choices: [
      "System Restore, Command Prompt, Enable Debugging, Go Back to the Previous Build",
      "Enable Safe Mode, Disable Driver Signature Enforcement, Launch Recovery Environment, System Image Recovery",
      "Enable Low-Resolution Video, System Image Recovery, System Restore, Disable Automatic Restart After Failure",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: After booting into the WinRE recovery system and selecting Advanced Options, you can choose from a variety of options including System Restore, System Image Recovery, Startup Repair, Command Prompt, Startup Settings (with its own list of options), and Go Back to the Previous Build.",
  },
  {
    question: "What are the primary reasons for Bluetooth connectivity issues?",
    choices: [
      "Limited Distance, Compatibility Issues, Power Requirements, Device Settings, Interference",
      "Network congestion, High-speed requirements, Configuration Issues, IP conflicts, Inadequate Bandwidth",
      "High-speed requirements, Limited Distance, Compatibility Issues, IP conflicts, Inadequate Bandwidth",
      "Network congestion, Power Requirements, Device Settings, IP conflicts, Interference",
    ],
    answer: "",
    explanation:
      "Explanation: Bluetooth connectivity issues primarily arise due to the range limitations of around 30 feet, possible version incompatibility making devices difficult to pair together, high power consumption which may fall short in a device possibly impeding connection, service enabling requirements on the mobile device and further setup for pairing, and interference from wi-fi or other devices that emit RFI(Radio Frequency interference) which may interfere with Bluetooth signals.",
  },
  {
    question:
      "Where can a user control the reception and type of notifications on a Windows 10/11 Desktop?",
    choices: [
      "Through the Control Panel",
      "In the System Properties",
      "In the Windows Defender",
      "Using the Notifications & Actions page of the Settings app",
    ],
    answer: "",
    explanation:
      "Explanation: By navigating to the Notifications & Actions page within the Settings app, a user can decide whether to receive notifications, what types of notifications to receive, and from which applications the notifications should originate.",
  },
  {
    question:
      "Which of the following options in the Advanced Options of WinRE reverts Windows to the previously replaced build and removes all apps or packages installed after the upgrade?",
    choices: [
      "System Restore",
      "Go Back to the Previous Build",
      "Enable Safe Mode",
      "System Image Recovery",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Go Back to the Previous Build\u2019 option from the Advanced Options in the WinRE recovery system enables the user to revert Windows to the build/version that was replaced and removes all apps or packages that were installed after the upgrade. This option may not be available if Windows was updated more than 10 days ago.",
  },
  {
    question:
      "Which option under \u2019Startup Settings\u2019 enables starting the OS in Safe Mode with a command prompt UI?",
    choices: [
      "Enable Debugging",
      "Enable Boot Logging",
      "Enable Safe Mode with Command Prompt",
      "Disable Automatic Restart After Failure",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Enable Safe Mode with Command Prompt\u2019 option in the Startup Settings allows for the operating system to start in Safe Mode with a command prompt user interface. In this mode, only necessary system processes and services run, and the command prompt allows for administrative tasks.",
  },
  {
    question:
      "What could be a possible reason for a Windows service to fail to start?",
    choices: [
      "The service is no longer needed",
      "The service depends on another service that didn\u2019t start",
      "The service has been uninstalled",
      "The service is being accessed by multiple users",
    ],
    answer: "",
    explanation:
      "Explanation: A Windows service might fail to start if it depends on another service that didn\u2019t start. This is because services can be intertwined and rely on each other to function properly.",
  },
  {
    question:
      "What can be a security risk while using a mobile device in Developer Mode?",
    choices: [
      "It weakens the security of the device",
      "Developer Mode can be misused to install untrusted or bootleg apps",
      "It enables sideloading of APK files",
      "It allows access to the root directory",
    ],
    answer: "",
    explanation:
      "Explanation: While Developer Mode does not inherently weaken the security of a device, it can be misused to install untrusted apps, which can present a security risk.",
  },
  {
    question: "What is a potential sign of malware on a mobile device?",
    choices: [
      "Higher-than-usual data usage",
      "Increase in the number of ads",
      "Slower response times",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: Higher-than-usual data usage, an increase in the number of ads, and slower response times can all be signs of malware on a device. These symptoms may suggest inappropriate activities like copying data and files, transmitting them to the attacker, and gathering data or engaging in cryptomining in the background.",
  },
  {
    question:
      "What does disabling Driver Signature Enforcement in Startup Settings do?",
    choices: [
      "Prevents the installation of non-signed device drivers",
      "Blocks restarts after major failures",
      "Allows the installation of non-signed device drivers",
      "Starts the OS in Safe Mode with a command prompt UI",
    ],
    answer: "",
    explanation:
      "Explanation: Disabling Driver Signature Enforcement allows the installation of non-signed device drivers. This can be useful in certain troubleshooting and recovery scenarios.",
  },
  {
    question:
      "What option in the \u2019Startup Settings\u2019 menu, within the \u2019Advanced Options\u2019 of the WinRE recovery system, allows you to stop the computer from restarting after major failures, like a BSOD stop?",
    choices: [
      "Enable Debugging",
      "Disable Driver Signature Enforcement",
      "Disable Automatic Restart After Failure",
      "Launch Recovery Environment",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Disable Automatic Restart After Failure\u2019 option blocks the computer from restarting after it encounters significant failures, such as those that lead to a Blue Screen of Death (BSOD) stop.",
  },
  {
    question: "How can one prevent a mobile device from overheating?",
    choices: [
      "Run as many apps as possible",
      "Keep the brightness of the screen at maximum",
      "Limit the use of 4G or 5G and close unused apps",
      "Use the device outdoors on a hot day with no cover",
    ],
    answer: "",
    explanation:
      "Explanation: Scaling back on the intensity of the display and limiting the use of resource-intensive apps and services such as 4G or 5G can help prevent mobile devices from overheating. It is also beneficial to close any open applications that aren\u2019t being used to save system resources and reduce potential heat output.",
  },
  {
    question:
      "What can cause a device with removable batteries to randomly shut down?",
    choices: [
      "It may be due to overheating",
      "The user might have disabled some services",
      "The battery might not be tightly fitted into the connectors",
      "It may be due to a bad app",
    ],
    answer: "",
    explanation:
      "Explanation: Mobile devices with removable batteries can experience shutdowns when the battery becomes slightly disconnected from the connectors or does not fit tightly into them. Sudden movements can cause the battery to disengage, leading to a shutdown.",
  },
  {
    question: "What are possible reasons for Bluetooth connectivity issues?",
    choices: [
      "Bluetooth devices are limited in range to about 30 feet.",
      "Bluetooth devices use a lot of power.",
      "Bluetooth is a service that must be enabled on a mobile device and also configured for pairing.",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: All the options listed are described in the text as being primary reasons for Bluetooth connectivity issues. These include range limitations, power usage, need to enable and configure the service, and interference from other RF devices.",
  },
  {
    question:
      "What should you do if a service has stopped running or is not working properly?",
    choices: [
      "Uninstall and reinstall the service",
      "Open Services, select the service, stop it, and then restart it",
      "Force a system shutdown",
      "Ignore the problem and hope it fixes itself",
    ],
    answer: "",
    explanation:
      "Explanation: The correct procedure is to open Services, select the service that is failing, stop it, and then restart it. This can often resolve any issues the service is having.",
  },
  {
    question:
      "What is the best way to conserve battery life with regard to the display on most modern mobile devices?",
    choices: [
      "Leave the screen on at all times",
      "Use the highest brightness setting",
      "Always have notifications turn on the screen",
      "Keep the display off when possible and use the lowest acceptable brightness setting",
    ],
    answer: "",
    explanation:
      "Explanation: Keeping the display off when it\u2019s not in use and using the lowest acceptable brightness setting helps to conserve battery life. This is because the display is one of the most power-hungry components of a mobile device.",
  },
  {
    question:
      "What should be your first action when you receive the message \u2019An operating system wasn\u2019t found\u2019 during a startup process?",
    choices: [
      "Check hard disk connections first.",
      "Reinstall the Operating System immediately.",
      "Boot into the BIOS/UEFI to check the boot device settings.",
      "Assume the hard disk has failed.",
    ],
    answer: "",
    explanation:
      "Explanation: The first recommended action to diagnose this issue is to boot into the BIOS/UEFI and check the boot device settings.",
  },
  {
    question:
      "What can cause a mobile device to randomly restart, specifically relating to the issue of \u2019stuck buttons\u2019?",
    choices: [
      "Overuse of system resources",
      "The device is overheating",
      "The battery is not fitting tightly into the connectors",
      "The buttons, slides, and power switches can become stuck in their down position",
    ],
    answer: "",
    explanation:
      "Explanation: Stuck buttons, slides or power switches can cause a mobile device to randomly restart due to their mechanical nature and because they can become stuck in their down position.",
  },
  {
    question:
      "What should you do if you notice signs of potential malware infection, such as frequently used files being inaccessible, system or personal files being altered, renamed, or corrupted?",
    choices: [
      "Ignore and continue normal operation.",
      "Immediate shutdown of the computer.",
      "Run a malware scan and quarantine any flagged files.",
      "Delete all personal files to avoid possible infection.",
    ],
    answer: "",
    explanation:
      "Explanation: When there are signs of a potential malware infection, such as frequently used files being inaccessible, system or personal files being altered, the correct action should be to run a malware scan immediately and quarantine any flagged files. This is to isolate the potential malware and stop it from causing further damage.",
  },
  {
    question:
      "Which of the following command line operations should you use to check if a host is unable to connect to a network beyond its local area due to an APIPA IPv4 address?",
    choices: ["tracert", "ipconfig", "ping", "netstat"],
    answer: "",
    explanation:
      "Explanation: The ipconfig command is used to check the condition of a network connection if the host is configured with an APIPA IPv4 address.",
  },
  {
    question: "What does reimaging Windows 10 involve?",
    choices: [
      "Merely restarting the computer",
      "Removing some of the installed apps",
      "Cleaning up the system registry only",
      "Removing all contents of the hard drive and performing a clean install",
    ],
    answer: "",
    explanation:
      "Explanation: Reimaging Windows 10 means removing everything on the hard drive, including all installed apps, updates, registry changes and user-created GPOs, and performing a clean install of Windows. This process resets Windows back to its default settings.",
  },
  {
    question: "What can cause a slow profile load?",
    choices: [
      "Running multiple programs at once",
      "A large number of desktop icons",
      "A bloated user profile",
      "Not enough hard drive space",
    ],
    answer: "",
    explanation:
      "Explanation: The reason a profile loads slowly can be due to a bloated profile. When a user logs in, the profile is loaded and the more information, files, permissions, and elements it contains, the longer it could take to load especially for users with a Roaming profile.",
  },
  {
    question: "What are some causes of sluggish performance in Windows?",
    choices: [
      "Too few startup applications",
      "Running too many applications in ample RAM",
      "Frequent Windows updates and patches",
      "Insufficient RAM and too many running applications",
    ],
    answer: "",
    explanation:
      "Explanation: Insufficient RAM and too many running applications overload the system, causing it to use the slower virtual memory for a lot of operations. This has a significant negative effect on system performance, making Windows run sluggishly.",
  },
  {
    question:
      "What is required for successful file transfers using AirDrop between an iOS device and a macOS device?",
    choices: [
      "The sender and receiver must be connected to the same Wi-Fi network",
      "The sender must be in the receiver\u2019s contacts or both must be configured to receive from everyone",
      "The sender must have specific administrative permissions on the receiver\u2019s device",
      "The sender and receiver must be using the same type of device (either iOS or macOS)",
    ],
    answer: "",
    explanation:
      "Explanation: AirDrop supports file transfers between an iOS and a macOS device if the sender is on the receiver\u2019s contacts or if both are configured to receive from anyone/everyone.",
  },
  {
    question:
      "What are some ways to manage the power use of wireless communication in mobile devices?",
    choices: [
      "Leaving the screen on to help maintain signal strength",
      "Increasing brightness for a better Wi-Fi signal",
      "Limiting or disabling device roaming and searching for new wireless networks",
      "Keeping location services on at all times to ensure signal connection",
    ],
    answer: "",
    explanation:
      "Explanation: Wireless communication includes cellular voice, cellular data, Wi-Fi, and other features. These features use radios inside the device and draw power while enabled. Limiting or disabling device roaming and searching for new wireless networks can help manage power use and mitigate battery drain.",
  },
  {
    question: "What is the general cause for a slow-performing mobile device?",
    choices: [
      "The device is overheating.",
      "There are too many open apps or poorly constructed apps using too many resources.",
      "The operating system fails to update.",
      "The storage space is full.",
    ],
    answer: "",
    explanation:
      "Explanation: The text suggests that the common cause for slow performance in mobile devices is a lack of resources, which could stem from too many open apps or apps that are poorly constructed, using too many resources, typically memory.",
  },
  {
    question:
      "Which of the following could be a reason for a certificate warning?",
    choices: [
      "The certificate was issued by an untrusted authority",
      "The certificate is signed by a publicly trusted Certificate Authority",
      "The certificate is not self-signed",
      "The fully qualified domain name of the certificate the browser is requesting matches the one on the certificate",
    ],
    answer: "",
    explanation:
      "Explanation: Despite digital certificates validating the credibility of websites or applications, some certificates may still be issued by untrusted authorities. In such cases, a certificate warning is triggered to indicate the potential risks involved.",
  },
  {
    question:
      "What does the \u2019Enable Boot Logging\u2019 option do in the Startup Settings menu?",
    choices: [
      "It starts the OS in Safe Mode.",
      "It starts the OS in normal mode and creates a log file to track future boots.",
      "It allows non-signed device drivers to be installed.",
      "It starts the OS in normal mode with the display resolution set to 800\u00d7600.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Enable Boot Logging\u2019 option, when selected, starts the OS in normal mode and creates a log file to track future boots. This can be useful for diagnosing and fixing issues with the boot process.",
  },
  {
    question:
      "What does the \u2019Enable Low-Resolution Video\u2019 option do in the Startup Settings menu?",
    choices: [
      "Starts the OS in normal mode with the display resolution set to 1080\u00d7720.",
      "Starts the OS in normal mode with the display resolution set to 800\u00d7600.",
      "Starts the OS in safe mode with low display resolution.",
      "Enables video playback in low resolution.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Enable Low-Resolution Video\u2019 option, found in the Startup Settings menu, starts the operating system in normal mode, but with the display resolution set to 800\u00d7600 pixels. This might be needed when the normal resolution of the device is causing issues or not supported.",
  },
  {
    question:
      "What are some common solutions if a mobile device app fails to launch?",
    choices: [
      "Soft reset and confirm device compatibility",
      "Use force stop",
      "Connect the device to another device and update over a direct connection",
      "Restart the device",
    ],
    answer: "",
    explanation:
      "Explanation: For an application that fails to launch on a mobile device, the typical solutions would first involve implementing a soft reset, checking for any incompatibilities between the app and the device\u2019s hardware, OS version, or any vendor-specific customizations. Once these factors have been accounted for, it is necessary to confirm whether the device meets the app\u2019s hardware requirements to function properly.",
  },
  {
    question:
      "What is a common sign that malware has infected the browser or the hosts file?",
    choices: [
      "The official home page of a site is changed to a different home page",
      "An incorrect URL is opened when the user clicks a legitimate link",
      "The browser crashes frequently",
      "The browser cannot open certain websites",
    ],
    answer: "",
    explanation:
      "Explanation: The text specifies that a common sign that malware has infected either the browser or the hosts file is browser redirection, where an incorrect URL is opened when the user clicks a legitimate link.",
  },
  {
    question:
      "What is the Android equivalent to the term \u2019Jailbreaking\u2019 in iOS?",
    choices: [
      "Sideloading",
      "Developer Mode",
      "Rooting",
      "Bootleg Application",
    ],
    answer: "",
    explanation:
      "Explanation: Rooting, like jailbreaking in iOS, refers to gaining top-level (root) access to the operating system\u2019s files. This allows a user unrestricted access to the OS and its components, which could potentially risk the security of the device.",
  },
  {
    question:
      "Which of the following is NOT a common cause for an OS update to fail?",
    choices: [
      "Low storage",
      "Multiple pending updates",
      "Corrupt files",
      "Stable internet connection",
    ],
    answer: "",
    explanation:
      "Explanation: Stable internet connection is not introduced as a common cause of an OS update failure. A good internet connection would instead support a smooth update process.",
  },
  {
    question:
      "If a host has no valid IP configuration, what could be the probable issue?",
    choices: [
      "The IP configuration supplied by a DHCP server is not good.",
      "The host is configured with an APIPA IPv4 address.",
      "There might be a problem with the network connection.",
      "There are issues with the gateway devices.",
    ],
    answer: "",
    explanation:
      "Explanation: If the host has no valid IP configuration, it could be an issue with the network connection such as a faulty cable in a wired connection or wrong settings in a wireless connection.",
  },
  {
    question:
      "What is the primary purpose of the System File Check (sfc) utility?",
    choices: [
      "To replace the Windows 10 and 11 operating systems",
      "To examine system and protected OS files for performance issues",
      "To clean the hard disk drive",
      "To install software",
    ],
    answer: "",
    explanation:
      "Explanation: The primary purpose of the System File Check (sfc) utility is to examine system and protected OS files for performance issues, not to replace the operating system, clean the hard disk drive or install software. The sfc command is used in many system troubleshooting procedures.",
  },
  {
    question:
      "What is one of the noted potential causes for frequent system shutdowns or restarts on a Windows system?",
    choices: [
      "Hard drive failure",
      "Use of an outdated operating system",
      "Sleep mode",
      "Use of excessive graphic design software",
    ],
    answer: "",
    explanation:
      "Explanation: The passage states that Sleep mode can be a desirable feature, especially if you are frequently away from your work area. However, sleep mode can also initiate a shutdown on occasion. Therefore, this can be one of the potential causes of frequent system shutdowns or restarts.",
  },
  {
    question:
      "What happens when you disable Early Launch Anti-Malware Protection in the Startup Settings menu?",
    choices: [
      "It starts the OS in Safe Mode.",
      "The Early Launch Anti-Malware driver, typically loaded during the boot cycle, is disabled.",
      "Non-signed device drivers are allowed to be installed.",
      "It blocks restarts after major failures, like a BSOD stop.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Disable Early Launch Anti-Malware Protection\u2019 simply disables the Early Launch Anti-Malware driver that is usually loaded during the boot cycle. This driver is run as part of Windows\u2019 preventative measures to reduce the impact of malware on the system.",
  },
  {
    question:
      "Which option in the WinRE recovery system Advanced Options allows for access to volumes, folders, and files through a command line?",
    choices: [
      "System Restore",
      "Startup Settings",
      "Command Prompt",
      "System Image Recovery",
    ],
    answer: "",
    explanation:
      "Explanation: The Command Prompt option in the WinRE recovery system Advanced Options interface allows for access to volumes, folders, and files through a command line.",
  },
  {
    question: "What is the purpose of scareware as a type of malware?",
    choices: [
      "To speed up device performance",
      "To trick users into downloading and installing a malicious app disguised as a security or cleanup app",
      "To enhance network connectivity",
      "To reduce the number of distracting ads",
    ],
    answer: "",
    explanation:
      "Explanation: Scareware is a type of malware that seeks to manipulate users into downloading and installing a malicious application, usually disguised as a security, cleanup, or scanning app. The victim is often tricked into believing they are receiving additional permissions.",
  },
  {
    question:
      "Which of the following is a strategy for managing power-hungry components on a mobile device?",
    choices: [
      "Keep the display on at the highest brightness",
      "Restrict device roaming and disable searching for new wireless networks",
      "Frequently use location services",
      "Have all wireless communications enabled all the time",
    ],
    answer: "",
    explanation:
      "Explanation: One of the most effective ways to manage power-hungry components on a mobile device is to restrict device roaming and disable searching for new wireless networks. These actions limit the power drain caused by signal searching, which can be expensive in terms of battery life.",
  },
  {
    question:
      "What does Windows provide when it underperforms or fails to work?",
    choices: [
      "An automated system repair tool",
      "A set of tools for diagnosis, analysis, and repair",
      "A feature that automatically resets the system",
      "An immediate system shutdown for protection",
    ],
    answer: "",
    explanation:
      "Explanation: Windows provides tools for diagnosis, analysis, and repair when it fails to work correctly or doesn\u2019t work at all. These tools are meant to help resolve any issues the system may be experiencing.",
  },
  {
    question:
      "What can cause bluetooth connectivity problems on a mobile device?",
    choices: [
      "Distance beyond 30 feet",
      "Incompatibility of Bluetooth versions",
      "Insufficient power on the device",
      "Wi-fi and other RF devices emit radio frequency interference (RFI)",
    ],
    answer: "",
    explanation:
      "Explanation: All of the mentioned issues could potentially cause bluetooth connectivity problems. The range of Bluetooth is limited, Bluetooth devices might have different versions that render them incompatible, insufficient power on the device might prevent the connection, and interference from RF devices and Wi-Fi can impede a Bluetooth signal.",
  },
  {
    question: "What can be a symptom of malware activity on a mobile device?",
    choices: [
      "High network traffic",
      "Data-usage limit notifications",
      "High number of ads",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: High network traffic, data limit notifications, and high number of ads are all potential symptoms of malware active on a mobile device. Excessive network activity may indicate a Trojan could be transmitting files, data usage exceeding normal range could indicate a malware infection, and an unusually high number of ads or pop-ups could mean some form of malware is active.",
  },
  {
    question:
      "What is the procedure to create a system repair drive according to the provided information?",
    choices: [
      "Access Settings | Control Panel | Recovery | Creating a Recovery Drive",
      "Access Settings | Update & Security | Recovery | Creating a Recovery Drive",
      "Access Settings | Recovery | System Image Recovery",
      "Open Command Prompt and input the command \u2019Create Repair Drive\u2019",
    ],
    answer: "",
    explanation:
      "Explanation: According to the provided snippet, to create a system repair drive, the user needs to access the Setting, click on the Update & Security option, then Recovery and finally select the option for Creating a Recovery Drive.",
  },
  {
    question: "What are the symptoms of a malware-infected web browser?",
    choices: [
      "Constantly crashing",
      "Frequently displaying pop-ups",
      "Changing the default search engine",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: A malware-infected web browser can exhibit several symptoms including frequent pop-ups, additional toolbars, changes to the default search engine and displaying unrelated search results. It can also cause slow performance and excessive crashes.",
  },
  {
    question:
      "Which of the following may contribute to frequent shutdowns or restarts on a Windows system?",
    choices: [
      "Sleep mode and Fast Startup",
      "Overheating of the CPU or GPU",
      "Advanced power settings",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: All the mentioned points, Sleep mode, Fast Startup, Overheating of CPU or GPU, and Advanced power settings, are areas that someone should look at to resolve an issue of a system frequently shutting down or restarting itself.",
  },
  {
    question:
      "What is the most likely cause for a mobile app to fail to update itself automatically?",
    choices: [
      "The device is running too hot",
      "There are too many apps running on the device",
      "The app was recently added to the device",
      "Insufficient storage space, incompatibility with the device\u2019s OS, or a missing service now required by the app",
    ],
    answer: "",
    explanation:
      "Explanation: When an app fails to update itself automatically, the most likely reasons could be insufficient storage space, incompatibility with the device\u2019s operating system, or a missing service that the updated version of the app now requires.",
  },
  {
    question:
      "Which option in the \u2019Advanced Options\u2019 menu can be used to scan for and fix issues preventing a computer from starting?",
    choices: [
      "System Image Recovery",
      "Command Prompt",
      "Startup Repair",
      "Startup Settings",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Startup Repair\u2019 option in the \u2019Advanced Options\u2019 menu is designed to aid in diagnosing and solving problems that might prevent a computer from starting or booting correctly. It will scan the system for common issues and attempt to automatically fix them.",
  },
  {
    question:
      "What can be done when a system is displaying a low memory warning?",
    choices: [
      "Ignore the warning as it won\u2019t affect the system\u2019s performance",
      "Shut down some of the jobs running on the system or increase the size of the virtual memory",
      "Delete unnecessary files on the hard disk",
      "Install a new operating system",
    ],
    answer: "",
    explanation:
      "Explanation: When a computer displays a low memory warning, it implies that the system is running out of RAM. To mitigate this problem, it is recommended to either shut down some of the running tasks or increase the size of the virtual memory.",
  },
  {
    question:
      "Which type of desktop alert is intended to verify a requested action?",
    choices: [
      "Information message",
      "Confirmation message",
      "Warning message",
      "Error message",
    ],
    answer: "",
    explanation:
      "Explanation: A confirmation message is used to verify a requested action, often asking \u2019Are you sure?\u2019 types of questions.",
  },
  {
    question:
      "Which of the following options would you select if you needed to boot the Operating System in Safe Mode using the Windows Recovery Environment?",
    choices: [
      "System Restore",
      "Command Prompt",
      "Startup Settings",
      "System Image Recovery",
    ],
    answer: "",
    explanation:
      "Explanation: Safe Mode is an option that is under Startup Settings in the Windows Recovery Environment. It starts the operating system in a more limited state, allowing for troubleshooting or recovery actions to take place.",
  },
  {
    question:
      "What could be the possible causes of a system freezing while playing a graphically intensive game?",
    choices: [
      "An error in the game code",
      "A hardware problem on the video card",
      "An overwhelmed video card or bad section of RAM",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: As mentioned in the text, various factors could contribute to a system freezing while playing a graphically intensive game such as, an error in the game code, a problem with the video card driver, a hardware problem on the video card, or a bad section of RAM. Therefore, all options are correct.",
  },
  {
    question:
      "What should you do before installing an application to ensure it will operate properly?",
    choices: [
      "Delete any unnecessary files from your system",
      "Install latest drivers",
      "Download and run the PC Health Check app",
      "Visit the provider\u2019s website or read the system requirements on the packaging",
    ],
    answer: "",
    explanation:
      "Explanation: Before installing an application, it\u2019s important to verify that your system meets the requirements needed for the app to run properly. This information is commonly found on the provider\u2019s website or on the packaging of the application.",
  },
  {
    question:
      "What should you do if an application on your mobile device fails to launch?",
    choices: [
      "Use force stop to stop any background services",
      "Confirm the device meets the app\u2019s hardware requirements",
      "Install a system-monitoring app",
      "Perform a system reset also known as a soft reset",
    ],
    answer: "",
    explanation:
      "Explanation: Before an application on your mobile device can launch it may require certain hardware specifications. This includes, but is not limited to, RAM, storage space, specific sensors or radios, processor type, and required camera features. This means that verifying these requirements is an important step when troubleshooting this issue.",
  },
  {
    question:
      "What is the sequence in Settings to create a repair drive in Windows?",
    choices: [
      "Settings | Update & Security | Recovery | Creating a Recovery Drive",
      "Settings | Security & Update | Recovery | Create Repair Source",
      "Settings | Update | Security | Recovery | Repair Drive Creation",
      "Settings | Security & Update | Recovery | Booting Drive",
    ],
    answer: "",
    explanation:
      "Explanation: As the text states, a repair drive can be created by accessing: Settings | Update & Security | Recovery | Creating a Recovery Drive. This sequence leads to the option to create a recovery or repair drive",
  },
  {
    question:
      "What is one of the primary reasons for Bluetooth connectivity issues on a mobile device?",
    choices: [
      "Bluetooth devices are limited in range to about 60 feet.",
      "Bluetooth devices use minimal power.",
      "Bluetooth devices require software installation.",
      "Bluetooth devices are limited in range to about 30 feet.",
    ],
    answer: "",
    explanation:
      "Explanation: Bluetooth devices have a limited range, usually about 30 feet. This can be a major factor affecting the device\u2019s ability to connect. If the device you are trying to connect to is beyond this range, you will likely have difficulty establishing a connection.",
  },
  {
    question:
      "A Windows system usually becomes instable after what kind of changes?",
    choices: [
      "An update or fix is applied",
      "A new cutting-edge hardware device is installed",
      "A large application is installed",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: The text specifies that a Windows system usually becomes instable after a major change has been made, such as an update or fix is applied, a new cutting-edge hardware device is installed, or, rarely, when a large application is installed.",
  },
  {
    question:
      "What is the purpose of running the \u2019sfc/scannow\u2019 command as part of troubleshooting a low memory warning?",
    choices: [
      "It helps to shut down unnecessary background processes",
      "It checks for and replaces corrupted or incorrect operating system files",
      "It increases the size of the virtual memory",
      "It physically installs more RAM into the system",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019sfc/scannow\u2019 command is used to scan all protected system files, and replace corrupted files with a cached copy that is located in a compressed folder at %WinDir%System32dllcache. This can help resolve issues that might be taking up unnecessary memory.",
  },
  {
    question:
      "What is the recommended action mentioned in the text to recover from a failed update process on a Windows system?",
    choices: [
      "Delete all files and restart the system",
      "Manually install the updates",
      "Run the sfc/scannow command",
      "Uninstall and re-install the OS",
    ],
    answer: "",
    explanation:
      "Explanation: In the event of a failed update process on a Windows System, it is recommended to run the \u2019sfc/scannow\u2019 command. This command will scan for and attempt to repair any corrupted system files in the OS, which can be a potential cause of failed updates.",
  },
  {
    question:
      "Which of the following choices best describes the process of enabling Safe Mode with Command Prompt using the WinRE recovery system?",
    choices: [
      "Selecting Troubleshoot, then Startup Settings, and finally Disable Driver Signature Enforcement",
      "Choosing System Image Recovery from Advanced Options",
      "Choosing Troubleshoot, followed by Advanced Options, and finally Enable Safe Mode with Command Prompt",
      "Accessing Settings, followed by Update & Security, then Recovery, and finally Creating a Recovery Drive",
    ],
    answer: "",
    explanation:
      "Explanation: The correct sequence to enable Safe Mode with Command Prompt via the WinRE recovery system is to first choose the Troubleshoot option, then select Advanced Options, and finally Enable Safe Mode with Command Prompt. This will start the operating system in Safe Mode with a command prompt user interface.",
  },
  {
    question:
      "What is the main cause of \u2019Time Drift\u2019 in systems and how is it typically addressed?",
    choices: [
      "Time drift occurs due to errors in the software\u2019s time tracking algorithm and is typically fixed by recalibrating the system clock.",
      "Time drift is a result of the system clock speeding up or slowing down with the strength of the CMOS battery, and is usually addressed by creating a Group Policy Object (GPO) on remote devices that uses GPS-synchronized time sources.",
      "Time drift occurs due to inadequate system resources and is corrected by upgrading the system\u2019s hardware.",
      "Time drift is a result of the system\u2019s operating system aging, and is usually fixed by system updates.",
    ],
    answer: "",
    explanation:
      "Explanation: The CompTIA A+ text suggests that a system\u2019s time can drift due to changes in the strength of its CMOS battery, which speeds up or slows down the battery-powered real-time clock (RTC). This drift is usually addressed by creating a GPO that uses GPS-synchronized time sources.",
  },
  {
    question:
      "What is the main purpose of the \u2019sfc C:/f\u2019 command in Windows 10 and 11 operating systems?",
    choices: [
      "Check the integrity of Windows system files",
      "Scan the C: hard disk drive or the boot volume",
      "Attempts to repair any identified errors",
      "Executes a full system scan",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019sfc C:/f\u2019 command is used specifically to fix any problems that have been identified via previous commands. It\u2019s a follow-up action to a process of identifying errors.",
  },
  {
    question: "What are crucial steps in resolving PC problems?",
    choices: [
      "To recognise the symptoms and know where to troubleshoot",
      "To ignore the initial symptoms and directly replace the hardware",
      "To always consider a problem as hardware problem",
      "To consider a problem primarily as a software problem",
    ],
    answer: "",
    explanation:
      "Explanation: Recognising the symptoms and knowing where to start troubleshooting are keys to resolving PC problems. Each symptom helps to identify whether the problem is a hardware problem or a software problem.",
  },
  {
    question: "What function was initially served by pop-ups on websites?",
    choices: [
      "To infect the host system",
      "To display advertisements",
      "To block drive-by downloads",
      "To prevent malware protections",
    ],
    answer: "",
    explanation:
      "Explanation: Initially, pop-ups served as simple ad windows on websites.",
  },
  {
    question: "What is the purpose of the \u2019sfc C:\u2019 command?",
    choices: [
      "To launch the System File Check utility",
      "To scan the C: hard disk drive or the boot volume",
      "To check the integrity of Windows system files",
      "To repair identified errors on the C: drive",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019sfc C:\u2019 command is used to scan the C: hard disk drive or the boot volume as part of the System File Check utility, which is a tool used to verify and, if necessary, replace system files for the Windows 10 and 11 OSs.",
  },
  {
    question:
      "What are the symptoms a malware-infected mobile device may exhibit?",
    choices: [
      "High network traffic and sluggish response times",
      "Limited internet access and increased number of ads",
      "Unexpected application behavior and leaked personal files/data",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: Malware-infected device may show symptoms like high network traffic, sluggish response times, limited or no Internet access, an increasing number of ads, fake security warnings, unexpected application behaviors, and instances of leaked personal files and data.",
  },
  {
    question:
      "What does Windows do if there are open files when you select the reboot option?",
    choices: [
      "It forces a reboot without warning",
      "It shuts down the app",
      "It displays a warning",
      "It automatically saves the open files",
    ],
    answer: "",
    explanation:
      "Explanation: According to the text, Windows displays a warning if there are open files when you select the reboot option. This allows the user to either close the files, which is recommended, or to force a reboot which could lead to data loss or app corruption.",
  },
  {
    question:
      "What is the function of the \u2019bcdedit/?\u2019 command in Windows?",
    choices: [
      "It lists the current settings of a BCD file.",
      "It edits the BCD file.",
      "It fixes the damaged Bootmgr and BCD files.",
      "It lists the edit options available for a BCD file.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019bcdedit/?\u2019 command in Windows is used to list the different edit options available for a BCD file.",
  },
  {
    question:
      "Which one of the following is NOT a common cause for an operating system update failure?",
    choices: [
      "Low storage space",
      "Too many open applications",
      "Corrupt files",
      "Update software malfunction",
    ],
    answer: "",
    explanation:
      "Explanation: The passage does not mention too many open applications as a cause for operating system update failure. The mentioned causes include low storage space, multiple pending updates, corrupt files, and update software malfunction.",
  },
  {
    question:
      "What is the first thing you should check if a network host cannot connect to a network?",
    choices: [
      "APIPA address",
      "No IP configuration",
      "DHCP configuration",
      "Windows issues",
    ],
    answer: "",
    explanation:
      "Explanation: If a network host cannot connect to a network, the text recommends first checking for Windows issues, specifically whether the network connection is properly configured. This is done by reviewing the status of the network connection on the Internet Network Connections page of the Control Panel and Network and Internet settings.",
  },
  {
    question:
      "What is a common security measure used by enterprises to prevent the installation of apps from untrusted sources and the use of sideloading on Android devices?",
    choices: [
      "Putting the device into Developer Mode",
      "Rooting the device",
      "Installing a Malicious Application",
      "Using mobile device management (MDM) software",
    ],
    answer: "",
    explanation:
      "Explanation: MDM software allows organizations to control and restrict what applications can be installed and methods of installation (like sideloading) on their enterprise devices, providing better security against potentially harmful or untrusted apps.",
  },
  {
    question:
      "Which of the following symptoms might suggest malware activity on a mobile device?",
    choices: [
      "Increased data usage",
      "Device showing faster-than-normal response times",
      "Frequent notifications about reaching data usage limit",
      "Decrease in ad pop-ups",
    ],
    answer: "",
    explanation:
      "Explanation: A significantly higher level of data usage can be a symptom of malware activity on a mobile device as the malware might be copying and transmitting files in the background.",
  },
  {
    question:
      "What is the purpose of structured processes, such as the six-step troubleshooting methodology, in finding and resolving problems?",
    choices: [
      "It is meant for clear-cut, easy-to-diagnose problems on servers.",
      "It is meant exclusively for servers and workstations.",
      "It is meant for mysterious, troublesome, and hard-to-diagnose problems on peripherals and computers.",
      "It is meant to make problems more obvious and simple.",
    ],
    answer: "",
    explanation:
      "Explanation: The text states that structured process, like CompTIA\u2019s six-step troubleshooting methodology, is meant to help with \u2019mysterious, troublesome, and hard-to-diagnose problems on servers, workstations, and peripheral devices.\u2019",
  },
  {
    question:
      "Which tool can be used to fix damaged \u2019Bootmgr\u2019 and \u2019BCD\u2019 files required for Windows to boot?",
    choices: ["diskpart", "bcdedit", "chkdsk", "sfc"],
    answer: "",
    explanation:
      "Explanation: The \u2019bcdedit\u2019 tool can be used at a command prompt to fix damaged \u2019Bootmgr\u2019 and \u2019BCD\u2019 files. The command \u2019bcdedit/?\u2019 can be run to list the edit options available.",
  },
  {
    question:
      "What steps are involved in rolling back a device driver in Windows?",
    choices: [
      "Click Start, select Control Panel, choose System and Security, and click Roll Back Driver",
      "Go to Settings, click Update & Security, choose Recovery and click Roll Back Driver",
      "Access Device Manager, locate the device, right-click the device and click Properties, click Roll Back Driver and select Yes, close Properties dialog box and restart the system",
      "Click Start, select Device Manager, open device category, click Properties, choose Update Driver and select No",
    ],
    answer: "",
    explanation:
      "Explanation: These are the steps specified in the text for rolling back a device driver in Windows. First, the Device Manager is accessed, the specific device is located, and its properties are opened. The \u2019Roll Back Driver\u2019 option is then clicked and the user must confirm with \u2019Yes\u2019. Finally, the Properties dialog box should be closed and the system restarted.",
  },
  {
    question:
      "What effect can low storage have on the performance of an operating system?",
    choices: [
      "It can prevent critical system functions from starting or completely finishing",
      "It can increase the speed of data processing",
      "It can enhance the stability of the operating system",
      "It has no significant effect on the operating system\u2019s performance",
    ],
    answer: "",
    explanation:
      "Explanation: Low storage in an operating system can indeed prevent critical system functions from starting or completely finishing. This is because these system functions require a certain amount of storage space to operate correctly, and if this space is unavailable, they will fail to start or end correctly.",
  },
  {
    question:
      "What function does the \u2019Fast Startup\u2019 feature serve in a Windows system and how might it negatively affect the system?",
    choices: [
      "It fosters faster sleep initiation but can cause unexpected wakeup.",
      "It speeds up the startup process but can lead to problems during shutdown.",
      "It helps to decrease the temperature of the processor, but may cause system to crash during intense execution tasks.",
      "It optimized advanced power settings but may lead to occasional system freezes.",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019Fast Startup\u2019 feature increases the pace of system startup. However, it also has the adverse effect of possibly causing issues during system shutdown.",
  },
  {
    question:
      "Which of the following is identified as a symptom of malware on a mobile device?",
    choices: [
      "Battery life decreases faster than usual",
      "Unexpected application behavior",
      "Device makes calls or send texts on its own",
      "Difficulty in turning the device off",
    ],
    answer: "",
    explanation:
      "Explanation: Unexpected application behavior refers to an observable symptom of malware infection on a mobile device. Malware can introduce itself as a regular app (spoofed, bootleg, or Trojan) and may appear to operate as expected while also conducting malicious activities in the background such as modifying, destroying, or gathering data and files from the device and sending them back to the attacker.",
  },
  {
    question: "What steps should you take to create a repair drive?",
    choices: [
      "Access Settings | Update & Security | Recovery | Creating a Recovery Drive",
      "Select Troubleshoot users | System restore",
      "Enable Debugging from Startup Settings",
      "Disable Driver Signature Enforcement",
    ],
    answer: "",
    explanation:
      "Explanation: The correct steps to create a repair drive, in accordance with the passage, include accessing Settings, then Update & Security, followed by Recovery, and finally selecting \u2019Creating a Recovery Drive\u2019 option.",
  },
  {
    question:
      "Which option from the Advanced Options in the Windows Recovery Environment allows you to restore a computer to a previous disk image?",
    choices: [
      "Startup Repair",
      "System Image Recovery",
      "System Restore",
      "Command Prompt",
    ],
    answer: "",
    explanation:
      "Explanation: The \u2019System Image Recovery\u2019 option lets you restore your computer to a previous disk image. This means the computer will revert back to the exact state it was in when the disk image was created, including operating system, programs, settings, and files.",
  },
  {
    question:
      "What is the impact of location services on the battery life of mobile devices?",
    choices: [
      "Location services do not impact battery life",
      "Location services can significantly drain the battery, especially when an app constantly requests high-quality GPS updates",
      "Location services can increase battery life",
      "Location services only affect battery life if the device is roaming or searching for new wireless networks",
    ],
    answer: "",
    explanation:
      "Explanation: Location services can greatly impact battery life. An app that occasionally checks low-accuracy location based on nearby cellular or Wi-Fi networks in the background will have a less significant impact than an app that is consistently requesting high-quality GPS updates. To maximize battery life, it\u2019s suggested to keep the location services off unless it is needed.",
  },
  {
    question:
      "What is a potential solution when the warning message \u2019Not Enough USB Controller Resources\u2019 appears?",
    choices: [
      "Install more graphics packages",
      "Increase the number of USB devices",
      "Install additional USB controllers",
      "Reduce the number of endpoints",
    ],
    answer: "",
    explanation:
      "Explanation: The text mentions that installing additional USB controllers can be a solution when encountering the \u2019Not Enough USB Controller Resources\u2019 warning message. This is because multiple USB controllers are supported by most motherboards. By installing more controllers, the number of available endpoints increases, potentially solving the resource problem.",
  },
  {
    question:
      "Which of the following actions voids the warranty of the mobile device by accessing its top-level directory?",
    choices: [
      "Sideloading",
      "Putting the device into developer mode",
      "Rooting/Jailbreaking",
      "Downloading bootleg/malicious application",
    ],
    answer: "",
    explanation:
      "Explanation: Rooting or Jailbreaking a device allows user access to top-level directories of the operating system. In the case of Android, this process is called rooting and in iOS, jailbreaking. This action voids the device\u2019s warranty by tripping an internal switch.",
  },
  {
    question:
      "Which of the following is likely to be a reason for an Operating System update failure?",
    choices: [
      "High available storage space",
      "Successfully installed updates",
      "Perfectly working files",
      "Multiple pending updates",
    ],
    answer: "",
    explanation:
      "Explanation: If the updates are applied out of sequence, especially when there are many updates to be applied simultaneously, a general system update may fail because it might be depending on a core system update to have preceded it.",
  },
  {
    question:
      "What is the primary purpose of the sfc utility in Windows 10 and 11 OSs?",
    choices: [
      "To defragment the hard disk",
      "To delete unwanted files",
      "To check the status of the RAM",
      "To examine system and protected OS files for performance issues",
    ],
    answer: "",
    explanation:
      "Explanation: The sfc utility\u2019s main purpose is to examine system and protected OS files for performance issues, which can then be fixed if necessary.",
  },
  {
    question:
      "What activity signifies the \u2019Data-usage limit notifications\u2019 as a symptom of possible malware activity?",
    choices: [
      "High network traffic and bandwidth utilization",
      "Sluggish response times on the device",
      "Receiving a notification on reaching the threshold data-usage limit",
      "Limited Internet connectivity/no Internet connectivity",
    ],
    answer: "",
    explanation:
      "Explanation: Most mobile devices include an app for monitoring data usage that allows the user to set a threshold limit for the volume of data transferred up or down the network. When the amount of data usage reaches the limit, a notification is displayed. Examining the data usage, including the data usage of each application, may disclose unusual activity that could be a sign of malware.",
  },
  {
    question:
      "Which of the following accurately describes the process to create a system repair drive in case of being unable to boot a computer or access its startup options?",
    choices: [
      "Settings | Network & Internet | VPN | Add a VPN Connection",
      "Settings | Ease of Access | TalkBack | Settings",
      "Settings | Update & Security | Recovery | Creating a Recovery Drive",
      "Settings | System | About | Renaming the PC",
    ],
    answer: "",
    explanation:
      "Explanation: To create a system repair drive should you encounter startup problems with your computer, go to Settings | Update & Security | Recovery | Creating a Recovery Drive.",
  },
  {
    question:
      "What can potentially cause a mobile device to randomly restart due to disabled services?",
    choices: [
      "User disabling unneeded services to improve device performance",
      "Device buttons stuck in the down position",
      "Overheating of the device",
      "Poorly designed app overusing system resources",
    ],
    answer: "",
    explanation:
      "Explanation: According to the section, at times, users may disable certain system services aiming to enhance system performance. This can lead to inconsistencies and cause random reboots if the disabled services are necessary for the functionalities of the apps on the device.",
  },
  {
    question:
      "What is the first step of the Best-Practice Malware-Removal Process?",
    choices: [
      "Disable System Restore in Windows",
      "Investigate and verify malware symptoms",
      "Remediate infected systems",
      "Educate the end user",
    ],
    answer: "",
    explanation:
      "Explanation: In the Best-Practice Malware-Removal Process, the first step is to investigate and verify malware symptoms. This involves recognizing that a potential malware outbreak has occurred and taking swift action to prevent it from spreading. This step is crucial because it determines the course of all subsequent steps, including containment and removal of the malware.",
  },
  {
    question:
      "What might be the problem if a host has no valid IP configuration?",
    choices: [
      "The host is configured with an APIPA IPv4 address.",
      "The issue is with the gateway devices.",
      "The problem may be the network connection (for example, the cable of a wired connection or the settings of a wireless connection).",
      "The IP configuration supplied by a DHCP server to a host appears to be good.",
    ],
    answer: "",
    explanation:
      "Explanation: If the host does not have a valid IP configuration, it implies that no IP address has been assigned. Therefore, the problem could be with the network connection itself, such as the cable for a wired connection or the settings for a wireless connection.",
  },
  {
    question:
      "In Windows systems, where can you begin the process of repairing an application?",
    choices: [
      "Network and Sharing Center",
      "Apps & Features in Settings",
      "User Accounts",
      "Security and Maintenance",
    ],
    answer: "",
    explanation:
      "Explanation: To repair an application, you can start in the Apps & Features section located in the Settings of a Windows system. From there, select an app and click on Modify to start the repair process.",
  },
  {
    question: "What can be a symptom of malware on a mobile device?",
    choices: [
      "High network traffic",
      "Normal device response times",
      "Decreased ads",
      "Improved Internet connectivity",
    ],
    answer: "",
    explanation:
      "Explanation: High network traffic on a device can be a symptom of malware. This is because certain types of malware, like Trojans and spyware, can copy data and files from the device and transmit them to the attacker, leading to higher than normal network volumes or bandwidth utilization.",
  },
  {
    question:
      "What are the two primary ways to fix a corrupted user account profile that prevents system login?",
    choices: [
      "Use a system restore point and reboot",
      "Create a new user account and copy the files from the corrupted one to the new one, or fix the user profile settings in the Registry with Regedit",
      "Reinstall the operating system",
      "Run a malware scan and reboot",
    ],
    answer: "",
    explanation:
      "Explanation: The text specifically mentions two methods to fix a corrupted user account profile: creating a new user account to replace the corrupted one, or fixing the user profile settings using a utility called Regedit to manually alter the system Registry.",
  },
  {
    question:
      "What is the function of the Windows Preinstallation Environment (WinPE)?",
    choices: [
      "It is a full-fledged Windows operating system.",
      "It is a management tool for Windows update packages.",
      "It serves as a host for the BIOS/UEFI settings.",
      "It provides access to troubleshooting, diagnostic, and repair tools.",
    ],
    answer: "",
    explanation:
      "Explanation: Windows Preinstallation Environment (WinPE) is a limited graphical OS that provides access to Windows Recovery Environment (WinRE) which includes troubleshooting, diagnostic, and repair tools.",
  },
  {
    question: "What can cause a boot failure in Windows 10/11 systems?",
    choices: [
      "Faulty power supply unit or cable",
      "Configuration, malware, or mechanical issues",
      "Both A and B",
      "Healthy hard drive and proper settings",
    ],
    answer: "",
    explanation:
      "Explanation: A boot failure can be caused by various factors such as hardware faults like a faulty power supply unit or cable, BIOS/UEFI firmware configuration, or Windows system faults. In addition to these, configuration, malware, or mechanical issues can also cause a boot failure.",
  },
  {
    question:
      "How can enterprises prevent the installation of apps from untrusted stores and the use of sideloading on Android devices?",
    choices: [
      "Disabling the \u2019Install unknown apps\u2019 setting",
      "Enabling developer mode",
      "Using mobile device management (MDM) software",
      "Rooting the device",
    ],
    answer: "",
    explanation:
      "Explanation: Mobile Device Management (MDM) software can help to prevent the installation of apps from untrusted sources and restrict the use of sideloading on Android devices in an enterprise environment.",
  },
  {
    question: "What does an APIPA address enable in a host?",
    choices: [
      "Connection only with the local network",
      "Connection only with a DHCP server",
      "Connection with any network beyond the local network",
      "Connection even without a valid IP address",
    ],
    answer: "",
    explanation:
      "Explanation: A host configured with an APIPA IPv4 address can only connect with the local network and not beyond. This is identified if the IP for the host falls between 169.254.0.1 and 169.254.255.254.",
  },
  {
    question:
      "What is a reason for a false alert regarding antivirus protection?",
    choices: [
      "The antivirus program correctly identifies malware.",
      "A third-party password manager alters Windows Registry entries, causing the antivirus program to misidentify it as malicious.",
      "The antivirus program needs an update.",
      "The user installs a new software program.",
    ],
    answer: "",
    explanation:
      "Explanation: A third-party password manager can create executable files and alter Windows Registry entries, making it look a lot like malware or a rootkit, and causing the antivirus program to flag it and create a false positive.",
  },
  {
    question:
      "What could potentially cause the \u2019Screen Does Not Autorotate\u2019 issue on mobile devices?",
    choices: [
      "The autorotate feature is not enabled",
      "The device does not support autorotation",
      "The device is not physically rotated",
      "The device needs an update",
    ],
    answer: "",
    explanation:
      "Explanation: When the autorotate feature is not enabled, the screen won\u2019t change its orientation despite physical rotation of the device.",
  },
  {
    question:
      "What are some of the common issues that can cause a mobile device to randomly restart itself?",
    choices: [
      "Stuck buttons, email apps, and device overheating",
      "Battery disconnection and removal of antivirus",
      "Disabling system services and closing unused apps",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: All the presented options are mentioned in the text as causes for a mobile device to randomly restart itself. This includes stuck buttons, problematic apps like email apps, device overheating, system services being disabled, and disconnection or loose connection of the battery.",
  },
  {
    question:
      "Which of the following issues can cause a mobile device to randomly restart itself?",
    choices: [
      "A faulty charging cable",
      "Poor WiFi connection",
      "Bad app",
      "Static electricity",
    ],
    answer: "",
    explanation:
      "Explanation: A bad app, meaning an app that is poorly constructed, overuses system resources, and is generally unreliable can cause a mobile device to randomly restart. E-mail and text messaging apps often fall into this category.",
  },
  {
    question:
      "What can be useful to troubleshoot the cause of a Blue Screen of Death (BSOD)?",
    choices: [
      "The color of the blue screen",
      "The time when the error happened",
      "The error code displayed on the BSOD",
      "The version of Windows installed",
    ],
    answer: "",
    explanation:
      "Explanation: The error code displayed on the BSOD can be looked up on the Microsoft Support website or using the Windows Event Viewer to view the system log files, which can provide insights into what caused the system error.",
  },
  {
    question:
      "What is a primary reason for Bluetooth connectivity issues on a mobile device?",
    choices: [
      "The Bluetooth service is not in use",
      "Bluetooth devices are limited in range to about 30 feet.",
      "Bluetooth devices emit radio frequency interference.",
      "Bluetooth devices are not sufficient in power.",
    ],
    answer: "",
    explanation:
      "Explanation: As described in the study material, Bluetooth devices are limited in range to about 30 feet. This can lead to connectivity issues if the devices trying to connect are outside this range.",
  },
  {
    question: "Why is an NFC connectivity issue typically encountered?",
    choices: [
      "The NFC sensor is disabled",
      "The mobile device has been unlocked",
      "Airplane mode is not disabled",
      "Payment or identity card is not available",
    ],
    answer: "",
    explanation:
      "Explanation: The primary problem leading to NFC connectivity issues is that the NFC sensor is disabled. Airplane mode being enabled can also cause these issues.",
  },
  {
    question:
      "Why might a general system update fail during a sequence of multiple pending updates?",
    choices: [
      "It\u2019s not dependent on the core system update.",
      "It is applied before the core system updates.",
      "The core system updates are not needed.",
      "The update process occurred randomly.",
    ],
    answer: "",
    explanation:
      "Explanation: A general system update may fail if it\u2019s applied out of sequence and occurs before a core system update which it is dependent on.",
  },
  {
    question:
      "What could be the possible reason for having no cellular or Wi-Fi connectivity, regardless of your location relative to cell towers or Wi-Fi access points (APs)?",
    choices: [
      "The device is close to a low-signal location",
      "The device is in Airplane mode",
      "The network is overloaded",
      "The carrier limits data rates for non-subscribers",
    ],
    answer: "",
    explanation:
      "Explanation: Airplane mode, when enabled, turns off all wireless connections. Thus, regardless of your location relative to cell towers or Wi-Fi access points (APs), if the device is in Airplane mode, you will be unable to connect because all wireless connections are off.",
  },
  {
    question:
      "What does the \u2019Enable Debugging\u2019 option do after you boot into the WinRE recovery system?",
    choices: [
      "Stops the automatic restart after a major failure",
      "Loads a command line for file access",
      "Starts the OS in safe mode",
      "Turns on debugging for the Windows 10/11 kernel",
    ],
    answer: "",
    explanation:
      "Explanation: In the context provided, the \u2019Enable Debugging\u2019 option in the Startup Settings after booting into WinRE enables debugging for the Windows 10/11 kernel. It helps developers to identify, track and resolve issues that may arise.",
  },
  {
    question:
      "What are signs that malware might be running on a mobile device?",
    choices: [
      "High network traffic and data usage",
      "Sluggish response times",
      "Unexpected application behavior",
      "All of the above",
    ],
    answer: "",
    explanation:
      "Explanation: The text lists all these signs as indicators of malware on a device. High network traffic and data usage, sluggish response times, and unexpected application behavior are all symptoms that there might be malware on the device.",
  },
  {
    question:
      "What is often the most common cause of random reboots on a mobile device?",
    choices: [
      "Device overheating",
      "Stuck buttons",
      "Bad app",
      "Battery issues",
    ],
    answer: "",
    explanation:
      "Explanation: Bad apps, or apps that are poorly constructed and use too much system resources, are the most common cause of random reboots on a mobile device.",
  },
  {
    question:
      "Which of the following is an example of power setting that may cause system shutdowns and should be reviewed?",
    choices: [
      "Fast startup",
      "Sleep mode",
      "Minimum Processor State setting in the Processor Power Management group",
      "Processor\u2019s temperature",
    ],
    answer: "",
    explanation:
      "Explanation: The Minimum Processor State setting in the Processor Power Management group could contribute to system shutdowns and should be reviewed and potentially adjusted.",
  },
  {
    question:
      "What could be one reason for Bluetooth connectivity issues on a mobile device?",
    choices: [
      "The Bluetooth device is over a 100 feet away",
      "The Bluetooth device doesn\u2019t need power to connect",
      "The Bluetooth service is always enabled on a mobile device",
      "RF devices emit radio frequency interference that can impede a Bluetooth signal",
    ],
    answer: "",
    explanation:
      "Explanation: Wi-Fi and other RF devices emit radio frequency interference (RFI) that can impede a Bluetooth signal. This could lead to connectivity issues with a mobile device.",
  },
];

export default softwareTroubleshootingQuestions;
