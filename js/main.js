let iframe = document.getElementById('result');
iframe = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
let htmlLI = document.getElementById('li1');
let cssLI = document.getElementById('li2');
let jsLI = document.getElementById('li3');
let settings = document.getElementById('settings');
let newScript = "";
let newCssStyle = "";
settings.classList = "d-none";
const closeModal = () => settings.classList.add('d-none');
const openModal = () =>settings.classList.remove('d-none');
let textHtml = document.getElementById('htmlTextarea');
let cssTextarea = document.getElementById('cssTextarea');
let jsTextarea = document.getElementById('jsTextarea');
// active Modal
html.classList.remove('d-none');
css.classList.add('d-none');
js.classList.add('d-none');
htmlLI.addEventListener('click', function () {
    cssLI.style.border = "0"
    htmlLI.style.borderLeft = '3px solid #47CF73'
    jsLI.style.border = "0"
    html.classList.remove('d-none');
    css.classList.add('d-none');
    js.classList.add('d-none');
});
cssLI.addEventListener('click', function () {
    htmlLI.style.border = "0"
    cssLI.style.borderLeft = '3px solid #47CF73'
    jsLI.style.border = "0"
    html.classList.add('d-none');
    css.classList.remove('d-none');
    js.classList.add('d-none');
})
jsLI.addEventListener('click', function () {
    jsLI.style.borderLeft = '3px solid #47CF73'
    htmlLI.style.border = '0'
    cssLI.style.border = "0"
    html.classList.add('d-none');
    css.classList.add('d-none');
    js.classList.remove('d-none');
})
//end active Modal

// set link Css in html
const setCssLink = (linkCssNumber) => {
    let CssLinkValue = document.getElementById(`idInput${linkCssNumber}Css`).value;
    newCssStyle = CssLinkValue;
}
//end set link Css in html

// set link js in html
const setLinkJsHtml = (linkJsNumber) => {
    let jsLinkValue = document.getElementById(`idInput${linkJsNumber}Js`).value;
    newScript = jsLinkValue;
}
// set link js in html

// add css link
var linkCssNumber = 1;
let linkContainerCss = document.getElementById('anotherLinkCss');
const newLinkCss = () => {
    let link = document.createElement('div');
    link.className = 'input-container';
    link.id = `idCss${linkCssNumber}`
    link.innerHTML = `<div class="link-container d-flex align-items-center">
    <i class="fas fa-bars text-white "></i>
    <input id="idInput${linkCssNumber}Css" type="text" class="form-control mx-2" placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1">
    <button onclick="setCssLink(${linkCssNumber})" class="btn btn-outline-success me-2">
        <i class="fas fa-check  text-white  "></i>
    </button>
    <button onclick="removeCssLink(${linkCssNumber})" class="btn btn-outline-danger">
        <i class="fas fa-times  text-white "></i>
    </button>
</div>`
    linkContainerCss.append(link)
    linkCssNumber++;

}
//end add css link

//  add js link
const linkContainerJs = document.getElementById('anotherLinkJs');
var linkJsNumber = 1;
const newLinkJs = () => {
    let link = document.createElement('div');
    link.className = 'input-container';
    link.id = `idJs${linkJsNumber}`
    link.innerHTML = `<div class="link-container d-flex align-items-center">
    <i class="fas fa-bars text-white "></i>
    <input id="idInput${linkJsNumber}Js" type="text" class="form-control mx-2" placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1">
    <button onclick="setLinkJsHtml(${linkJsNumber})" class="btn btn-outline-success me-2">
        <i class="fas fa-check  text-white  "></i>
    </button>
    <button onclick="removeJSLink(${linkJsNumber})" class="btn btn-outline-danger">
        <i class="fas fa-times  text-white "></i>
    </button>
</div>`
    linkContainerJs.append(link)
    linkJsNumber++;
}
// end add js link

// remove Css link
const removeCssLink = (linkCssNumber) => {
    let link = document.getElementById(`idCss${linkCssNumber}`);
    linkContainerCss.removeChild(link)
}
// remove Css link


// remove js link
const removeJSLink = (linkJsNumber) => {
    let link = document.getElementById(`idJs${linkJsNumber}`);
    linkContainerJs.removeChild(link)
}
// end remove js link

// main function
const chageCode = () => {
    iframe.innerHTML = textHtml.value;
    iframe.document.open();
    iframe.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
     
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        
       ${newCssStyle}
        <style>
        ${cssTextarea.value};
        </style>
        <title>Document</title>
    </head>
    <body>
        ${textHtml.value}
       
        <script>
        ${jsTextarea.value}
        </script>
        ${newScript}
        
        
    </body>
    </html>`);
    iframe.document.close();
}
chageCode();
// main function