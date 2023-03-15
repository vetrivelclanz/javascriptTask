const text =[{
    "id": 1,
    "name": "Dick MacIlwrick",
    "age": 33,
    "gender": "Male"
  }, {
    "id": 2,
    "name": "Easter Elsmere",
    "age": 54,
    "gender": "Female"
  }, {
    "id": 3,
    "name": "Renaud Twinning",
    "age": 48,
    "gender": "Male"
  }, {
    "id": 4,
    "name": "Ally Ricci",
    "age": 36,
    "gender": "Female"
  }, {
    "id": 5,
    "name": "Alisa Halcro",
    "age": 27,
    "gender": "Female"
  }, {
    "id": 6,
    "name": "Merrile Levis",
    "age": 52,
    "gender": "Female"
  }, {
    "id": 7,
    "name": "Drusilla Taffurelli",
    "age": 27,
    "gender": "Female"
  }, {
    "id": 8,
    "name": "Myrta Harby",
    "age": 44,
    "gender": "Female"
  }, {
    "id": 9,
    "name": "Costanza Shelf",
    "age": 30,
    "gender": "Female"
  }, {
    "id": 10,
    "name": "Everett Ainge",
    "age": 22,
    "gender": "Male"
  }, {
    "id": 11,
    "name": "Leigh Coode",
    "age": 21,
    "gender": "Male"
  }, {
    "id": 12,
    "name": "Janenna McKirton",
    "age": 20,
    "gender": "Female"
  }, {
    "id": 13,
    "name": "Perice Kelf",
    "age": 51,
    "gender": "Male"
  }, {
    "id": 14,
    "name": "Joe Gladwish",
    "age": 56,
    "gender": "Male"
  }, {
    "id": 15,
    "name": "Angus Jecks",
    "age": 46,
    "gender": "Male"
  }, {
    "id": 16,
    "name": "Natal Orrick",
    "age": 24,
    "gender": "Male"
  }, {
    "id": 17,
    "name": "Aurthur Spieght",
    "age": 39,
    "gender": "Male"
  }, {
    "id": 18,
    "name": "Hatti Cunniam",
    "age": 55,
    "gender": "Female"
  }, {
    "id": 19,
    "name": "Bell Giottoi",
    "age": 46,
    "gender": "Female"
  }, {
    "id": 20,
    "name": "Evered Wisham",
    "age": 50,
    "gender": "Male"
  }]


  console.log("value",text);
  let Male = text.filter((item) =>{
    return item.gender == "Male"
  })
  let value = Male.reduce((a, b) => a+b.age, 0)/ Male.length;
  console.log(value);
  
 
  let Female = text.filter((item) =>{
    return item.gender == "Female"
  })
  let value1 = Female.reduce((a, b) => a+b.age, 0)/ Female.length;
  console.log(value1);
  const result = {Female:value1, Male:value };

   console.log('object with average age:', result);

   

