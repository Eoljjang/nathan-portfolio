// Add your professional experience items here.
// This section is for work you've done at companies (no links/images needed).
export const experience = [
  {
    id: 1,
    company: 'PulseMedica',
    role: 'Software Developer Intern',
    location: 'Edmonton, AB (In-person)',
    start: '05/2025',
    end: '12/2025',
    summary:
      'Supported the development of a medical device software application, as well as external tools and interfaces for the company.',
    work: [
      {
        title: 'Launcher Application',
        description:
          'Independently developed a user-facing launcher that allowed users to launch the main medical device app. Also included diagnostic tools, an interactive terminal, configuration settings, and data export to Jira & Google Drive.  ',
        technologies: ['React', 'TypeScript', 'Electron',],
      },
      {
        title: 'Embedded Software Device Integration',
        description:
          'Integrated a microcontroller embedded system device into our full-stack application to provide live device diagnostics. ',
        technologies: ['C', 'C++', 'gRPC', 'React'],
      },
    ],
  },
  {
    id: 2,
    company: 'PulseMedica',
    role: 'Software Quality Assurance Intern',
    location: 'Edmonton, AB',
    start: '09/2024',
    end: '05/2025',
    summary:
      'Contributed to QA testing efforts and took initiative in pushing automated workflows.',
    work: [
      {
        title: 'Automated UI Testing',
        description:
          'Developed the company`s first automated UI testing for critical ophthalmology applications, achieving a 4x increase in testing throughput. Had reports automatically generated on a nightly basis sent to key stakeholders.',
        technologies: ['GitHub Actions', "TestComplete", "Bash & Python Scripting",],
      },
    ],
  },
]

