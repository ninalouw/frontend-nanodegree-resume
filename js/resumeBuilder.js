/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name":"Nina Louw",
    "role":"WebDeveloper",
    "welcome message": "Hello there!",
    "image": "images/me.jpg",
    "contacts": [{
    "mobile": "0782154773",
    "email" : "ninalouw@mac.com",
    "twitter":"@ninamaelouw",
    "instagram":"ninalouw",
    }],
    "skills": [ "HTML", "CSS", "Ruby", "JavaScript"]
};

var education = {
    "schools": [
    {
        "name":"Stellenbosch University",
        "location":"Stellenbosch, South Africa",
        "degree": "Bachelor of Arts",
        "majors": ["Art History","Philosophy","English Literature"],
        "dates":"2010-2013"

    },
    {
        "name":"University of Oxford",
        "location":"Oxford, United Kingdom",
        "degree":"Master of Studies in English Literature",
        "majors":["English Literature"],
        "dates":"2014-2015",

    }
    ],
    "onlineCourses":[
    {
        "title":"Udacity JavaScript",
        "school":"Udacity",
        "dates":"2016",
        "url":"www.udacity.com"
    }
    ]
}

var work = {
    "jobs":[
    {
        "employer":"GHS School",
        "title":"EFL Teacher",
        "location":"Cape Town, South Africa",
        "dates":"2016",
        "description": "hfdsfjgsdfgsdh"
    },
    {
     "employer":"Tutor.com",
        "title":"English teacher",
        "location":"Cape Town, South Africa",
        "dates":"2016",
        "description": "hfdsfjgsdfgsdh",
    }
    ]
}

var projects = {
    "projects": [
    {
        "title":"Resume Builder",
        "dates":"2014",
        "description":"afhfjhsdjhsdjh",
        "images":[
        "www.pics.com"
        ]

    }
  ]
};

bio.display = function(){
var formattedName = "Nina Louw"
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = "WebDeveloper"
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedImage = HTMLbioPic.replace("%data%",bio.image);
var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedImage,formattedMessage);

if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};

for (contact in bio.contacts){
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
    var formattedSkype = HTMLcontactGeneric.replace("%data%",bio.contacts[contact].skype);
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
};
};
function displayWork(){
for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedRole + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
};

$(document).click(function(loc) {
var x = loc.pageX;
var y = loc.pageY;

logClicks(x,y); });

function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+name[1];
}


projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0){
        for (image in projects.projects[project].images){
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    $(".project-entry:last").append(formattedImage);
        }
    }
    }
};

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);























