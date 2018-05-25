const fs = require('fs')

function createTableData(){
  const COUNTER_TABLE = 12
  const TABLE_8SEATS = 2
  const TABLE_2SEATS = 4
  const TABLE_4SEATS = 6

  let counter = 1

  let obj = {
    tables: []
  }

  for(let i = 0; i < COUNTER_TABLE; i++){
    obj.tables.push({ id: counter, type: 'COUNTER', capacity: 1, people: null })
    counter += 1
  }

  for(let i = 0; i < TABLE_2SEATS; i++){
    obj.tables.push({ id: counter, type: '2SEATS', capacity: 2, people: null })
    counter += 1
  }

  for(let i = 0; i < TABLE_8SEATS; i++){
    obj.tables.push({ id: counter, type: '8SEATS', capacity: 8, people: null })
    counter += 1
  }

  for(let i = 0; i < TABLE_4SEATS; i++){
    obj.tables.push({ id: counter, type: '4SEATS', capacity: 4, people: null })
    counter += 1
  }

  fs.writeFile('../data/Tables.json', JSON.stringify(obj), 'utf8', () => {})

}

createTableData()
