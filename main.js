import './style.css'
import { } from './parser.js'


// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// import readXlsxFile from 'read-excel-file'

// // const textAviaDisplay = document.querySelector('#xmlOutput')
// const input = document.querySelector('input')
// // const aviaList = document.querySelector('#types')
// const app = document.querySelector('#app')
// const selectBlock = document.querySelector('#selectBlock')
// const textAreaBlock = document.querySelector('#textAreaBlock')

// let parsedObjects = []



// // Создаем объекты на странице
// const aviaList = document.createElement('select')
// const trainList = document.createElement('select')
// const hotelList = document.createElement('select')

// const textAviaDisplay = document.createElement('textArea')
// const textTrainDisplay = document.createElement('textArea')
// const textHotelDisplay = document.createElement('textArea')

// function createElements() {
//   app.appendChild(aviaList)
//   app.appendChild(textAviaDisplay)

//   app.appendChild(trainList)
//   app.appendChild(textTrainDisplay)

//   app.appendChild(hotelList)
//   app.appendChild(textHotelDisplay)

//   addEvents()
// }

// //Ивенты на list'ы
// function addEvents() {

//   aviaList.addEventListener('change', (event) => {
//     textAviaDisplay.value = null
//     let selectedOption = event.target.options[event.target.selectedIndex].text

//     const filtered = parsedObjects.filter(elem => elem.type === selectedOption)

//     filtered.forEach(elem => {
//       textAviaDisplay.value += elem.category + '\n'
//     })

//     textAviaDisplay.value += '\n'
//     textAviaDisplay.value += getAviaPattern(selectedOption)
//   })

//   trainList.addEventListener('change', (event) => {
//     textTrainDisplay.value = null
//     let selectedOption = event.target.options[event.target.selectedIndex].text

//     const filtered = parsedObjects.filter(elem => elem.trainType === selectedOption)


//     filtered.forEach(elem => {
//       textTrainDisplay.value += elem.category + '\n'
//     })

//     textTrainDisplay.value += '\n'
//     textTrainDisplay.value += getTrainPattern(selectedOption)
//   })

//   hotelList.addEventListener('change', (event) => {
//     textHotelDisplay.value = null
//     let selectedOption = event.target.options[event.target.selectedIndex].text

//     const filtered = parsedObjects.filter(elem => elem.hotelCombined === selectedOption)


//     filtered.forEach(elem => {
//       textHotelDisplay.value += elem.category + ' ' + elem.hotelCombined + '\n'
//     })

//     let HotelPriceFind = filtered.find(elem => elem.hotelCombined === selectedOption)
//     textHotelDisplay.value += '\n'
//     textHotelDisplay.value += getHotelPattern({
//       hotelMoscow: HotelPriceFind.hotelMoscow,
//       hotelSPB: HotelPriceFind.hotelSPB,
//       hotelRF: HotelPriceFind.hotelRF,
//       hotelAbroad: HotelPriceFind.hotelAbroad
//     })

//   })
// }



// // input
// input.addEventListener('change', () => {
//   readXlsxFile(input.files[0]).then((rows, index) => {
//     createObjectsFromXLS(rows)
//     // console.log(rows)
//     createElements()
//     listFill()
//   })
// })



// // Прходим по спарсенному массиву
// function createObjectsFromXLS(parsed) {
//   let sum = 0
//   let type = null
//   let trainType = null
//   let hotelType = null
//   let hotelMoscow = null
//   let hotelSPB = null
//   let hotelRF = null
//   let hotelAbroad = null
//   let result = null
//   let extractPriceResult = ''

//   // проходим по столбцам
//   parsed.forEach((elem, index) => {

//     // проходим по столбцам в строке
//     elem.forEach((insideElem, insideIndex) => {
//       if ((insideIndex === 2 || insideIndex === 3)) {
//         if (typeof insideElem === 'number') sum += String(insideElem)
//         if (typeof insideElem === 'string' && insideElem.length <= 2) sum += insideElem
//       }

//       //Идем по столбцу 6 и добавляем значение в type
//       if (insideIndex === 5 && insideElem != null) {
//         // type = insideElem.toLowerCase()
//         type = insideElem.toLowerCase().replace('\n', ' ')
//       }

//       //Идем по столбцу 7 и добавляем значение в trainType
//       if (insideIndex === 6 && index > 3 && insideElem != null) {
//         // trainType = insideElem.toLowerCase().replace('\n', ' ')  
//         result = findWords(insideElem.toLowerCase().replace('\n', ' '))
//         trainType = result ? result : trainType
//       }

//       // Идем по столбцам от 9 до 12
//       if (insideIndex === 8 && insideElem != null && index > 3) {
//         result = extractPrice(insideElem)
//         hotelMoscow = result ? result : hotelMoscow
//       }
//       if (insideIndex === 9 && insideElem != null && index > 3) {
//         result = extractPrice(insideElem)
//         hotelSPB = result ? result : hotelSPB

//       }
//       if (insideIndex === 10 && insideElem != null && index > 3) {
//         result = extractPrice(insideElem)
//         hotelRF = result ? result : hotelRF

//       }
//       if (insideIndex === 11 && insideElem != null && index > 3) {
//         result = extractPrice(insideElem)
//         hotelAbroad = result ? result : hotelAbroad
//       }

//     })

//     // записываем результат в parsedObjects
//     if (sum != 0) {
//       parsedObjects.push({
//         category: typeof sum === 'string' ? sum.slice(1) : sum,
//         type: type,
//         trainType: trainType,
//         hotelMoscow: hotelMoscow,
//         hotelSPB: hotelSPB,
//         hotelRF: hotelRF,
//         hotelAbroad: hotelAbroad,
//         hotelCombined: hotelMoscow + '-' + hotelSPB + '-' + hotelRF + '-' + hotelAbroad
//       })
//     }

//     sum = 0
//   })
//   console.log(parsedObjects)
// }

// // Выделяем цены из столбцов с ценами
// function extractPrice(inputString) {
//   let match = inputString.match(/(\d+\s*\d*)/); // Ищем группу из одной или более цифр, возможно разделенных пробелами
//   return match ? Number(match[0].replace(/\s/g, '')) : null; // Возвращаем найденное число или null, если число не найдено
// }

// // Выделяем тип св или св, купе
// function findWords(text) {
//   // Массив слов, которые мы хотим найти
//   let words = ["св", "купе"]

//   // Создаем регулярное выражение, которое ищет слова "св" и "купе"
//   let regex = new RegExp(words.join("|"), "g")

//   // Используем регулярное выражение для поиска слов в тексте
//   let matches = text.match(regex)

//   // Если найдены совпадения
//   if (matches) {
//     // Удаляем дубликаты из массива совпадений
//     matches = [...new Set(matches)]

//     // Если найдено только слово "купе"
//     if (matches.length === 1 && matches[0] === "купе") {
//       return "купе"
//     }

//     // Если найдено слово "св"
//     if (matches.includes("св")) {
//       return "св, купе"
//     }
//   }

//   // Если совпадений не найдено, возвращаем null
//   return null
// }


// //Заполняем списков значениями из массива parsedObjects
// function listFill() {

//   let aviaChooseOption = document.createElement('option')
//   aviaChooseOption.text = 'Выберите пункт'
//   aviaList.add(aviaChooseOption, aviaList[0])

//   let trainChooseOption = document.createElement('option')
//   trainChooseOption.text = 'Выберите пункт'
//   trainList.add(trainChooseOption, trainList[0])

//   let hotelChooseOption = document.createElement('option')
//   hotelChooseOption.text = 'Выберите пункт'
//   hotelList.add(hotelChooseOption, hotelList[0])

//   let filteredAviaSet = new Set()
//   let filteredTrainSet = new Set()
//   let filteredHotelSet = new Set()

//   // Заполняем сеты элементами для списков
//   parsedObjects.forEach(elem => {
//     filteredAviaSet.add(elem.type)
//     filteredTrainSet.add(elem.trainType)
//     filteredHotelSet.add(elem.hotelCombined)
//   })

//   // Заполняем списки
//   filteredAviaSet.forEach(elem => {
//     let option = document.createElement('option')
//     option.text = elem
//     aviaList.add(option)
//   })

//   filteredTrainSet.forEach(elem => {
//     let option = document.createElement('option')
//     option.text = elem
//     trainList.add(option)
//   })

//   filteredHotelSet.forEach(elem => {
//     let option = document.createElement('option')
//     option.text = elem
//     hotelList.add(option)
//   })


// }



// //Редактируем паттерн
// function getAviaPattern(text) {
//   let MinHoursForBusinessClassFlight = 0
//   let AllowEconomy = null
//   let AllowBusiness = null

//   switch (text) {
//     case 'эконом':
//       AllowBusiness = false
//       AllowEconomy = true
//       MinHoursForBusinessClassFlight = 0
//       break
//     case 'эконом, при перелетах более 5 часов бизнес':
//       AllowBusiness = true
//       AllowEconomy = true
//       MinHoursForBusinessClassFlight = 5
//       break
//     case 'эконом (предпочтительно) или бизнес - по усмотрению сотрудника':
//       AllowBusiness = true
//       AllowEconomy = true
//       MinHoursForBusinessClassFlight = 0
//       break
//     case 'бизнес':
//       AllowBusiness = true
//       AllowEconomy = false
//       MinHoursForBusinessClassFlight = 0
//       break
//     default:
//       return `No XML`
//       break
//   }

//   return `<?xml version="1.0" encoding="utf-8"?>
//   <AviaEngineV2Policy>
//       <DepartureTime>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <AllowedHoursMin>0</AllowedHoursMin>
//           <AllowedHoursMax>0</AllowedHoursMax>
//       </DepartureTime>
//       <Connections>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <MaximumConnectionsValue>0</MaximumConnectionsValue>
//       </Connections>
//       <FlightNumbers>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <ForbiddenFlights />
//           <OnlySelectedFlightsAreAllowed>false</OnlySelectedFlightsAreAllowed>
//       </FlightNumbers>
//       <AirplaneTypes>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <ForbiddenAirplaneTypes />
//           <OnlySelectedAirplanesAreAllowed>false</OnlySelectedAirplanesAreAllowed>
//       </AirplaneTypes>
//       <Geography>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <IsAcceptRule>false</IsAcceptRule>
//       </Geography>
//       <DaysToDeparture>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <Days>0</Days>
//           <Rules>
//               <DaysDRule>
//                   <id_BudgetCode p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <Days>14</Days>
//               </DaysDRule>
//           </Rules>
//       </DaysToDeparture>
//       <WeekDays>
//           <Enabled>false</Enabled>
//           <id_BudgetCode>1069805</id_BudgetCode>
//           <CheckOnlyFlightDates>false</CheckOnlyFlightDates>
//           <WeekDays>
//               <int>1</int>
//           </WeekDays>
//           <ExactDays />
//       </WeekDays>
//       <AdvancedFareClass>
//           <Enabled>true</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <Routes>
//               <AirRouteClassAllowance>
//                   <Origins>ALL</Origins>
//                   <Destinations>ALL</Destinations>
//                   <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <IncludeServiceFee>false</IncludeServiceFee>
//                   <id_BudgetCode p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <AllowBusiness>${AllowBusiness}</AllowBusiness>
//                   <AllowEconomy>${AllowEconomy}</AllowEconomy>
//                   <EconomyClassStartHour p5:nil="true"
//                       xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <EconomyClassEndHour p5:nil="true"
//                       xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <BusinessClassStartHour p5:nil="true"
//                       xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <BusinessClassEndHour p5:nil="true"
//                       xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <MinHoursForEconomyClassFlight>0</MinHoursForEconomyClassFlight>
//                   <MinHoursTypeForEconomyClassFlight>WithDocking</MinHoursTypeForEconomyClassFlight>
//                   <MinHoursForBusinessClassFlight>${MinHoursForBusinessClassFlight}</MinHoursForBusinessClassFlight>
//                   <MinHoursTypeForBusinessClassFlight>WithDocking</MinHoursTypeForBusinessClassFlight>
//               </AirRouteClassAllowance>
//           </Routes>
//       </AdvancedFareClass>
//       <AdvancedPriceDeviations>
//           <Enabled>true</Enabled>
//           <id_BudgetCode>1069805</id_BudgetCode>
//           <Routes>
//               <AirRoutePriceDeviation>
//                   <Origins>!CEE</Origins>
//                   <Destinations>!CEE</Destinations>
//                   <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <IncludeServiceFee>false</IncludeServiceFee>
//                   <FixedRubDeviation p5:nil="true"
//                       xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <PercentDeviation>15</PercentDeviation>
//                   <CheckBaggage>true</CheckBaggage>
//                   <CheckBothDeviation>false</CheckBothDeviation>
//               </AirRoutePriceDeviation>
//               <AirRoutePriceDeviation>
//                   <Origins>UCT,LED</Origins>
//                   <Destinations>LED,UCT</Destinations>
//                   <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <IncludeServiceFee>false</IncludeServiceFee>
//                   <FixedRubDeviation p5:nil="true"
//                       xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <PercentDeviation p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <CheckBaggage>true</CheckBaggage>
//                   <CheckBothDeviation>false</CheckBothDeviation>
//               </AirRoutePriceDeviation>
//           </Routes>
//       </AdvancedPriceDeviations>
//       <AdvancedPriceLimits>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <Routes />
//       </AdvancedPriceLimits>
//       <ItineraryTypes>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <OWProhibited>false</OWProhibited>
//           <RTProhibited>false</RTProhibited>
//       </ItineraryTypes>
//       <BaggageRestriction>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <BaggagePermitExt>Permitted</BaggagePermitExt>
//       </BaggageRestriction>
//       <ExchangeRestriction>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <ExchangePermit>false</ExchangePermit>
//       </ExchangeRestriction>
//       <RefundRestriction>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <RefundPermit>false</RefundPermit>
//       </RefundRestriction>
//       <BookingClassRestriction>
//           <Enabled>false</Enabled>
//           <id_BudgetCode>1069805</id_BudgetCode>
//           <ClassRestrictions />
//       </BookingClassRestriction>
//       <PriorityAirlines>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <OnlyPriorityAirlinesAreAllowed>false</OnlyPriorityAirlinesAreAllowed>
//       </PriorityAirlines>
//   </AviaEngineV2Policy>`
// }

// function getTrainPattern(text) {
//   let string = null

//   switch (text) {
//     case 'купе':
//       string = `            <TrainFareTypeForTravelPolicy>Coupet</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Platzcart</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Common</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Seats</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>SapsanEconomy</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>VoronezhSeats</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Lastochka</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>GrandExpress</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Strizh</TrainFareTypeForTravelPolicy>`
//       break
//     case 'св, купе':
//       string = `            <TrainFareTypeForTravelPolicy>Soft</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Coupet</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Platzcart</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Common</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Seats</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>SapsanEconomy</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>SapsanBusiness</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>VoronezhSeats</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Lastochka</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>GrandExpress</TrainFareTypeForTravelPolicy>
//                             <TrainFareTypeForTravelPolicy>Strizh</TrainFareTypeForTravelPolicy>`
//       break
//     default:
//       return `No XML`
//       break
//   }

//   return `<?xml version="1.0" encoding="utf-8"?>
//   <RailV3Policy>
//       <TrainType>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <AllowedCathegories />
//       </TrainType>
//       <VagonType>
//           <Enabled>true</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <AllowedTypes>
//               ${string}
//           </AllowedTypes>
//           <DenyedTypesExclusion />
//           <AllowGivenServiceClassesOnly>false</AllowGivenServiceClassesOnly>
//       </VagonType>
//       <Duration>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <DurationHours>0</DurationHours>
//           <DurationHoursTo>0</DurationHoursTo>
//       </Duration>
//       <DaysOfWeek>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <WeekDays />
//           <ExactDays />
//       </DaysOfWeek>
//       <DaysToDepart>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <Rules>
//               <DaysDRule>
//                   <id_BudgetCode p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <Days>14</Days>
//               </DaysDRule>
//           </Rules>
//           <Days>0</Days>
//       </DaysToDepart>
//       <Price>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <PriceLimitations>
//               <FareGroupPriceLimitations>
//                   <MinimumPriceDeltaFix>0</MinimumPriceDeltaFix>
//                   <MinimumPriceDeltaPercent>0</MinimumPriceDeltaPercent>
//                   <Fares />
//                   <AppliedWithinSelectedTrain>false</AppliedWithinSelectedTrain>
//                   <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//               </FareGroupPriceLimitations>
//           </PriceLimitations>
//       </Price>
//       <Route>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <Routes>
//               <RailRoute>
//                   <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                   <Fares />
//                   <Cathegories />
//                   <IsForbidRule>false</IsForbidRule>
//               </RailRoute>
//           </Routes>
//       </Route>
//       <RoutePrice>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <Routes />
//       </RoutePrice>
//       <Meal>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <MealIsForbidden>false</MealIsForbidden>
//       </Meal>
//       <PlaceCountForPax>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <MaxPlaceCount>4</MaxPlaceCount>
//       </PlaceCountForPax>
//       <DurationByServiceClass>
//           <Enabled>false</Enabled>
//           <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//           <DurationLimits />
//       </DurationByServiceClass>
//   </RailV3Policy>`
// }

// function getHotelPattern({
//   hotelMoscow,
//   hotelSPB,
//   hotelRF,
//   hotelAbroad }) {

//   return `<?xml version="1.0" encoding="utf-8"?>
// <HotelV4Policy>
//     <PriceLimits>
//         <Enabled>true</Enabled>
//         <id_BudgetCode>0</id_BudgetCode>
//         <Rules>
//             <PriceLimit>
//                 <CountryRegex>Россия </CountryRegex>
//                 <CityRegex>Москва</CityRegex>
//                 <PricePerNightLimit>${hotelMoscow}</PricePerNightLimit>
//                 <CurrencyCode>RUB</CurrencyCode>
//                 <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                 <IncludeServiceFee>false</IncludeServiceFee>
//                 <IncludeEarlyCheckInFee>false</IncludeEarlyCheckInFee>
//                 <IncludeLateCheckOutFee>false</IncludeLateCheckOutFee>
//                 <ExcludeVAT>false</ExcludeVAT>
//                 <ConsiderPaxPerOrder>false</ConsiderPaxPerOrder>
//             </PriceLimit>
//             <PriceLimit>
//                 <CountryRegex>Россия</CountryRegex>
//                 <CityRegex>Санкт-Петербург</CityRegex>
//                 <PricePerNightLimit>${hotelSPB}</PricePerNightLimit>
//                 <CurrencyCode>RUB</CurrencyCode>
//                 <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                 <IncludeServiceFee>false</IncludeServiceFee>
//                 <IncludeEarlyCheckInFee>false</IncludeEarlyCheckInFee>
//                 <IncludeLateCheckOutFee>false</IncludeLateCheckOutFee>
//                 <ExcludeVAT>false</ExcludeVAT>
//                 <ConsiderPaxPerOrder>false</ConsiderPaxPerOrder>
//             </PriceLimit>
//             <PriceLimit>
//                 <CountryRegex>Россия </CountryRegex>
//                 <CityRegex />
//                 <PricePerNightLimit>${hotelRF}</PricePerNightLimit>
//                 <CurrencyCode>RUB</CurrencyCode>
//                 <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                 <IncludeServiceFee>false</IncludeServiceFee>
//                 <IncludeEarlyCheckInFee>false</IncludeEarlyCheckInFee>
//                 <IncludeLateCheckOutFee>false</IncludeLateCheckOutFee>
//                 <ExcludeVAT>false</ExcludeVAT>
//                 <ConsiderPaxPerOrder>false</ConsiderPaxPerOrder>
//             </PriceLimit>
//             <PriceLimit>
//                 <CountryRegex />
//                 <CityRegex />
//                 <PricePerNightLimit>${hotelAbroad}</PricePerNightLimit>
//                 <CurrencyCode>USD</CurrencyCode>
//                 <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                 <IncludeServiceFee>false</IncludeServiceFee>
//                 <IncludeEarlyCheckInFee>false</IncludeEarlyCheckInFee>
//                 <IncludeLateCheckOutFee>false</IncludeLateCheckOutFee>
//                 <ExcludeVAT>false</ExcludeVAT>
//                 <ConsiderPaxPerOrder>false</ConsiderPaxPerOrder>
//             </PriceLimit>
//         </Rules>
//     </PriceLimits>
//     <DaysUntilCheckIn>
//         <Enabled>false</Enabled>
//         <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//         <Rules>
//             <DaysCRule>
//                 <id_BudgetCode p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
//                 <Days>14</Days>
//             </DaysCRule>
//         </Rules>
//         <MinimalNumberOfDaysUntilCheckIn>0</MinimalNumberOfDaysUntilCheckIn>
//         <OnlyWorkDays>false</OnlyWorkDays>
//     </DaysUntilCheckIn>
//     <Stars>
//         <Enabled>false</Enabled>
//         <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//         <Rules />
//         <AllowHotelsWithNoStars>false</AllowHotelsWithNoStars>
//         <AllowHotelsWithOneStar>false</AllowHotelsWithOneStar>
//         <AllowHotelsWithTwoStars>false</AllowHotelsWithTwoStars>
//         <AllowHotelsWithThreeStars>false</AllowHotelsWithThreeStars>
//         <AllowHotelsWithFourStars>false</AllowHotelsWithFourStars>
//         <AllowHotelsWithFiveStars>false</AllowHotelsWithFiveStars>
//     </Stars>
//     <WeekDays>
//         <Enabled>false</Enabled>
//         <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//         <ForbidMondays>false</ForbidMondays>
//         <ForbidTuesdays>false</ForbidTuesdays>
//         <ForbidWednesdays>false</ForbidWednesdays>
//         <ForbidThursdays>false</ForbidThursdays>
//         <ForbidFridays>false</ForbidFridays>
//         <ForbidSaturdays>false</ForbidSaturdays>
//         <ForbidSundays>false</ForbidSundays>
//         <ExactDates />
//         <OnlyCheckInCheckOutDates>false</OnlyCheckInCheckOutDates>
//     </WeekDays>
//     <ForbiddenHotels>
//         <Enabled>true</Enabled>
//         <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//         <Rules>
//             <HotelName>
//                 <CountryRegex>Россия</CountryRegex>
//                 <CityRegex>Череповец</CityRegex>
//                 <HotelNameRegex>Единство</HotelNameRegex>
//             </HotelName>
//             <HotelName>
//                 <CountryRegex>Россия</CountryRegex>
//                 <CityRegex>Санкт-Петербург</CityRegex>
//                 <HotelNameRegex>Невский 105</HotelNameRegex>
//             </HotelName>
//             <HotelName>
//                 <CountryRegex>Россия</CountryRegex>
//                 <CityRegex>Москва</CityRegex>
//                 <HotelNameRegex>Мандарин</HotelNameRegex>
//             </HotelName>
//         </Rules>
//     </ForbiddenHotels>
//     <Meal>
//         <Enabled>true</Enabled>
//         <id_BudgetCode>0</id_BudgetCode>
//         <MealIsForbidden>false</MealIsForbidden>
//     </Meal>
//     <EarlyCheckinLateCheckout>
//         <Enabled>true</Enabled>
//         <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//         <EarlyCheckinIsForbidden>true</EarlyCheckinIsForbidden>
//         <LateCheckoutIsForbidden>true</LateCheckoutIsForbidden>
//     </EarlyCheckinLateCheckout>
//     <LengthOfStayLimit>
//         <Enabled>false</Enabled>
//         <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//         <MinNumberOfStay p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//         <MaxNumberOfStay p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//     </LengthOfStayLimit>
//     <CorporateHotels>
//         <Enabled>false</Enabled>
//         <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//         <ViolateWhenNot3d>false</ViolateWhenNot3d>
//     </CorporateHotels>
//     <PenaltyRateProhibition>
//         <Enabled>false</Enabled>
//         <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
//     </PenaltyRateProhibition>
// </HotelV4Policy>`
// }