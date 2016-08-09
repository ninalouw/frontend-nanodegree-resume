var bio = {
    "name": "Nina Louw",
    "role": "Front End Web Developer",
    "welcomeMessage": "Feel free to get in touch!",
    "biopic": "images/me.jpg",
    "contacts": {
        "mobile": "0782154773",
        "email": "nina@mac.com",
        "twitter": "@ninamaelouw",
        "github": "ninalouw",
        "location": "Vancouver,BC"
    },
    "skills": ["HTML", "CSS", "Ruby", "JavaScript"]
};

var education = {
    "schools": [{
        "name": "Stellenbosch University",
        "location": "Stellenbosch, South Africa",
        "degree": "Bachelor of Arts",
        "majors": [" English Literature , Art History "],
        "dates": "2010 - 2012",
        "url" : "http://www.sun.ac.za"

    }, {
        "name": "Stellenbosch University",
        "location": "Stellenbosch, South Africa",
        "degree": "Bachelor of Arts Honours in English",
        "majors": ["English Literature"],
        "dates": "2013",
        "url" : "http://www.sun.ac.za"

    }, {
        "name": "University of Oxford",
        "location": "Oxford, United Kingdom",
        "degree": "Master of Studies in English Literature",
        "majors": ["English Literature"],
        "dates": "2014-2015",
        "url": "http://www.ox.ac.uk/#"

    }],
    "onlineCourses": [{
        "title": "Front - End Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://udacity.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Journeyman Documentary Company",
        "title": "Researcher",
        "location": "London, UK",
        "dates": "2015",
        "description": "Lorem ipsum dolor sit amet, et consulatu vituperatoribus quo. Melius omnium an sed.Qui case consul ornatus te, congue dolorem pri ei, vim ei odio duis.Laudem gloriatur qui an, nam omnis aeque et. Vix ad numquam nostrum, quo ex nostrud officiis referrentur. Esse vocent ne pro, enim mundi impetus cu per. No est primis noster, his solum prompta cu.Simul minimum ex nec, graeci lucilius sensibus est ex, cum vocent impetus omittam ex. Eripuit tacimates mea no."
    }, {
        "employer": "Penguin Random House",
        "title": "Copyeditor",
        "location": "Cape Town, South Africa",
        "dates": "2015",
        "description": "Lorem ipsum dolor sit amet, et consulatu vituperatoribus quo. Melius omnium an sed.Qui case consul ornatus te, congue dolorem pri ei, vim ei odio duis.Laudem gloriatur qui an, nam omnis aeque et. Vix ad numquam nostrum, quo ex nostrud officiis referrentur. Esse vocent ne pro, enim mundi impetus cu per. No est primis noster, his solum prompta cu.Simul minimum ex nec, graeci lucilius sensibus est ex, cum vocent impetus omittam ex. Eripuit tacimates mea no."
    }, {
        "employer": "English Academy",
        "title": "English teacher",
        "location": "Cape Town, South Africa",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, et consulatu vituperatoribus quo. Melius omnium an sed.Qui case consul ornatus te, congue dolorem pri ei, vim ei odio duis.Laudem gloriatur qui an, nam omnis aeque et. Vix ad numquam nostrum, quo ex nostrud officiis referrentur. Esse vocent ne pro, enim mundi impetus cu per. No est primis noster, his solum prompta cu.Simul minimum ex nec, graeci lucilius sensibus est ex, cum vocent impetus omittam ex. Eripuit tacimates mea no."
    }]
};

var projects = {
    "projects": [{
        "title": "Masters Dissertation",
        "dates": "2014-2015",
        "description": "Illum nostro deleniti ex mei, recteque persecuti voluptatibus sea ne. Vix ne atqui choro recteque, omnis dolore accommodare nam ad. Vim dico adhuc dissentiunt ne, sea postulant ocurreret et. In qui prima ocurreret maluisset, unum partiendo eum te, putent iuvaret mei ea.Et esse vidisse aperiam mea, ut dico rebum erroribus sea. Et vix persius temporibus. Ex pro nibh equidem, pro facilisi electram salutatus in, vide altera convenire at pri. Eu vim laboramus dissentias. Dicant cetero philosophia id usu, ne elitr temporibus cotidieque ius, ex eum animal appetere.",
        "images": ["images/projectImage.jpg"]
    }, {
        "title": "Honours Dissertation",
        "dates": "2013",
        "description": "Illum nostro deleniti ex mei, recteque persecuti voluptatibus sea ne. Vix ne atqui choro recteque, omnis dolore accommodare nam ad. Vim dico adhuc dissentiunt ne, sea postulant ocurreret et. In qui prima ocurreret maluisset, unum partiendo eum te, putent iuvaret mei ea.Et esse vidisse aperiam mea, ut dico rebum erroribus sea. Et vix persius temporibus. Ex pro nibh equidem, pro facilisi electram salutatus in, vide altera convenire at pri. Eu vim laboramus dissentias. Dicant cetero philosophia id usu, ne elitr temporibus cotidieque ius, ex eum animal appetere.",
        "images": ["images/projectImage.jpg"]
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedImage);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);
    for (var i=0; i<bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

};
bio.display();

work.display = function() {
    for (var i=0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

education.display = function() {
    for (var i=0; i < education.schools.length;i++){
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedschoolDegreeName = formattedschoolName + formattedschoolDegree;
        $(".education-entry:last").append(formattedschoolDegreeName);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedschoolLocation);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedschoolMajor);
        var formattedURL = HTMLonlineURL.replace("%data%", education.schools[i].url);
        $(".education-entry:last").append(formattedURL);
    }
    for (var i=0; i < education.onlineCourses.length;i++){
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedSchoolTitle = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedSchoolTitle);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedURL);
    }
};
education.display();

projects.display = function() {
    for (var i=0; i < projects.projects.length;i++){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
         for (var j = 0; j < projects.projects[i].images.length; j++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};
projects.display();

$("#mapDiv").append(googleMap);
