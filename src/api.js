const diplomas = [
  {
    name: 'Information Technology',
    id: 'R47',
    modules: [
      {
        name: 'UI/UX Design for Apps',
        id: 'C218',
        desc: 'Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module. Students will also gain the skills to offer users an intuitive and responsive experience as they design UI for software platforms on both web and mobile devices. Through this module, students will also learn how to create interactive prototypes using prototyping tools.',
        assigned: {
          name: 'Azhar Kamar',
          position: 'Lecturer'
        }
      },
      {
        name: 'Mobile App Development',
        id: 'C346',
        desc: 'In this module, students will learn the basics of creating Android Applications. They will learn about user interface implementation issues such as layout, notifications and dialogues as well as the logic and data management (databases, services, GPS, multi-threading, etc.) using the Java programming language.',
        assigned: {
          name: 'Derek Lee',
          position: 'Lecturer'
        }
      },
    ]
  },
  {
    name: 'Financial Technology',
    id: 'R18',
    modules: [
      {
        name: 'Software Application Development',
        id: 'C237',
        desc: 'This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms. Students will employ both front-end and back-end software frameworks, programming languages and libraries to design and develop an application that has both role-based authentication and functionality. These functionalities will involve the creation, retrieval, updating, and deletion of data from databases. Students will also learn to test and deploy software applications.',
        assigned: {
          name: 'Hannah Lim',
          position: 'Lecturer'
        }
      },
      {
        name: 'Payment Technologies',
        id: 'C372',
        desc: 'This module introduces students to different payment technologies and systems. Students will learn to apply or integrate these payment technologies and systems via a web application. For the latter, students will develop a web application, integrated with front-end and/or back-end payment modules. The development of this web application will involve students using various payment application programming interfaces (APIs) to facilitate or implement the payment process.',
        assigned: {
          name: 'Magdalene Lim',
          position: 'Senior Lecturer'
        }
      },
    ]
  },
  {
    name: 'Applied AI & Analytics',
    id: 'R13',
    modules: [
      {
        name: 'DevOps Fundamentals',
        id: 'C270',
        desc: 'This module covers the fundamentals of DevOps approaches that bridge the gap between software developers and IT operations teams through a practical and hands-on approach. Students will work with front-end deployment and back-end codes and manage hosts for both monitoring and scaling. Automation workflow tools such as Git, Docker, Jenkins, and other open-source tools will be used to illustrate continuous integration and continuous deployment in this module.',
        assigned: {
          name: 'Sharmila Kanna',
          position: 'Senior Lecturer'
        }
      },
      {
        name: 'Cloud Computing Essentials',
        id: 'C229',
        desc: 'This module covers the fundamentals concepts of cloud computing through a practical and hands-on approach. Students will explore the different cloud computing models and components, Students will learn the practical aspects of cloud computing using widely available cloud platform and by the end of the module, students will be able to configure and build secure cloud infrastructure.',
        assigned: {
          name: 'William Kwok',
          position: 'Senior Lecturer'
        }
      },
    ]
  }
];

export function getModules({ moduleId, dipId }) {
  return diplomas
    .find(({ id }) => id === dipId)
    .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(dipId) {
  return diplomas.find(({ id }) => id === dipId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}
