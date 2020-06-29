const project = {
    projects: [
    {
        image: './resources/bingo.jpeg',
        name: 'Bingo App',
        code: 'https://github.com/Connor406/Bingo',
        app: 'https://connor406.github.io/Bingo/'
    },
    {
        image: "./resources/pine.jpg",
        name: 'Login Page',
        code: 'https://github.com/Connor406/Connor406-LoginPage.github.io',
        app: 'https://connor406.github.io/Connor406-LoginPage.github.io/'
    },
    {
        image: './resources/IMG_3589.jpg',
        name: 'Site Code',
        code:'https://github.com/Connor406/Connor406.github.io'
    }
    ]
};

const templateElement = document.getElementById('templateHB');

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(project);

document.getElementById('project-container').innerHTML = compiledHtml;
