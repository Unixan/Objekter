// Model
const appDiv = document.getElementById('app');
const sex = ['Ingen', 'Kvinne', 'Mann', 'Hen']
let addNewUserValue = true;
let addNewUser = '';
let tableData = [
    {
        surName: 'Johansen',
        foreName: 'Ståle',
        midName: '',
        sex: 'Mann',
        nationality: 'Norway',
        checkedIn: true,
    }
]

const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "USA",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];


// View

function view() {
    addNewUser = addNewUserValue ? 'Legg til bruker' : 'Avbryt'
    html = /*HTML*/ `
        <table>
            <tr style="background-color: blue; 
                color: white;
                font-weight: bold;
                font-family: Arial, Helvetica, sans-serif;">
                <td>Etternavn</td>
                <td>Fornavn</td>
                <td>Mellomnavn</td>
                <td>Kjønn</td>
                <td>Land</td>
                <td style="width: 80px">Innsjekket</td>
                <td style="width: 110px">Handlinger</td>
            </tr>
        
    `
    html += generateTable();
    appDiv.innerHTML = html;

}

// Controller

function generateTable() {

    let generatedTable = '';
    for (i in tableData) {
        let user = tableData[i];
        let isCheckedIn = user.checkedIn ? 'Ja' : 'Nei';
        generatedTable += /*HTML*/`
            <tr>
                <td>${user.surName}</td>
                <td>${user.foreName}</td>
                <td>${user.midName}</td>
                <td>${user.sex}</td>
                <td>${user.nationality}</td>
                <td>${isCheckedIn}</td>
                <td>
                    <button>Rediger</button>  
                    <button onclick="deleteUser(i)">Slett</button>
                </td>
            </tr>
         `;

    }
    generatedTable += /*HTML*/ `
    </table>
    <p><button onclick="addUser()">${addNewUser}</button></p>
    `;
    return generatedTable


}

function deleteUser(index) {
    tableData.splice(index, 1)
    view()
}
function addUser() {
    if (addNewUserValue === true) {
        addNewUserValue = !addNewUserValue
        let sexChoices = makeList(sex);
        let countryChoices = makeList(countryList)
        view();
        html += /*HTML*/`
            <table>
                <tr>
                    <td><label for="nameInput">Navn:</label></td>
                    <td><input type="text" id="nameInput"></td>
                </tr>
                <tr>
                    <td><label for="midNameInput">Mellomnavn:</label></td>
                    <td><input type="text" id="midNameInput"></td>
                </tr>
                <tr>
                    <td><label for="surNameInput">Etternavn:</label></td>
                    <td><input type="text" id="surNameInput"></td>
                </tr>
                <tr>
                    <td><label for="sexInput">Kjønn:</label></td>
                    <td><select id="sexInput">
                        ${sexChoices}
                    </td>
                </tr>
                <tr>
                    <td><label for="nationSelect">Land:</labe></td>
                    <td><select id="nationSelect">
                        ${countryChoices}
                    </td>
                </tr>
                <tr>
                    <td><label for="checkIn">Sjekke inn nå?</label></td>
                    <td><input type="checkbox" id="checkIn">Sjekke inn</td>
                </tr>
            </table>
    `}
    else if(addNewUserValue === false){
        addNewUserValue = !addNewUserValue;
        view()
    }

    appDiv.innerHTML = html;
}

function makeList(list) {
    let generatedList = '';
    let listToGenerate = list
    for (i in listToGenerate) {
        generatedList += /*HTML*/ `<option value="${listToGenerate[i]}">${listToGenerate[i]}</option>`
    }

    return generatedList
}