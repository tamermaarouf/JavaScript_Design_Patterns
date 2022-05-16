/*
This is empty on purpose! Your code to build the resume will go here.
 */

// ------------------------MODEL--------------------------------//

const model = {
    bio: {
        name: 'Tamer Maarouf',
        role: 'Web Developer & Graphic Designer',
        contacts: {
            mobile: '+201553572154',
            email: 'tamermaarouf@gmail.com',
            github: 'tamermaarouf',
            twitter: 'tamermaarouf',
            location: 'Shoupra, Cairo',
        },
        welcomeMessage: 'I am a hard-working and articulate front end web developer and senior graphic designer.',
        skills: ['HTML | CSS', 'JavaScript | Object-Oriented JavaScript', 'jQuery Basics', 'Node.js Basics | npm Basics', 'Corel Draw', 'Adobe Photoshop | Adobe illustrator', ''],
        biopic: 'https://res.cloudinary.com/dkwx75me4/image/upload/v1640573326/tamer_maarouf_is6wwf.jpg',
    },

    education: {
        schools: { //array of objects with
            name: 'AIN SHAMS UNIVERSITY',
            location: 'Cairo, Egypt',
            degree: 'BACHELOR OF COMMERCE (B.COM.)',
            majors: 'Accountant', //array of strings
            dates: 'May-2002', //string (works with a hyphen between them) 
        },
        onlineCourses: [{ //array of objects with
                title: 'Front End Web Development Professional',
                school: 'Udacity',
                dates: '10-2021', //(works with a hyphen between them)
                url: 'https://udacity.com'
            },
            { //array of objects with
                title: 'Object-Oriented JavaScript',
                school: 'Udacity',
                dates: '2021', //(works with a hyphen between them)
                url: 'https://udacity.com'
            },
            { //array of objects with
                title: 'JavaScript Design Patterns',
                school: 'Udacity',
                dates: '2021', //(works with a hyphen between them)
                url: 'https://udacity.com'
            },
            { //array of objects with
                title: 'Responsive Images',
                school: 'Udacity',
                dates: '2021', //(works with a hyphen between them)
                url: 'https://udacity.com'
            },
            { //array of objects with
                title: 'Intro to HTML and CSS',
                school: 'Udacity',
                dates: '2021', //(works with a hyphen between them)
                url: 'https://udacity.com'
            },
            { //array of objects with
                title: 'Asynchronous JavaScript Requests',
                school: 'Udacity',
                dates: '2021', //(works with a hyphen between them)
                url: 'https://udacity.com'
            },
            { //array of objects with
                title: 'Intro to JQuery',
                school: 'Udacity',
                dates: '2021', //(works with a hyphen between them)
                url: 'https://udacity.com'
            },
            { //array of objects with
                title: 'Responsive Web Design Fundamentals',
                school: 'Udacity',
                dates: '2021', //(works with a hyphen between them)
                url: 'https://udacity.com'
            },
            { //array of objects with
                title: 'Version Control with Git',
                school: 'Udacity',
                dates: '2021', //(works with a hyphen between them)
                url: 'https://udacity.com'
            }
        ],
    },

    work: {
        jobs: [{ //array of objects with
                employer: 'HAZEM SHOUKRY DESIGNS',
                title: 'SENIOR GRAPHIC DESIGNER',
                location: 'CAIRO, EGYPT',
                dates: 'OCT 2018 - PRESENT', // (Can be 'in progress')
                description: `Specialized in the design and production of all custom made products such as water jet
            medallions, cut-to-size tiles, wall cladding, marble tiles and curved marble works.`
            },
            { //array of objects with
                employer: 'HAZEM SHOUKRY DESIGNS',
                title: 'GRAPHIC DESIGNER',
                location: 'CAIRO, EGYPT',
                dates: 'MAY 2011 - PRESENT', // (Can be 'in progress')
                description: `Work in floor planning and SP line tracing to create (Vector Lines) from drafts and hand
            drawing designs.`
            },
            { //array of objects with
                employer: 'ADWAA SIGN CENTRE',
                title: 'GRAPHIC DESIGN PRODUCTION',
                location: 'DUBAI, UAE',
                dates: 'JULY 2016 - AUG 2018', // (Can be 'in progress')
                description: `coordinator among clients, technical supervisors, project consultants, and creative
            department to initiate, plan, e ecute, and nalize the target sign image
            reated and produced new media designs for indoor and outdoor signage while ensuring
            ualit control b reviewing and evaluating the target image of the client s marketing
            department`
            },
            { //array of objects with
                employer: 'AL-DAWLIA ADVERTISING AGENCY',
                title: 'GRAPHIC DESIGN',
                location: 'CAIRO, EGYPT',
                dates: 'APR 2003 - APR 2010', // (Can be 'in progress')
                description: `Collaborated on various creative designers that were inclusive of professional logos,
            slogans, and Name Tags, in addition to paintings of foreign Affairs and banners of all
            kinds.
            Performed as a coordinator among clients, supervisors, and the creative department to
            produce the most optimized version of the desired design product`
            }
        ]
    },
    projects: [ // array of objects with
        {
            title: 'Online Resume',
            dates: '12-2021', //(works with a hyphen between them)
            description: 'Dynamically displayed resume sections (biography, education, work, projects, footer) include all of the real JavaScript object data',
            images: ['./images/Online-Resume.png'] //array with string urls
        },
        {
            title: 'Responsive Images',
            dates: '12-2021', //(works with a hyphen between them)
            description: 'Make the images fit in their containers in the viewport.',
            images: ['https://github.com/tamermaarouf/Project-Part-1-Start'] //array with string urls
        },
        {
            title: 'Color Game',
            dates: '12-2021', //(works with a hyphen between them)
            description: 'your color choice shows "Wrong" even when it is correct, then take a look at your colors array and make sure that the colors have spaces after the commas in the RGB expression, otherwise the picked color will not match the randomly selected color.',
            images: ['https://github.com/tamermaarouf/Project-Part-1-Start'] //array with string urls
        },
        {
            title: 'Cat Clicker Premium Vanilla',
            dates: '12-2021', //(works with a hyphen between them)
            description: `
                When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
                The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.`,
            images: ['https://github.com/tamermaarouf/Project-Part-1-Start'] //array with string urls
        },
    ]
};


// ------------------------octopus--------------------------------//
const octopus = {
    init: function () {
        bioView.init();
        educationView.init();
        workView.init();
        projectsView.init();
        livedView.init();
    },
    getBio: function () {
        return model.bio;
    },
    getEducation: function () {
        return model.education;
    },
    getWork: function () {
        return model.work;
    },
    getProjects: function () {
        return model.projects;
    }
};

// ------------------------VIEW--------------------------------//

/* --------------------------------------- bio ---------------------------------------------------- */

const bioView = {
    init: function () {
        this.HTMLheaderName = '<h1 id="name" class="text-white text-uppercase text-md-center">%data%</h1>';
        this.HTMLheaderRole = '<small>%data%</small><hr>';

        this.HTMLcontactGeneric = '<li class="list-inline-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
        this.HTMLmobile = '<li class="list-inline-item"><span class="orange-text">Mobile: </span><span class="white-text">%data%</span></li>';
        this.HTMLemail = '<li class="list-inline-item"><span class="orange-text">Email: </span><span class="white-text">%data%</span></li>';
        this.HTMLtwitter = '<li class="list-inline-item"><span class="orange-text">twitter: </span><span class="white-text">%data%</span></li>';
        this.HTMLgithub = '<li class="list-inline-item"><span class="orange-text">github: </span><span class="white-text">%data%</span></li>';
        this.HTMLblog = '<li class="list-inline-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
        this.HTMLlocation = '<li class="list-inline-item"><span class="orange-text">location: </span><span class="white-text">%data%</span></li>';

        this.HTMLbioPic = '<img src="%data%" class="biopic">';
        this.HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
        this.HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
        this.HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
        this.getBio = octopus.getBio();
        this.render();
    },
    render: function () {
        $('#header').append(this.HTMLwelcomeMsg.replace('%data%', this.getBio.welcomeMessage));
        $('#header').append(this.HTMLbioPic.replace('%data%', this.getBio.biopic));
        $('#header').append(this.HTMLskillsStart);
        $('#topContacts').prepend(this.HTMLlocation.replace('%data%', this.getBio.contacts.location));
        $('#topContacts').prepend(this.HTMLtwitter.replace('%data%', this.getBio.contacts.twitter));
        $('#topContacts').prepend(this.HTMLgithub.replace('%data%', this.getBio.contacts.github));
        $('#topContacts').prepend(this.HTMLemail.replace('%data%', this.getBio.contacts.email));
        $('#topContacts').prepend(this.HTMLmobile.replace('%data%', this.getBio.contacts.mobile));
        $('#header').prepend(this.HTMLheaderRole.replace('%data%', this.getBio.role));
        $('#header').prepend(this.HTMLheaderName.replace('%data%', this.getBio.name));
        this.getBio.skills.forEach(skill => {
            let formattedSkills = this.HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkills);
        });
        $('#footerContacts').prepend(this.HTMLlocation.replace('%data%', this.getBio.contacts.location));
        $('#footerContacts').prepend(this.HTMLtwitter.replace('%data%', this.getBio.contacts.twitter));
        $('#footerContacts').prepend(this.HTMLgithub.replace('%data%', this.getBio.contacts.github));
        $('#footerContacts').prepend(this.HTMLemail.replace('%data%', this.getBio.contacts.email));
        $('#footerContacts').prepend(this.HTMLmobile.replace('%data%', this.getBio.contacts.mobile));

    }
};

/* --------------------------------------- Education ---------------------------------------------------- */

const educationView = {
    init: function () {
        this.HTMLschoolStart = '<div class="education-entry"></div>';
        this.HTMLschoolName = '<a href="#">%data%';
        this.HTMLschoolDegree = ' -- %data%</a>';
        this.HTMLschoolDates = '<div class="date-text">%data%</div>';
        this.HTMLschoolLocation = '<div class="location-text">%data%</div>';
        this.HTMLschoolMajor = '<em><br>Major: %data%</em>';

        this.HTMLonlineClasses = '<h3>Online Classes</h3>';
        this.HTMLonlineTitle = '<a href="#">%data%';
        this.HTMLonlineSchool = ' - %data%</a>';
        this.HTMLonlineDates = '<div class="date-text">%data%</div>';
        this.HTMLonlineURL = '<br><a href="#">%data%</a><hr>';

        this.getEducation = octopus.getEducation();
        this.render();

    },
    render: function () {
        let formattedEntry = this.HTMLschoolName.replace('%data%', this.getEducation.schools.name);
        formattedEntry += this.HTMLschoolDegree.replace('%data%', this.getEducation.schools.majors);
        $('#education').append(this.HTMLschoolStart);
        $('.education-entry').append(formattedEntry);
        $('.education-entry').append(this.HTMLschoolDates.replace('%data%', this.getEducation.schools.dates));
        $('.education-entry').append(this.HTMLschoolLocation.replace('%data%', this.getEducation.schools.location));
        $('.education-entry').append(this.HTMLschoolMajor.replace('%data%', this.getEducation.schools.majors));
        $('.education-entry').append(this.HTMLonlineClasses);
        this.getEducation.onlineCourses.forEach(onlineCourse => {
            let formattedOnline = this.HTMLonlineTitle.replace('%data%', onlineCourse.title);
            formattedOnline += this.HTMLonlineSchool.replace('%data%', onlineCourse.school);
            $('.education-entry').append(formattedOnline);
            $('.education-entry').append(this.HTMLonlineDates.replace('%data%', onlineCourse.dates));
            $('.education-entry').append(this.HTMLonlineURL.replace('%data%', onlineCourse.url));

        });

    }
};

/* --------------------------------------- Work ---------------------------------------------------- */

const workView = {
    init: function () {
        this.HTMLworkStart = '<div class="work-entry"></div>';
        this.HTMLworkEmployer = '<a href="#">%data%';
        this.HTMLworkTitle = ' - %data%</a>';
        this.HTMLworkDates = '<div class="date-text">%data%</div>';
        this.HTMLworkLocation = '<div class="location-text">%data%</div>';
        this.HTMLworkDescription = '<p><br>%data%</p>';

        this.getWorks = octopus.getWork();
        this.render();
    },
    render: function () {
        $('#workExperience').append(this.HTMLworkStart);
        this.getWorks.jobs.forEach(job => {
            let formattedWorkEmp = this.HTMLworkEmployer.replace('%data%', job.employer);
            formattedWorkEmp += this.HTMLworkTitle.replace('%data%', job.title);
            $('.work-entry').append(formattedWorkEmp);
            $('.work-entry').append(this.HTMLworkDates.replace('%data%', job.dates));
            $('.work-entry').append(this.HTMLworkLocation.replace('%data%', job.location));
            $('.work-entry').append(this.HTMLworkDescription.replace('%data%', job.description));
        });
    }
};

/* --------------------------------------- Projects ---------------------------------------------------- */

const projectsView = {
    init: function () {
        this.HTMLprojectStart = '<div class="project-entry"></div>';
        this.HTMLprojectTitle = '<a href="#">%data%</a>';
        this.HTMLprojectDates = '<div class="date-text">%data%</div>';
        this.HTMLprojectDescription = '<p><br>%data%</p>';
        this.HTMLprojectImage = '<img src="%data%">';

        this.getProjects = octopus.getProjects();
        this.render();
    },
    render: function () {
        $('#projects').append(this.HTMLprojectStart);
        this.getProjects.forEach(getProject => {
            $('.project-entry').append(this.HTMLprojectTitle.replace('%data%', getProject.title));
            $('.project-entry').append(this.HTMLprojectDates.replace('%data%', getProject.dates));
            $('.project-entry').append(this.HTMLprojectDescription.replace('%data%', getProject.description));
            // $('.project-entry').append(this.HTMLprojectImage.replace('%data%', getProject.images));
        });
    }
};



/* ---------------------------Where I've Lived and Worked ------------------- */
const livedView = {
    init: function () {
        this.internationalizeButton = '<button>Internationalize</button>';
        this.googleMap = '<div id="map"></div>';
        this.render();
    },
    render: function () {
        $('#mapDiv').append(this.googleMap);
        $('#map').append(this.internationalizeButton);
    }
};
// octopus GO 
octopus.init();