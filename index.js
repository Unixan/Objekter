// Model
const appDiv = document.getElementById('app');
const sex = [' ', 'Kvinne', 'Mann', 'Hen']
const tableData = [
    {
        surName: 'Johansen',
        foreName: 'Ståle',
        sex: 'Mann',
        nationality: 'Norsk',
        checkedIn: true,
    }
]


// View

function view() {
    html = /*HTML*/ `
        <table>
            <tr style="background-color: blue; color: white">
                <td>Etternavn</td>
                <td>Fornavn</td>
                <td>Kjønn</td>
                <td>Nasjonalitet</td>
                <td style="width: 80px">Innsjekket</td>
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
                <td>${user.sex}</td>
                <td>${user.nationality}</td>
                <td>${isCheckedIn}</td>
                <td style="width: 110px">
                    <button>Rediger</button>  
                    <button>Slett</button>
                </td>
            </tr>
            
        `;
    }

    generateTable += /*HTML*/ `
        </table>
        <button>Legg til bruker</button>
        `
    console.log(generatedTable)
    return generatedTable
}