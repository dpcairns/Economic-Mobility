const educationEvent = {
    
    
    id:'EducationEvent',
    title:'Degrees of Education',
    image:'',
    description:`Research shows that the greatest single correlation of high income is the education level of one's parents.
    The Fed study showed that income, earnings, and wealth increased with education levels.`,

    choices:[{
        
        id:'high-school',
        description:'High School or GED',
        result:'',
        health: 0,
        money: 0,
        mobility: 0,
    },
    {
        id:'associate',
        description:'Associates Degree',
        result:'',
        health: 5,
        money: 5,
        mobility: 5,
    },
    { id:'bachelors',
        description:'Bachelors Degree',
        result:'',
        health: 10,
        money: 5,
        mobility: 5,
    },
    {  
        id:'masters',
        description:'Masters Degree',
        result:'',
        health: 15,
        money: 20,
        mobility: 20,
    },
    {
        id:'phd',
        description:'Doctorate',
        result:'',
        health: 20,
        money: 25,
        mobility: 50,
    },
    {
        id:'professional-degree',
        description:'Technical or Professional Cerficate',
        result:'',
        health:10,
        money:25,
        mobility:25,
    }]
};

const trafficEvent = {

    id:'',
    title:'Traffic Stop',
    image:'',
    description:`You are driving down the highway. You are driving the speed limit, your car is fully functional and your registration, insurance, and drivers liscense are valid. You are preparing to take the next exit, when you look in your rear view mirror and notice that a police officer is following you. The officer, turns on their lights and sirens and in accordance with the law you pull your car over to the side of the road as quickly as you can and in a safe location. The officer approaches your vehicle and you roll down the window. The officer, tells you that you were speeding. How do you respond?`,
    
    choices:[{
        
        id:'comply',
        description:'Comply with the officer',
        result:'',
        health:-5,
        money:,
        mobility:,
    },
    {
        id:'silent',
        description:'Stay silent',
        result:``,
        health:0,
        money:,
        mobility:,
    },
    {   id:'argue',
        description:'Agrue with the',
        result:'',
        health:,
        money:,
        mobility:,
    }]
};
const medicalEvent = {

    id:'arm-injury',
    title:'',
    image:'',
    description:`You were walking and tripped on a curb. You fall and break your arm. The break is serious and you need immediate medical attention. What do you do?`,
    
    choices:[{
        
        id:'heal',
        description:'Let it heal on it\'s own',
        result:'',
        health:-5,
        money:,
        mobility:,
    },
    {
        id:'call',
        description:' Call the ambulance to the hospital',
        result:``,
        health:0,
        money:,
        mobility:,
    },
    {   id:'taxi',
        description:'Call a Taxi to the hospital',
        result:'',
        health:,
        money:,
        mobility:,
    },
    {   id:'drive',
        description:'Drive yourself to the hospital',
        result:'',
        health:,
        money:,
        mobility:,
    }]
};

const HousingEvent = {

    id:'housing-choice',
    title:'',
    image:'',
    description:'You just got a job in a new city and need to find housing. There are a number of options, what do you do?',
    
    choices:[{
        
        id:'roommate',
        description:'Find a roommate',
        result:'',
        health:-5,
        money:,
        mobility:,
    },
    {
        id:'five-miles',
        description:' Call the ambulance to the hospital',
        result:``,
        health:0,
        money:,
        mobility:,
    },
    {   
        id:'ten-miles',
        description:'Call a Taxi to the hospital',
        result:'',
        health:,
        money:,
        mobility:,
    },
    {   
        id:'twenty-miles',
        description:'Drive yourself to the hospital ',
        result:'',
        health:,
        money:,
        mobility:,
    }]
};

const EmployementEvent = {

    id:'employement-issue',
    title:'',
    image:'',
    description:'You are working at your desk at a new job when your boss asks you to come into their office. They propose that if you are interested they have an opportunity that will increase your earnings. As they tell you about this opportunity you realize that this against not only company HR policy but also against the law. What do you do?',
    
    choices:[{
        
        id:'agree',
        description:'Find a roommate',
        result:'',
        health:-5,
        money:,
        mobility:,
    },
    {
        id:'avoid',
        description:' Call the ambulance to the hospital',
        result:``,
        health:0,
        money:,
        mobility:,
    },
    {   
        id:'disagree',
        description:'Call a Taxi to the hospital',
        result:'',
        health:,
        money:,
        mobility:,
    },
    {   
        id:'find-job',
        description:'Drive yourself to the hospital ',
        result:'',
        health:,
        money:,
        mobility:,
    }]
};



     const economicMobility = [
    
        educationEvent,
        trafficEvent, 
        medicalEvent,
        housingEvent,
        employementEvent,

    ];
    export default economicMobility;