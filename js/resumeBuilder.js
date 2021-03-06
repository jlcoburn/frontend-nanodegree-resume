
var bio = {
    "name": "Jason Coburn",
    "role": "Front End Developer",
    "contact": {
        "mobile": "336-555-5555",
        "email": "jlcoburn@live.com",
        "github": "jlcoburn",
        "twitter": "NCPar8hd",
        "location": "Thomasville, NC"
    },
    "welcomeMessage": "Welcome to my resume. Thank you for visiting.",
    "skills": [
        "Html",
        "Javascript",
        "jQuery",
        "CSS"
    ],
    "biopic": "images/profilepic.jpg"
};

var work = {
    "jobs": [{
        "employer": "Food Lion",
        "title": "Stocker",
        "location": "High Point, NC",
        "dates": "2016 - present",
        "description": "Responsible for replenishing shelves and cleaning the store."
    }, {
        "employer": "Dollar Tree",
        "title": "Store Manager",
        "location": "Thomasville, NC",
        "dates": "2009 - 2015",
        "description": "Responsilbe for all duties in the daily running of the store. Inventory control, cash control, customer service, stocking shelves, scheduling employees, hiring and termination of employees."
    }, {
        "employer": "Dollar Tree",
        "title": "Assistant Manager",
        "location": "Kernersville, NC",
        "dates": "2005 - 2009",
        "description": "Responsible for aiding the store manager in the running of the store."
    }]
};

var education = {
    "schools": [{
        "name": "Cape Coral High School",
        "location": "Cape Coral, Florida",
        "degree": "High school diploma",
        "majors": [
            "High school diploma"
        ],
        "years": "1990 - 1994"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer NanoDegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var projects = {
    // images in this section used copyright free courtesy of pixabay.com
    "projects": [{
        "title": "Portfolio",
        "description": "Portfolio of projects completed",
        "dates": "Feb 2016-March 2016",
        "images": [
            "images/barn-350.jpg",
            "images/beach-350.jpg"
        ]
    }, {
        "title": "Resume",
        "description": "Resume built using jQuery and javascript",
        "dates": "March 2016-April 2016",
        "images": [
            "images/sea-350.jpg",
            "images/sunset-350.jpg"
        ]
    }]
};

//Section to display Work History
work.display = function() {
    for (var job in work.jobs) {
        if (job !== '') {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};

//Section to display header information
bio.displayHeader = function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').prepend(formattedPic);
    $('#header').prepend(formattedRole);
    $('#header').append(formattedWelcome);
    $('#header').prepend(formattedName);


    var formattedMobile = HTMLmobile.replace('%data%', bio.contact.mobile);
    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contact.email);
    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contact.github);
    var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contact.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contact.location);
    $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    var i = 0;
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        var formattedSkill = '';
        while (i < bio.skills.length) {
            formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(formattedSkill);
            i++;
        }
    }



};

/*function logClicks(x,y, timeStamp) {
    console.log('X pos: ', x);
    console.log('Y pos: ', y);
    console.log('Time', timeStamp);
}*/

//function to display internationlized name
//commenting out for now, may add later
/*function inName() {
    var fullName = bio.name.trim().split(' ');
    var firstName = fullName[0];
    var lastName = fullName[1];
    lastName = lastName.toUpperCase();
    firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
    return firstName + ' ' + lastName;
}*/


education.display = function() {
    for (var course in education.onlineCourses) {
        if (course !== '') {
            $('#onlineCourse').append(HTMLonlineStart);

            var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
            $('.onlineCourse-entry:last').append(formattedTitle);
            console.log(formattedTitle);

            var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
            $('.onlineCourse-entry:last').append(formattedSchool);

            formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
            $('.onlineCourse-entry:last').append(formattedDates);

            var formattedUrl = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url);
            $('.onlineCourse-entry:last').append(formattedUrl);
        }
    }

    for (var school in education.schools) {
        if (school !== '') {
            $('#education').append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
            $('.education-entry:last').append(formattedName);

            var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
            $('.education-entry:last').append(formattedLocation);

            for (var schoolMajor in education.schools[school].majors) {
                if (schoolMajor !== '') {
                    var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[schoolMajor]);
                    $('.education-entry:last').append(formattedMajor);
                }
            }
            formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].years);
            $('.education-entry:last').append(formattedDates);
        }
    }
};

projects.display = function() {

    for (var project in projects.projects) {
        if (project !== '') {
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
            $('.project-entry:last').append(formattedTitle);

            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
            $('.project-entry:last').append(formattedDescription);

            formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
            $('.project-entry:last').append(formattedDates);

            for (var image in projects.projects[project].images) {
                if (image !== '') {
                    var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
                    $('.project-entry:last').append(formattedImage);
                }
            }
        }
    }
};

bio.displayHeader();
work.display();
projects.display();
education.display();
//$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);