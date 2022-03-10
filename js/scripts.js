/*!
 * Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

class Work {
  constructor(yearFrom, workPlace, workTitle, workexperience) {
    this.yearFrom = yearFrom;
    this.workPlace = workPlace;
    this.workTitle = workTitle;
    this.workexperience = workexperience;
  }
}

const WorkPlaceone = new Work(
  "2018 - DD",
  "AXA AS ",
  "Eier/ Utleid som konsulent",
  "Ansvar for finansiell rådgivning, dokumentkontroll, fakturering og digital markedsføring."
);

const WorkPlacetwo = new Work(
  "Nov.2015 – Mai.2018",
  "Ecofleet Norge AS / Fleet Complete Norge AS ",
  "Regnskapsmedarbeider/Administrasjon",
  "Ansvar for finansiell rådgivning, dokumentkontroll, fakturering og digital markedsføring."
);

const WorkPlacethree = new Work(
  "Sep.2015 - Nov.2015",
  "Arbeidssøker",
  "Arbeidssøker",
  " "
);

const WorkPlacefour = new Work(
  "Sep.2014 – Sep.2015",
  "CBA Vestfold AS",
  "Vikariat - Personalkonsulent",
  "Ansvar for rekruttering, intervju, referanse sjekk, utarbeide jobbkrav og stillingsbeskrivelser, registrering av oppdrag og timelister, andre administrative oppgaver og nysalg."
);

const WorkPlacefive = new Work(
  "Nov.2013 - Sep.2014",
  "Arbeidssøker",
  "Arbeidssøker",
  " "
);

const WorkPlacesix = new Work(
  "Mai.2006 – Nov. 2013",
  "Nicator AS / Solution Partner AS",
  "Administrasjon/Backoffice",
  "Ansvar for dokumentkontroll, håndtering av leie-leasing avtaler, fakturering, bilagsføring, avstemming av kontoer og ansvar for rapportering, telefonløsning, forsikring og personal."
);

const WorkPlaceseven = new Work(
  "Mai.2004 – Mai.2006",
  "Solution Partner AS",
  "Salgskonsulent Finansiering",
  "Rådgivning og salg av finansielle løsninger."
);

const WorkPlaceeight = new Work(
  "Apr.2002 – Apr.2004",
  "Vestfold Forsikringssenter AS",
  "Forsikringsrådgiver",
  "Rådgivning og salg av privat skadeforsikring."
);

const WorkPlacenine = new Work(
  "Mai.1999 – Nov.2001 ",
  "Rimi Stokke / Rimi Tolvsrød",
  "Medeier av to butikker",
  "Personalansvar, ansvar for salg, service og kundebehandling, timelister, lønn, bemanning, gjennomføring av personalmøter, medarbeidersamtaler og konfliktløsning. Totalansvar for varebestilling, budsjettering og oppfølging av nøkkeltall. Organisering av drift av butikk og gjennomføring av kampanjer."
);

const WorkPlaceten = new Work(
  "Jan.1998 – Mai.1999 ",
  "Rimi Stokke",
  "Butikksjef",
  "Personalansvar og ansvar for timelister, bemanning, lønn og gjennomføring av personalmøter, medarbeidersamtaler og konfliktløsning. Totalansvar for varebestilling, og oppfølging av nøkkeltall. Organisering av drift av butikk og gjennomføring av kampanjer."
);

const WorkPlaceeleven = new Work(
  "Jun.1996 – Jan.1998 ",
  "Rimi Stokke",
  "Ass. Butikksjef",
  "Personalansvar, bemanning, lønn og konfliktløsning. Totalansvar for varebestilling, budsjettering og oppfølging av nøkkeltall. Organisering av drift av butikk og gjennomføring av kampanjer."
);

const WorkPlacetwelve = new Work(
  "Mai.1995 – Jun.1996 ",
  "Førstegangstjenesten - Nes Fort Kystartilleriet, Lødingen",
  "Sambandsoperatør",
  " "
);

const WorkPlacethirteen = new Work(
  "Apr.1991 – mai.1995 ",
  "Rimi Stokke v/ eier Einar Kirkevold",
  "Butikkmedarbeider/ Skolehjelp",
  "Lageransvar, påfylling av varer, låseansvarlig, fruktansvarlig."
);

var workexperience = document.getElementById("Year-From");
workexperience.innerHTML = WorkPlaceone.yearFrom;

var workexperience = document.getElementById("Work-title");
workexperience.innerHTML = WorkPlaceone.workTitle;

var workexperience = document.getElementById("Work-Place");
workexperience.innerHTML = WorkPlaceone.workPlace;

var workexperience = document.getElementById("Work-experience");
workexperience.innerHTML = WorkPlaceone.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-2");
workexperience.innerHTML = WorkPlacetwo.yearFrom;

var workexperience = document.getElementById("Work-title-2");
workexperience.innerHTML = WorkPlacetwo.workTitle;

var workexperience = document.getElementById("Work-Place-2");
workexperience.innerHTML = WorkPlacetwo.workPlace;

var workexperience = document.getElementById("Work-experience-2");
workexperience.innerHTML = WorkPlacetwo.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-3");
workexperience.innerHTML = WorkPlacethree.yearFrom;

var workexperience = document.getElementById("Work-title-3");
workexperience.innerHTML = WorkPlacethree.workTitle;

var workexperience = document.getElementById("Work-Place-3");
workexperience.innerHTML = WorkPlacethree.workPlace;

var workexperience = document.getElementById("Work-experience-3");
workexperience.innerHTML = WorkPlacethree.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-4");
workexperience.innerHTML = WorkPlacefour.yearFrom;

var workexperience = document.getElementById("Work-title-4");
workexperience.innerHTML = WorkPlacefour.workTitle;

var workexperience = document.getElementById("Work-Place-4");
workexperience.innerHTML = WorkPlacefour.workPlace;

var workexperience = document.getElementById("Work-experience-4");
workexperience.innerHTML = WorkPlacefour.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-5");
workexperience.innerHTML = WorkPlacefive.yearFrom;

var workexperience = document.getElementById("Work-title-5");
workexperience.innerHTML = WorkPlacefive.workTitle;

var workexperience = document.getElementById("Work-Place-5");
workexperience.innerHTML = WorkPlacefive.workPlace;

var workexperience = document.getElementById("Work-experience-5");
workexperience.innerHTML = WorkPlacefive.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-6");
workexperience.innerHTML = WorkPlacesix.yearFrom;

var workexperience = document.getElementById("Work-title-6");
workexperience.innerHTML = WorkPlacesix.workTitle;

var workexperience = document.getElementById("Work-Place-6");
workexperience.innerHTML = WorkPlacesix.workPlace;

var workexperience = document.getElementById("Work-experience-6");
workexperience.innerHTML = WorkPlacesix.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-7");
workexperience.innerHTML = WorkPlaceseven.yearFrom;

var workexperience = document.getElementById("Work-title-7");
workexperience.innerHTML = WorkPlaceseven.workTitle;

var workexperience = document.getElementById("Work-Place-7");
workexperience.innerHTML = WorkPlaceseven.workPlace;

var workexperience = document.getElementById("Work-experience-7");
workexperience.innerHTML = WorkPlaceseven.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-8");
workexperience.innerHTML = WorkPlaceeight.yearFrom;

var workexperience = document.getElementById("Work-title-8");
workexperience.innerHTML = WorkPlaceeight.workTitle;

var workexperience = document.getElementById("Work-Place-8");
workexperience.innerHTML = WorkPlaceeight.workPlace;

var workexperience = document.getElementById("Work-experience-8");
workexperience.innerHTML = WorkPlaceeight.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-9");
workexperience.innerHTML = WorkPlacenine.yearFrom;

var workexperience = document.getElementById("Work-title-9");
workexperience.innerHTML = WorkPlacenine.workTitle;

var workexperience = document.getElementById("Work-Place-9");
workexperience.innerHTML = WorkPlacenine.workPlace;

var workexperience = document.getElementById("Work-experience-9");
workexperience.innerHTML = WorkPlacenine.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-10");
workexperience.innerHTML = WorkPlaceten.yearFrom;

var workexperience = document.getElementById("Work-title-10");
workexperience.innerHTML = WorkPlaceten.workTitle;

var workexperience = document.getElementById("Work-Place-10");
workexperience.innerHTML = WorkPlaceten.workPlace;

var workexperience = document.getElementById("Work-experience-10");
workexperience.innerHTML = WorkPlaceten.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-11");
workexperience.innerHTML = WorkPlaceeleven.yearFrom;

var workexperience = document.getElementById("Work-title-11");
workexperience.innerHTML = WorkPlaceeleven.workTitle;

var workexperience = document.getElementById("Work-Place-11");
workexperience.innerHTML = WorkPlaceeleven.workPlace;

var workexperience = document.getElementById("Work-experience-11");
workexperience.innerHTML = WorkPlaceeleven.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-12");
workexperience.innerHTML = WorkPlacetwelve.yearFrom;

var workexperience = document.getElementById("Work-title-12");
workexperience.innerHTML = WorkPlacetwelve.workTitle;

var workexperience = document.getElementById("Work-Place-12");
workexperience.innerHTML = WorkPlacetwelve.workPlace;

var workexperience = document.getElementById("Work-experience-12");
workexperience.innerHTML = WorkPlacetwelve.workexperience;

/* WORK EXPERIENCE*/

var workexperience = document.getElementById("Year-From-13");
workexperience.innerHTML = WorkPlacethirteen.yearFrom;

var workexperience = document.getElementById("Work-title-13");
workexperience.innerHTML = WorkPlacethirteen.workTitle;

var workexperience = document.getElementById("Work-Place-13");
workexperience.innerHTML = WorkPlacethirteen.workPlace;

var workexperience = document.getElementById("Work-experience-13");
workexperience.innerHTML = WorkPlacethirteen.workexperience;

class Education {
  constructor(yearFromTo, schoolPlace, educationTitle) {
    this.yearFromTo = yearFromTo;
    this.schoolPlace = schoolPlace;
    this.educationTitle = educationTitle;
  }
}

const EducationPlace = new Education(
  "2021 - DD",
  "Gokstad Akademiet",
  "Frontend-Utvikling"
);

const EducationPlacetwo = new Education(
  "1992 – 1993",
  "Yrkesskole og Tekniskfagskole Horten",
  "VK 2 Elektronikkservice"
);

const EducationPlacethree = new Education(
  "1991 – 1992",
  "Maritime Videregående Skole Tønsberg ",
  "VK 1 Elektronikklinje"
);

const EducationPlacefour = new Education(
  "1990 – 1991",
  "Maritime Videregående Skole Tønsberg ",
  "Grunnkurs Elektrolinje"
);

/* WORK EDUCATION*/

var education = document.getElementById("Year-From-To");
education.innerHTML = EducationPlace.yearFromTo;

var education = document.getElementById("school-place");
education.innerHTML = EducationPlace.schoolPlace;

var education = document.getElementById("education-Title");
education.innerHTML = EducationPlace.educationTitle;

/* WORK EDUCATION*/

var education = document.getElementById("Year-From-To-2");
education.innerHTML = EducationPlacetwo.yearFromTo;

var education = document.getElementById("school-place-2");
education.innerHTML = EducationPlacetwo.schoolPlace;

var education = document.getElementById("education-Title-2");
education.innerHTML = EducationPlacetwo.educationTitle;

/* WORK EDUCATION*/

var education = document.getElementById("Year-From-To-3");
education.innerHTML = EducationPlacethree.yearFromTo;

var education = document.getElementById("school-place-3");
education.innerHTML = EducationPlacethree.schoolPlace;

var education = document.getElementById("education-Title-3");
education.innerHTML = EducationPlacethree.educationTitle;

/* WORK EDUCATION*/

var education = document.getElementById("Year-From-To-4");
education.innerHTML = EducationPlacefour.yearFromTo;

var education = document.getElementById("school-place-4");
education.innerHTML = EducationPlacefour.schoolPlace;

var education = document.getElementById("education-Title-4");
education.innerHTML = EducationPlacefour.educationTitle;

var htmlEl = document.getElementsByClassName("bg-primaryA")[0];

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  htmlEl.classList.toggle("bg-primaryA");
  htmlEl.classList.toggle("bg-primaryB");
}
