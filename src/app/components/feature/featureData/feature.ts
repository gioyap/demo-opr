export const features = [
    {
      title: "Superadmin Account Management",
      description:
        "The Superadmin has the exclusive ability to create Head Radiologic Technologist (HRT) accounts. This is the only way to register an HRT, while Radiologic Technologists (Radtechs) and Doctors can sign in using their Google accounts.",
      image: "/hrt_user.png",
      reverse: false,
    },
    {
      title: "Department Creation & Invitation System",
      description:
        "The HRT can create departments and generate unique invite codes. These codes can be shared with Doctors and Radtechs, allowing them to join and access the department securely.",
      image: "/hrt_dept.png",
      reverse: true,
    },
    {
      title: "Radiologic Technologist Access & Patient Management",
      description:
        "Once a Radtech enters the invite code, they gain access to the department. They can then perform CRUD operations, including adding and managing patient information.",
      image: "/radtech_feat.png",
      reverse: false,
    },
    {
      title: "Doctor Access & Diagnosis Management",
      description:
        "After entering the invite code, Doctors can access the department. Their primary role is to review patient records and input diagnoses for each patient.",
      image: "/doctor_feat.png",
      reverse: true,
    },
  ];
  