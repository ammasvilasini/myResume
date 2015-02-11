// BIO OBJECT

var bio = {
	"name" : "Jamie Otelsberg",
	"role" : "front-end web developer",
	"contactInfo": {
		"mobile" : "999-589-7147",
		"email"  : "ammasvilasini@gmail.com",
		"github" : "ammasvilasini",
		"twitter": "@ammasvilasini",
		"location" : "Amritapuri"
		},

	"welcomeMessage" : "Welcome to my humble resume! This is my first project in javaScript but its definitely not my last. This is only the beginning on a long journey of learning and growing as a designer and a developer. I currently work as a graphic designer for an innovative and very creative lab in South India, and i have absolutely no intention of ever leaving there, but am interested in taking some more web based projects. I'm also interested in doing print projects. I would like to think that i'm ok at making posters and doing print layouts, but the truth is, i'm much better at wireframing. Thanks for stopping by.",
	"skills" : ["graphic  design", "UI design", "UX", "coding ninja"],
	"biopic" : "images/me.png"
};



bio.display = function(){
var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
var picture = bio.biopic
var formattedPicture = HTMLbioPic.replace('%data%', bio.biopic);
var welcomeMessage = HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage);
var mobile = bio.contactInfo.mobile;
var formattedMobile = HTMLmobile.replace('%data%',bio.contactInfo.mobile);
var email = bio.contactInfo.email;
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var github = bio.contactInfo.github;
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contactInfo.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
};

$("#header").append(formattedPicture);
$("#header").append(welcomeMessage);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);

};



bio.display();

// EDUCATION OBJECT


var education = {
	"schools" : [
	{
		"name" : "Design School of Agoura Hills",
		"location" : "Agoura Hills, CA, USA",
		"degree" : "Design",
		"major" : ["Fine Art","Graphic Design"],
		"date" : 2003,
		"URL"  : "www.designschoolagoura.com"
	},
	{
		"name" : "Amrita School of Engineering",
		"location" : "Vallickavu, Kerala, India",
		"degree" : "Marketing",
		"major" : ["Web Design","Identity Design"],
		"date" : 2008,
		"URL" : "www.amrita.edu"
		}
	],
	"onlineCourses": [
	{

		"title" : "Front-End Developer Nanodegree",
		"school" : "Udacity",
		"date"  : 2014,
		"URL" : "www.udacity.com"

	},
	{
		"title" : "Bootstrap to Wordpress",
		"school"  : "Udemy",
		"date" : 2015,
		"URL"  : "www.udemy.com/"
	  }

    ]

 }
education.display = function(){
 for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:first").append(formattedSchoolName);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
    $(".education-entry:first").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);

  }
  $(".education-entry:last").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    var formattedOnlineCourses = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedOnlineCourses);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL).replace("%url%", education.onlineCourses[course].URL);
    $(".education-entry:last").append(formattedOnlineURL);

  }

};


education.display();


// WORK OBJECT


var work = {
	"jobs": [
	{
		"employer" : "American Pro Ambulance",
		"title" : "EMT",
		"location" : "Los Angeles",
		"dates" : "July 2003 - August 2006",
		"description" : "I am trained as an emergency medical technician. Not only did i practice patient care, i also drove that big ole ambulance. Parallel parked it even."
	},
	{

		"employer" : "Ammachi Labs",
		"title" : "Graphics Team Lead",
		"location" : "Amrita University",
		"dates" : "2009- till present",
		"description" : "I volunteer for an amazingly creative little lab in the jungles of Kerala. We contribute to the technologies that power the skill development training that Embracing the World does, for people in underserved villages all throughout rural India. "

	}

  ]

}


work.display = function(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}

}

work.display();

// PROJECTS OBJECT


var projects = {
	"projects": [
	{
		"title": "Skill Development website - Landing Page",
		"dates": "Jan 2014",
		"description": "Did the design for a skill development website's landing page.",
		"images": ["images/project1.png","images/project1_2.png"]

	},
	{
		"title" : "Skill Development website - Dashboard",
		"dates" : "Feb 2014",
		"description" : "Did the design for a skill development website's dashboard and all main pages.",
		"images": ["images/project2.png","images/project2_2.png"]

		}
	]

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

		if(projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}

		}

	}

}

projects.display();

// GOOGLE MAP

$("#mapDiv").append(googleMap);

// CLICK TRACKING

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});











