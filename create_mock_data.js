const fs = require("fs");
const { faker } = require('@faker-js/faker');
const filePath = "./cypress/fixtures/mock-data.json"

function createMockData(){
    fs.readFile(filePath, function (err, data) {
        if (err) {
          return console.error(err);
        }
        fillMockData(JSON.parse(data.toString()))
      });
}

function fillMockData (mockData){
    // File
    mockData.file ={}
    mockData.file.registroMedico ='DirectorioMedico.pdf'

    // Comand
    mockData.command ={}
    mockData.command.backspace ='{backspace}'

    //Email 
    mockData.email ={}
    mockData.email.good = faker.internet.email().toLowerCase();
    mockData.email.bad = faker.name.fullName();

    //Passwrods
    mockData.password ={}
    mockData.password.short= faker.random.alphaNumeric(5)
    mockData.password.long= faker.random.alphaNumeric(25)
    mockData.password.good= faker.random.alphaNumeric(12)
    mockData.password.bad= faker.random.alphaNumeric(12)

    //name
    mockData.name ={}
    mockData.name.short= faker.random.alphaNumeric(3)
    mockData.name.long= faker.random.alphaNumeric(61)
    mockData.name.good= faker.name.fullName({length:{max:60,min:6}})

    // age
    mockData.age ={}
    mockData.age.min= faker.random.numeric(1)
    mockData.age.max= faker.random.numeric(3)
    mockData.age.good= 20

    // country
    mockData.country ={}
    mockData.country.good = faker.address.country()
    mockData.country.bad = faker.random.alphaNumeric(21)

    writeMockData(mockData)

}

function writeMockData(mockData){
    fs.writeFile(filePath,JSON.stringify(mockData),function (err, ext) {
        if (err) {
          return console.error(err);
        }
    console.log(mockData)
    });
}

createMockData();