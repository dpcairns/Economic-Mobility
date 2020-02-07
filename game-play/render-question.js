export default function renderQuestion(questionObject) 
{
    // create dynamically rendered section to append to 
    const sectionContainer = document.createElement('section');

    const userPromptDiv = document.createElement('div');
    userPromptDiv.classList.add('user-prompt');

    const creationTitle = document.createElement('h3');

    creationTitle.textContent = questionObject.title;

    const questionDescription = document.createElement('p');
    
    questionDescription.textContent = questionObject.description; 

    userPromptDiv.append(creationTitle, questionDescription);
    sectionContainer.append(userPromptDiv);

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');
    const questionSubmitButton = document.createElement('button');
    questionSubmitButton.id = 'question-submit-button';

    questionSubmitButton.textContent = 'Submit';

    buttonDiv.appendChild(questionSubmitButton); 

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

    
    // iterate through choices
    questionObject.choices.forEach(choice => {
        const optionsLabel = document.createElement('label');
        const optionsRadio = document.createElement('input');
        optionsRadio.type = 'radio';
        optionsRadio.name = 'option';
        optionsRadio.required = true;
        optionsRadio.value = choice.id;
        optionsLabel.append(optionsRadio, choice.id);
        sectionContainer.appendChild(optionsLabel);
    }  
    
    );
    
    sectionContainer.appendChild(optionsDiv);
    sectionContainer.appendChild(buttonDiv);
    
    return sectionContainer;
}


