var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const fs = require('fs')

const PythonX = {
  name: 'Python x Minecraft',
  shortDes: "Python is powerful... and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open.",
  longDes: `
Психология человека устроена таким образом, что в играх гораздо больше мотивации, чем в фразе «Ты должен учиться, чтобы у тебя было будущее». Мир меняется и методы преподавания тоже должны. Мы делаем шаг в будущее и начинаем показывать правильные игры, которые учат программировать и развивают творчество, логику, планирование и память.
Данный курс поможет вашему ребенку раскрыть творческий потенциал, разобраться как работает компьютер и научит решать сложные логические задачи, используя один из самых востребованных языков программирования Python. Напишет десятки программ, которые будут взаимодействовать с популярной игрой Minecraft.
Дети узнают, как технически устроена игра Minecraft, познакомятся с теорией алгоритмов, изучат базовые концепции программирования, что откроет им безграничный мир разработки.

Возраст: 10-14 лет
Продолжительность: 1 месяц
 `,
  styles: {
    backgroundColor: '#fdc02f',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='304' height='304' viewBox='0 0 304 304' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M44.1 224c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H0v-2h44.1zm160 48c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H82v-2h122.1zm57.8-46c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H304v2h-42.1zm0 16c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H304v2h-42.1zm6.2-114c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4h-86.2c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h86.2zm-256-48c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H0v-2h12.1zm185.8 34c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h86.2c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4h-86.2zM258 12.1c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9V0h2v12.1zm-64 208c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9v-54.2c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9v54.2zm48-198.2c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V82h64v-2h-62V21.9zm16 16c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V66h48v-2h-46V37.9zm-128 96c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V210h16v10.1c-2.282.463-4 2.48-4 4.9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.42-1.718-4.437-4-4.9V208h-16v-74.1zm-5.9-21.9c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H114v48H85.9c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H112v-48h12.1zm-6.2 130c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H176v-74.1c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9V242h-60.1zm-16-64c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H114v48h10.1c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H112v-48h-10.1zM66 284.1c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9V274H50v30h-2v-32h18v12.1zM236.1 176c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H274v44.1c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9V146h-10.1zm-64 96c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H208v-80h16v-14h-42.1c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H226v18h-16v80h-12.1zm86.2-210c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H272V0h2v32h10.1zM98 101.9c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V144H53.9c-.463-2.282-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.437-1.718 4.9-4H98v-44.1zM53.9 34c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H80V0h2v34H53.9zm60.1 3.9c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V64H80v64H69.9c-.463-2.282-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.437-1.718 4.9-4H82V66h32V37.9zM101.9 82c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H128V37.9c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9V82h-28.1zm16-64c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H146v44.1c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9V18h-26.1zm102.2 270c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H98v14h-2v-16h124.1zM242 149.9c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V162h16v30h-16v66h48v46h2v-48h-48v-62h16v-34h-16v-10.1zM53.9 18c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H64V2H48V0h18v18H53.9zm112 32c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H192V0h50v2h-48v48h-28.1zm-48-48c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5 0-.342.034-.677.1-1h2.07c-.11.313-.17.65-.17 1 0 1.657 1.343 3 3 3s3-1.343 3-3c0-.35-.06-.687-.17-1H178v34h-18V21.9c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9V32h14V2h-58.1zm0 96c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H137l32-32h39V21.9c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9V66h-40.172l-32 32H117.9zm28.1 90.1c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9v-76.513L175.586 80H224V21.9c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9V82h-49.586L146 112.414V188.1zm16 32c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9v-99.513L184.586 96H300.1c.398-1.96 1.94-3.502 3.9-3.9v2.07c-1.165.413-2 1.524-2 2.83s.835 2.417 2 2.83v2.07c-1.96-.398-3.502-1.94-3.9-3.9H185.414L162 121.414V220.1zm-144-64c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9v-3.513l48-48V48h32V0h2v50H66v55.413l-48 48v2.687zM50 53.9c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9v42.686l-48 48V210h28.1c.463 2.282 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.437 1.718-4.9 4H2v-62.586l48-48V53.9zm-16 16c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9v18.686l-32 32v2.828l34-34V69.9zM12.1 32c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H9.414L0 43.414v-2.828L8.586 32H12.1zm265.8 18c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h18.686L304 40.586v2.828L297.414 50H277.9zm-16 160c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H288V136.587l16-16v2.827l-14 14V210h-28.1zm-208 32c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H64v-22.586L40.586 194H21.9c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h19.513L66 216.586V242H53.9zm150.2 14c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H96v-56.598L56.598 162H37.9c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h19.502L98 200.598V256h106.1zm-150.2 2c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H80v-46.586L48.586 178H21.9c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h27.513L82 208.586V258H53.9zM97 100c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-48 32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32 48c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16-64c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 96c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-144c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-96 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm96 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16-64c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-32 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM49 36c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-32 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM33 68c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-48c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 240c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16-64c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm80-176c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32 48c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm112 176c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM17 180c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM17 84c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32 64c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 39.793V0h-2v40.586L8.586 64H0v2h9.413L34 41.414v-1.62zM2 300.1V258h14v46h2v-48H0V302.17c.313-.11.65-.17 1-.17 1.306 0 2.417.835 2.83 2H5.9c-.398-1.96-1.94-3.502-3.9-3.9zM34 241v63h-2v-62H0v-2h34v1zM17 18h1V0h-2v16H0v2h17zm273-2V0h-2v18h16v-2h-14zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1c.323-.066.658-.1 1-.1 2.76 0 5 2.24 5 5s-2.24 5-5 5c-.342 0-.677-.034-1-.1v-2.07c.313.11.65.17 1 .17 1.657 0 3-1.343 3-3s-1.343-3-3-3c-.35 0-.687.06-1 .17V92.1zM80 272h2v32h-2v-32zm37.9 32c-.463-2.282-2.48-4-4.9-4-2.42 0-4.437 1.718-4.9 4h2.07c.413-1.165 1.524-2 2.83-2s2.417.835 2.83 2h2.07zM5.9 0c.066.323.1.658.1 1 0 2.76-2.24 5-5 5-.342 0-.677-.034-1-.1V3.83C.313 3.94.65 4 1 4c1.657 0 3-1.343 3-3 0-.35-.06-.687-.17-1H5.9zm294.2 0c-.066.323-.1.658-.1 1 0 2.42 1.718 4.437 4 4.9V3.83c-1.165-.413-2-1.524-2-2.83 0-.35.06-.687.17-1h-2.07zm3.9 300.1c-1.96.398-3.502 1.94-3.9 3.9h2.07c.302-.852.978-1.528 1.83-1.83v-2.07z' fill='%231378bb' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
},
  URL: '/courses/Python%20x%20Minecraft',
  badges: [],
  courseBadgeUrl:'/static/images/courses/PythonXMine.png',
  imgURL: "/static/images/PythonXMine.png",
  projectURLs: [""],
  skills: [{ name: "Python", imgURL: "Python.png" }],
  instructors: ["Sanjar", "Maksat"]

   }
const Unity = {
  name: 'Unity',
  shortDes: "Хватит играть – начни создавать",
  longDes: `
Добро пожаловать в мир разработки компьютерных игр на профессиональном современном движке Unity 3D. На курсе ты узнаешь как устроена игра, из каких логических элементов состоит и как проектировать и создавать 2D и 3D игры.
С первого занятия мы будем создавать игровые проекты, изучая функции платформы Unity и параллельно знакомясь с языком программирования C#.
В конце курса у каждого ученика будет готово несколько игровых проектов, в которые он сможет играть на своих устройствах со своими друзьями, а также изменять и дорабатывать вне занятий.

Популярность Unity3D легко объяснить.
Во-первых, этот движок позволяет создавать игры "под ключ": он объединяет инструменты для визуальной компоновки игры и программирования.
Во-вторых, он бесплатный. 
В-третьих, он кроссплатформенный: поддерживает PC, PlayStation 3-4, Xbox 360, Xbox One, Windows Phone, iOS, Android.

Мы рекомендуем курс по Unity3D каждому ученику от 12 лет, потому что на занятиях он:

•	узнает, что такое движок и как он работает;
•	познакомится с популярным игровым движком Unity3D;
•	освоит на практике основные принципы создания трехмерных игр;
•	создаст собственную трехмерную сцену игры и проработает ее во всех деталях: от объектов до освещения.
Научится использовать инструмент, с помощью которого профессиональные программисты в ведущих мировых студиях создают знаменитые игры.


Возраст 12 – 19 лет
Продолжительност: 3 месяца
C# - первый месяц
Unity – второй-третий месяцы
  `,
  URL: '/courses/Unity',
  badges: [''],
    styles: {
    backgroundColor: '#8d6c9f',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23ed7899' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
  },
  courseBadgeUrl:'/static/images/courses/Unity.png',
  imgURL: "/static/images/Unity.png",
  projectURLs: [""],
  skills: [{ name: "JavaScript", imgURL: "JavaScript.png" }],
  instructors: ["Sanjar", "Maksat"]

   }
const Java = {
  name: 'Java x Android',
  shortDes: "Создай приложение, которое изменит мир",
  longDes: `
Почти каждый человек ежедневно пользуется мобильными приложениями — мессенджерами, почтой, навигатором, мобильным банком. В бизнесе наличие приложения становится такой же необходимостью, как наличие сайта. Поэтому с каждым годом растет спрос на профессиональных мобильных разработчиков.
На занятиях этого курса ученики изучит основы разработки под ОС Android и смогут разработать собственное мобильное приложение на языке программирования java.
По окончанию курса, ученики при помощи преподавателей,  начинают работу над своими проектами.
Мы рекомендуем курс каждому ученику от 14-19 лет, потому что на занятиях он:

•	научится программировать под Android;
•	создаст собственное мобильное приложение;
•	узнает, как создать удобный мобильный интерфейс.
•	попробует себя в роли настоящего мобильного разработчика
Лучшие проекты будут опубликованы в Play Market

Возраст 14 – 19 лет
Продолжительност: 3,5 месяцa
  `,
  URL: '',
  badges: [''],
  courseBadgeUrl:'/static/images/courses/Java.png',
  styles: {
    backgroundColor: '#8d6c9f',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23ed7899' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
    
  },
  imgURL: "/static/images/Java.png",
  projectURLs: [""],
  skills: [{ name: "Java", imgURL: "Java.png" }],
  instructors: ["Sanjar", "Maksat"]

}

// var insertDocument = function(db, callback) {
//    db.collection('courses').insertOne(Java, function(err, result) {
//     assert.equal(err, null);
//     console.log("Inserted a document into the restaurants collection.");
//     console.log("The _id of the inserted document is "+result.insertedId);
//     callback();
//   });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   insertDocument(db, function() {
//       db.close();
//   });
// });
const courses = {
  PythonX,
  Unity,
  Java,
}

fs.writeFile('../src/server/mockData.json', JSON.stringify(courses), (err) => {
  console.log(err)
})
