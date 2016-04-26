/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    'name' : 'Jason Coburn',
    "role" : "Front End Developer",
    "contact"  : {
        "email" : "jlcoburn@live.com",
        "github" : "jlcoburn",
        "twitter" : "NCPar8hd",
        "location" : "Thomasville, NC"
    },
    "picture" : "http://i.imgur.com/fCB7UyY.jpg?1",
    "welcome" : "Welcome to my resume. Thank you for visiting.",
    "skills" : [
        "Html",
        "Javascript",
        "CSS"
        ]
}

var work = {
    "jobs" : [
    {
        "employer" : "Food Lion",
        "title" : "Stocker",
        "location" : "High Point, NC",
        "dates" : "2016 - present",
        "description" : "Responsible for replenishing shelves and cleaning the store."
    },
    {
        "employer" : "Dollar Tree",
        "title" : "Store Manager",
        "location" : "Thomasville, NC",
        "dates" : "2009 - 2015",
        "description" : "Responsilbe for all duties in the daily running of the store. Inventory control, cash control, customer service, stocking shelves, scheduling employees, hiring and termination of employees."
    },
    {
        "employer" : "Dollar Tree",
        "title" : "Assistant Manager",
        "location" : "Kernersville, NC",
        "dates" : "2005 - 2009",
        "description" : "Responsible for aiding the store manager in the running of the store."
    }
    ]
}

var education = {
    "schools" : [
    {
        "name" : "University of North Carolina Charlotte",
        "city" : "Charlotte, North Carolina",
        "major" : "Computer science",
        "years" : "1995"
    },
    {
        "name": "Cape Coral High School",
        "city": "Cape Coral, Florida",
        "major": "High school diploma",
        "years": "1990 - 1994"
    }
    ],
    "online courses" : [
    {
        "title" : "Front End Web Developer",
        "school" : "Udacity",
        "dates" : "2016",
        "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
    ]
}

var projects = {
    "projects" : [
    {
        "name" : "Portfolio",
        "description": "Portfolio of projects completed",
        "dates_worked" : "Feb 2016-March 2016",
    "images" : [
        "placeholder url1",
        "placeholder url2"
    ]
    }

    ]
}

//Section to display Work History
function displayWork() {
    for(job in work.jobs)
    {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
}

function displaySkills() {
    var i = 0;
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = "";
        while (i < bio.skills.length)
        {
            formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(formattedSkill);
            i++;
        }
    }
}





//Section to display contact information in footer
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);


//Section to display header infor
function displayHeader() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%",bio.picture);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);
    $("#header").prepend(formattedPic);
    $("#header").prepend(formattedRole);
    $("#header").append(formattedWelcome);
    $("#header").prepend(formattedName);
}

function logClicks(x,y, timeStamp) {
    console.log("X pos: ", x);
    console.log("Y pos: ", y);
    console.log("Time", timeStamp);
}

function inName() {
    var fullName = bio.name.trim().split(" ");
    var firstName = fullName[0];
    var lastName = fullName[1];
    lastName = lastName.toUpperCase();
    firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
    return firstName + " " + lastName;
}

displayHeader();
displayWork();
displaySkills();
$("#main").append(internationalizeButton);
