.mode csv
.import CarScore.csv carscore
.import CarScore.csv together
.import Cars.csv cars
.import data1.csv data

create table end (car_id, year, make, model, score, rank);

insert into end (car_id, year, make, model, score, rank) select car_id, year, make, model, Racer_Turbo + Racer_Supercharged + Racer_Performance + Racer_Horsepower + Car_Overall + Engine_Modifications + Engine_Performance + Engine_Chrome + Engine_Detailing + Engine_Cleanliness + Body_Frame_Undercarriage + Body_Frame_Suspension + Body_Frame_Chrome + Body_Frame_Detailing + Body_Frame_Cleanliness + Mods_Paint + Mods_Body + Mods_Wrap + Mods_Rims + Mods_Interior + Mods_Other + Mods_ICE + Mods_Aftermarket + Mods_WIP + Mods_Overall, rank() over(order by total desc) from together;

create table judge1 (id, name, start, end, duration, average);
insert into judge1 (id, name, start, average) select distinct judge_id, judge_name, time, avg(time)  from data where judge_id = 'J01' order by time asc limit 1;
insert into judge1 (end) select time from data where judge_id = 'J01'order by time desc limit 1;
insert into judge1 (duration) select start - end from judge1;

create table judge2 (id, name, start, end, duration, average);
insert into judge2 (id, name, start, average) select distinct judge_id, judge_name, time, avg(time)  from data where judge_id = 'J02' order by time asc limit 1;
insert into judge2 (end) select time from data where judge_id = 'J02'order by time desc limit 1;
insert into judge2 (duration) select start - end from judge2;

create table judge3 (id, name, start, end, duration, average);
insert into judge3 (id, name, start, average) select distinct judge_id, judge_name, time, avg(time)  from data where judge_id = 'J03' order by time asc limit 1;
insert into judge3 (end) select time from data where judge_id = 'J03'order by time desc limit 1;
insert into judge3 (duration) select start - end from judge3;

create table judge4 (id, name, start, end, duration, average);
insert into judge4 (id, name, start, average) select distinct judge_id, judge_name, time, avg(time)  from data where judge_id = 'J04' order by time asc limit 1;
insert into judge4 (end) select time from data where judge_id = 'J04'order by time desc limit 1;
insert into judge4 (duration) select start - end from judge4;

create table judge5 (id, name, start, end, duration, average);
insert into judge5 (id, name, start, average) select distinct judge_id, judge_name, time, avg(time)  from data where judge_id = 'J05' order by time asc limit 1;
insert into judge5 (end) select time from data where judge_id = 'J05'order by time desc limit 1;
insert into judge5 (duration) select start - end from judge5;

create table judge6 (id, name, start, end, duration, average);
insert into judge6 (id, name, start, average) select distinct judge_id, judge_name, time, avg(time)  from data where judge_id = 'J06' order by time asc limit 1;
insert into judge6 (end) select time from data where judge_id = 'J06'order by time desc limit 1;
insert into judge6 (duration) select start - end from judge6;

create table judge8 (id, name, start, end, duration, average);
insert into judge8 (id, name, start, average) select distinct judge_id, judge_name, time, avg(time)  from data where judge_id = 'J08' order by time asc limit 1;
insert into judge8 (end) select time from data where judge_id = 'J08'order by time desc limit 1;
insert into judge8 (duration) select start - end from judge8;

create table judge9 (id, name, start, end, duration, average);
insert into judge9 (id, name, start, average) select distinct judge_id, judge_name, time, avg(time)  from data where judge_id = 'J09' order by time asc limit 1;
insert into judge9 (end) select time from data where judge_id = 'J09'order by time desc limit 1;
insert into judge9 (duration) select start - end from judge9

insert into news (car_id, make, score, rank) select car_id, make, score, rank from end;

 create table Audi (rank, make, car_id, score);
 insert into Audi select * from news where make = 'Audi' order by rank asc limit 3;

 create table Chrystler (rank, make, car_id, score);
 insert into Chrystler select * from news where make = 'Chrystler' order by rank asc limit 3;

create table Nissan  (rank, make, car_id, score);
insert into Nissan select * from news where make = 'Nissan' order by rank asc limit 3;

create table Honda (rank, make, car_id, score);
insert into Honda select * from news where make = 'Honda' order by rank asc limit 3;

create table Volkswagen (rank, make, car_id, score);
insert into Volkswagen select * from news where make = 'Volkswagen' order by rank asc limit 3;

 create table Acura (rank, make, car_id, score);
 insert into Acura select * from news where make = 'Acura' order by rank asc limit 3;

 create table Scion (rank, make, car_id, score);
 insert into Scion select * from news where make = 'Scion' order by rank asc limit 3;

create table Dodge (rank, make, car_id, score);
insert into Dodge select * from news where make = 'Dodge' order by rank asc limit 3;

create table Bmw (rank, make, car_id, score);
insert into Bmw select * from news where make = 'Bmw' order by rank asc limit 3;

create table Subaru (rank, make, car_id, score);
insert into Subaru select * from news where make = 'Subaru' order by rank asc limit 3;

create table Mercedes (rank, make, car_id, score);
insert into Mercedes select * from news where make = 'Mercedes' order by rank asc limit 3;

create table Hyundai (rank, make, car_id, score);
insert into Hyundai select * from news where make = 'Hyundai' order by rank asc limit 3;

create table Lexus (rank, make, car_id, score);
insert into Lexus select * from news where make = 'Lexus' order by rank asc limit 3;

create table Chevy (rank, make, car_id, score);
insert into Chevy select * from news where make = 'Chevy' order by rank asc limit 3;

create table Toyota (rank, make, car_id, score);
insert into Toyota select * from news where make = 'Toyota' order by rank asc limit 3;

 create table Ford (rank, make, car_id, score);
 insert into Ford select * from news where make = 'Ford' order by rank asc limit 3;

 create table Mazda (rank, make, car_id, score);
  insert into Mazda select * from news where make = 'Mazda' order by rank asc limit 3;

  create table Mitsu (rank, make, car_id, score);
  insert into Mitsu select * from news where make = 'Mitsu' order by rank asc limit 3;

   create table Infiniti (rank, make, car_id, score);
    insert into Infiniti select * from news where make = 'Infiniti' order by rank asc limit 3;

create table Volvo (rank, make, car_id, score);
 insert into Volvo select * from news where make = 'Volvo' order by rank asc limit 3;

 create table Jeep (rank, make, car_id, score);
  insert into Jeep select * from news where make = 'Jeep' order by rank asc limit 3;
