// 1
const cars = ["BMW", "VW", "Audi"]
cars.forEach((element) => console.log(element))
// 2
cars.forEach((car, index) => {
    console.log(`${index}: ${car}`)
})
// 3
const friends = ["rŪta", "RasA", "jUlius", "petRas", "miNdaugaS"]
const newFriendsArray = [...friends]
for (let i = 0; i < friends.length; i++) {
    newFriendsArray[i] = friends[i][0].toUpperCase() + friends[i].substr(1).toLowerCase()
    console.log(newFriendsArray[i])
}
// 4
const age = [30, 54, 12, 95, 2, 18]
const ofAge = age.filter(age => age >= 18)
console.log(ofAge)
// 5, 6, 7
const city = ['Garliava', 'Kaunas', 'Ignalina', 'klaipėda', 'vilnius', 'kėdainiai']
const citySorted = [...city].sort()
const formattedCity =  citySorted.map(city => city.charAt(0).toUpperCase() + city.substr(1).toLowerCase())
const cityFiltered = formattedCity.find(city => city.startsWith('K'))
console.log(cityFiltered)