-- SQL script to initialize MariaDB with portfolio data

CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

-- Table definitions
CREATE TABLE IF NOT EXISTS Experience (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role VARCHAR(191) NOT NULL,
  company VARCHAR(191) NOT NULL,
  start DATE NOT NULL,
  end DATE,
  summary TEXT NOT NULL,
  highlights TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Education (
  id INT AUTO_INCREMENT PRIMARY KEY,
  school VARCHAR(191) NOT NULL,
  degree VARCHAR(191) NOT NULL,
  start DATE NOT NULL,
  end DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS Skill (
  id INT AUTO_INCREMENT PRIMARY KEY,
  `group` VARCHAR(191) NOT NULL,
  items TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Project (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(191) NOT NULL UNIQUE,
  title VARCHAR(191) NOT NULL,
  description TEXT NOT NULL,
  cover VARCHAR(191) NOT NULL,
  problem TEXT NOT NULL,
  approach TEXT NOT NULL,
  result TEXT NOT NULL,
  lessons TEXT NOT NULL,
  liveUrl VARCHAR(191),
  repoUrl VARCHAR(191)
);

CREATE TABLE IF NOT EXISTS Metric (
  id INT AUTO_INCREMENT PRIMARY KEY,
  projectId INT NOT NULL,
  label VARCHAR(191) NOT NULL,
  value VARCHAR(191) NOT NULL,
  FOREIGN KEY (projectId) REFERENCES Project(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Testimonial (
  id INT AUTO_INCREMENT PRIMARY KEY,
  quote TEXT NOT NULL,
  name VARCHAR(191) NOT NULL,
  role VARCHAR(191) NOT NULL,
  company VARCHAR(191) NOT NULL,
  avatar VARCHAR(191) NOT NULL
);

-- Insert data
INSERT INTO Experience (role, company, start, end, summary, highlights) VALUES
('Project Manager Software and Digitalisation', 'Telsonic Ultrasonics', '2025-07-01', NULL, 'Creating customer specific workflows and internal projects', '["Creating customer specific workflows.","Implementing company intern software projects to increase efficiency.","Adjusting post-setup automation workflows for customers","The link between customer and software, to ensure smooth communication and project success."]'),
('Software Developer Apprentice', 'InnoForce EST', '2022-08-01', '2024-07-31', '.NET development and third-party module integration', '[".NET development and third-party module integration","Implemented test automation templates","Synchronized medical data across multiple locations","Evaluated medical databases in France"]'),
('Electrical Planner', 'Lepcon GmbH', '2021-06-01', '2022-08-31', 'Managed electrotechnical planning and procurement', '["Managed electrotechnical planning and procurement","Coordinated electrical revisions of 150+ sites"]');

INSERT INTO Education (school, degree, start, end) VALUES
('Berufsmatura TALS', 'Berufsmatura TALS', '2024-08-01', '2025-07-31'),
('WISS St. Gallen', 'EFZ in Computer Science, Application Development', '2022-08-01', '2024-07-31'),
('GBS St. Gallen', 'EFZ in Electrical Planning', '2018-08-01', '2022-07-31');

INSERT INTO Skill (`group`, items) VALUES
('Programming Languages', 'C#, Java, JavaScript, Python'),
('Frameworks & Tools', '.NET 8, WPF, Android Studio, PySide6, QtWebEngine'),
('Languages', 'English – C1 Advanced (Cambridge); German – Native');

INSERT INTO Project (slug, title, description, cover, problem, approach, result, lessons, liveUrl, repoUrl) VALUES
('database-migration', 'Database Migration in France', 'Led GDPR-compliant migration of a medical database for InnoForce EST.', 'https://placehold.co/600x400?text=Project+Cover', 'Customer wasnt satisfied with the existing database solution.', 'Analysed the current database structure and created a migration plan.', 'Successfully migrated the database with zero downtime and improved performance and customer satisfaction.', 'Thorough documentation and testing are crucial for successful migrations.', NULL, NULL),
('mansion-project', 'Mansion Project', 'Led and coordinated the implementation of a large-scale project infrastructure for a luxury mansion.', 'https://placehold.co/600x400?text=Project+Cover', 'Customer wished for a complex automation solution.', 'Suggested multiple different approaches, designs and technologies.', 'Successfully implemented a robust automation solution that met all customer requirements.', 'Collaboration and clear communication with stakeholders are key to project success.', NULL, NULL),
('property-management-energy-monitoring', 'Property Management & Energy Monitoring', 'Developed a solution for self-use of solar power and installation of e-mobility', 'https://placehold.co/600x400?text=Project+Cover', 'Customer wished for a comprehensive energy management solution.', 'Conducted a thorough analysis of energy consumption patterns and proposed tailored solutions.', 'Successfully implemented a system for self-use of solar power and e-mobility integration.', 'Understanding customer needs and providing customized solutions is crucial.', NULL, NULL),
('motocom-app', 'Motocom App', 'Developed an app for motorcycle enthusiasts to track their rides and connect with other riders.', 'https://placehold.co/600x400?text=Project+Cover', 'No easy combined way to track rides and connect with other riders.', 'Conducted user research to identify key features and developed a user-friendly interface.', 'Still in development.', 'n/a', NULL, NULL),
('multiscreenkiosk-app', 'MultiScreenKiosk App', 'Developed an app for displaying multiple applications and browser instances on a single screen.', 'https://placehold.co/600x400?text=Project+Cover', 'No easy way to manage and display multiple applications simultaneously for events and presentations.', 'Developed a user-friendly interface for managing multiple applications.', 'Works with multiple additional features implemented and planned.', 'Thorough testing and user feedback are essential for successful multi-app management.', NULL, 'https://github.com/sxwxbxr/MultiScreenKiosk');

SET @proj1 = (SELECT id FROM Project WHERE slug = 'database-migration');
INSERT INTO Metric (projectId, label, value) VALUES
(@proj1, 'Users', '300+'),
(@proj1, 'Increased uniformity', '50%');

SET @proj2 = (SELECT id FROM Project WHERE slug = 'mansion-project');
INSERT INTO Metric (projectId, label, value) VALUES
(@proj2, 'Different technologies', '10-15'),
(@proj2, 'Uptime', '99.9%');

SET @proj3 = (SELECT id FROM Project WHERE slug = 'property-management-energy-monitoring');
INSERT INTO Metric (projectId, label, value) VALUES
(@proj3, 'Properties', '200+'),
(@proj3, 'Energy Saved', '30%');

SET @proj4 = (SELECT id FROM Project WHERE slug = 'motocom-app');
INSERT INTO Metric (projectId, label, value) VALUES
(@proj4, 'Users', 'n/a'),
(@proj4, 'Rides Tracked', 'n/a');

SET @proj5 = (SELECT id FROM Project WHERE slug = 'multiscreenkiosk-app');
INSERT INTO Metric (projectId, label, value) VALUES
(@proj5, 'Users', '~10'),
(@proj5, 'Instances Managed', '4 per page');

INSERT INTO Testimonial (quote, name, role, company, avatar) VALUES
('Seya Weber proved to be a reliable and diligent intern with strong analytical skills: he supported the installation, testing, and migration of medical database solutions and developed an application for the automated processing of patient questionnaires, which is already in productive use at major ENT clinics', 'Christoph Wille', 'CEO', 'InnoForce Est.', 'https://placehold.co/100x100?text=Avatar'),
('Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'John Smith', 'CTO', 'Tech Corp.', 'https://placehold.co/100x100?text=Avatar');

