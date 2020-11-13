insert into users(first_name, last_name, email)
values
('John', 'Marks', 'jm@mail.com'),
('Lisa', 'Simons', 'lisa@mail.com'),
('Peter', 'Jakobs', 'pitjak@mail.com'),
('Michael', 'Fincher', 'mitch@mail.com'),
('David', 'Black', 'davidblack@mail.com');

insert into programs (title, short_description, description, owner_id)
values
(
'Kettlebell Workout Circuits',
'Short description goes here',
'8 Halos (each side), 10 Goblet Squats, 8 Overhead Presses (each side), 15 Kettlebell Swings, 8 Bent Over Rows (each side),
6 Front Rack Reverse Lunge (per side)',
1
),
(
'NF beginner barbell',
'Short description goes here',
'10 barbell squats, 10 push-ups, 10 bodyweight rows',
1
),
(
'Beginner nerd fitness bumbbell workout',
'Short description goes here',
'10 goblet squats, 10 push-ups, 10 dumbbell rows per side',
2
),
(
'Beginner Bodyweight Workout',
'Short description goes here',
'20 body weight squats, 10 push ups, 20 walking lunges, 10 dumbbell rows (using a gallon milk jug), 15 second plank,
30 jumping Jacks, Repeat for 3 rounds',
3
),
(
'Beginner nerd fitness kettlebell',
'Short description goes here',
'5 barbell Romanian deadlifts, 10 push-ups, 10 dumbbell rows per arm',
4
),
(
'Barbell training',
'Short description goes here',
'10 barbell squats, 10 push-ups, 10 bodyweight rows',
5
);

insert into user_roles (name)
values ('coach'), ('athlete');

insert into users_programs(user_id, program_id, role_id)
values (1, 2, 2), (2, 1, 2), (3, 4, 2), (4, 5, 2), (5, 1, 2);
