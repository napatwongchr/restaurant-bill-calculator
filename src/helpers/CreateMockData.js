const fs = require('fs')

function createTableData(){
  const COUNTER_TABLE = 12
  const TABLE_8SEATS = 2
  const TABLE_2SEATS = 4
  const TABLE_4SEATS = 6

  let counter = 1

  let obj = {
    data: []
  }

  for(let i = 0; i < COUNTER_TABLE; i++){
    obj.data.push({ id: counter, type: 'COUNTER', capacity: 1,
    people: null, items: [{ name: 'Buffet', quantity:1, price:459 }] })
    counter += 1
  }

  for(let i = 0; i < TABLE_2SEATS; i++){
    obj.data.push({ id: counter, type: '2SEATS', capacity: 2,
    people: null, items: [] })
    counter += 1
  }

  for(let i = 0; i < TABLE_8SEATS; i++){
    obj.data.push({ id: counter, type: '8SEATS', capacity: 8,
    people: null, items: [] })
    counter += 1
  }

  for(let i = 0; i < TABLE_4SEATS; i++){
    obj.data.push({ id: counter, type: '4SEATS', capacity: 4,
    people: null, items: [] })
    counter += 1
  }

  fs.writeFile('../data/Tables.json', JSON.stringify(obj), 'utf8', () => {})

}

createTableData()
