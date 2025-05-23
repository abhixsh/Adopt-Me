SHOW DATABSE;

CREATE DATABASE adoptme;

USE adoptme;

CREATE TABLE pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    date_found DATE,
    type VARCHAR(50),
    breed VARCHAR(100),
    age FLOAT,
    gender VARCHAR(10),
    size VARCHAR(20),
    location VARCHAR(100),
    description TEXT,
    main_photo TEXT,
    contact_name VARCHAR(100),
    contact_phone VARCHAR(20),
    contact_email VARCHAR(100)
);


INSERT INTO pets 
(name, date_found, type, breed, age, gender, size, location, description, main_photo, contact_name, contact_phone, contact_email)
VALUES 
('Neo', '2025-05-19', 'Dog', 'Sri Lankan Pariah', 3.0, 'Male', 'Medium', 'Colombo', 
'Neo is a loyal Sri Lankan Pariah dog. He is alert and loves to protect his family. He was rescued from the streets and is now looking for a loving home where he can feel safe and happy.', 
'https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F1oihotr0nxa91.jpg', 'Nimal Perera', '0772345678', 'nimal.p@gmail.com');

INSERT INTO pets 
(name, date_found, type, breed, age, gender, size, location, description, main_photo, contact_name, contact_phone, contact_email)
VALUES 
('Mira', '2025-05-18', 'Cat', 'Domestic Short Hair', 1.5, 'Female', 'Small', 'Kandy', 
'Mira is a friendly house cat with soft white fur. She enjoys playing with toys but also loves quiet time on your lap. She is fully vaccinated and gets along well with other pets. Mira wants a calm home where she can be loved.', 
'https://c1.wallpaperflare.com/preview/161/741/106/cat-animal-pet-feline.jpg', 'Ishara Madushani', '0763456789', 'ishara.m@gmail.com');

INSERT INTO pets 
(name, date_found, type, breed, age, gender, size, location, description, main_photo, contact_name, contact_phone, contact_email)
VALUES 
('Zeus', '2025-05-17', 'Dog', 'Rottweiler', 4.0, 'Male', 'Large', 'Negombo', 
'Zeus is a strong and loving Rottweiler. He is protective of his family and enjoys outdoor activities. He needs a home with a large yard where he can run and play. Zeus has been trained and is looking for a caring owner.', 
'https://petshop.lk/storage/files/lk/11/thumb-816x460-d950d297663790f0877ffe76f0c4c706.jpg', 'Kasun Jayasuriya', '0754567890', 'kasun.j@gmail.com');

INSERT INTO pets 
(name, date_found, type, breed, age, gender, size, location, description, main_photo, contact_name, contact_phone, contact_email)
VALUES 
('Luna', '2025-05-16', 'Cat', 'Domestic Long Hair', 2.0, 'Male', 'Medium', 'Galle', 
'Luna is a calm and gentle long-haired cat. He loves resting in sunny spots and enjoys being around children. He is healthy and litter-trained. Luna was rescued and is hoping to find a warm and loving family.', 
'https://www.guildinsurance.com.au/images/librariesprovider3/breed-images/500x500/domestic-longhair-(1)-(1).jpg?sfvrsn=308c650b_2', 'Anoma Ranasinghe', '0781234567', 'anoma.r@gmail.com');

INSERT INTO pets 
(name, date_found, type, breed, age, gender, size, location, description, main_photo, contact_name, contact_phone, contact_email)
VALUES 
('Coco', '2025-05-15', 'Rabbit', 'White Angora', 1.0, 'Female', 'Small', 'Kurunegala', 
'Coco is a gentle and clean Angora rabbit. She loves to be brushed and enjoys quiet time indoors. Coco is healthy and would make a great pet for a calm home. She is waiting for someone to care for her.', 
'https://theeartinme.com/wp-content/uploads/2022/01/MusicBunn.jpg', 'Dilshan Fernando', '0747894561', 'dilshan.f@gmail.com');


SELECT * FROM pets;
