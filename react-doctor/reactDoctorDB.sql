CREATE TABLE `hospital` (
  `id` integer UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
);

CREATE TABLE `doctors` (
  `id` integer UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `img` varchar(255),
  `presentation` varchar(255),
  `email` varchar(255),
  `hospital_id` int
);

CREATE TABLE `patients` (
  `id` integer UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `email` varchar(255),
  `doctor_id` int,
  `departement_id` int
);

CREATE TABLE `departement` (
  `id` integer UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `specialite` varchar(255),
  `img` varchar(255),
  `presentation` varchar(255),
  `doctor_id` int,
  `patient_id` int,
  `hospital_id` int
);

CREATE TABLE `rendezvous` (
  `id` integer UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `created_at` timestamp,
  `message` varchar(255),
  `rdv_date` date,
  'rdv_duration' int, 
  `patient_id` int,
  `departement_id` int,
  `doctor_id` int
);

ALTER TABLE `hospital` ADD FOREIGN KEY (`id`) REFERENCES `departement` (`hospital_id`);

ALTER TABLE `departement` ADD FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`);

ALTER TABLE `doctors` ADD FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`id`);

ALTER TABLE `patients` ADD FOREIGN KEY (`id`) REFERENCES `rendezvous` (`patient_id`);

ALTER TABLE `departement` ADD FOREIGN KEY (`id`) REFERENCES `rendezvous` (`departement_id`);

ALTER TABLE `doctors` ADD FOREIGN KEY (`id`) REFERENCES `rendezvous` (`doctor_id`);

ALTER TABLE `doctors` ADD FOREIGN KEY (`id`) REFERENCES `patients` (`doctor_id`);

ALTER TABLE `departement` ADD FOREIGN KEY (`id`) REFERENCES `patients` (`departement_id`);
