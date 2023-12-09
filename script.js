console.log('workin')
//#############################################################################

// блюдо на замовлення елементи
const pizzaCheckbox = document.getElementById('pizza-checkbox')
const hotDogCheckbox = document.getElementById('hot-dog-checkbox')
const hamburgerCheckbox = document.getElementById('hamburger-checkbox')
const popcornCheckbox = document.getElementById('popcorn-checkbox')
const chypaChypsCheckbox = document.getElementById('chypa-chyps-checkbox')


// ############################################################################
// інформація замовлення елементи

const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const emailSelector = document.getElementById('email-selector')
const streetSelect = document.getElementById('street-select')
const citySelect = document.getElementById('city-select')

// ############################################################################
// розраховування елементи

const gotivka = document.getElementById('gotivka')
const creditCard = document.getElementById('credit-card')
const masterCard = document.getElementById('master-card')
const visaCard = document.getElementById('visa-card')
const discoveryCard = document.getElementById('discovery-card')
const americanExpressCard = document.getElementById('american-express-card')
const check = document.getElementById('check')
//############################################################################

const orderInformation = [firstName,lastName,email]
const orderInformationSelect = [emailSelector,streetSelect,citySelect]
const paymentInformation = [gotivka,check,creditCard]
const cardsInformation = [masterCard,visaCard,discoveryCard,americanExpressCard]
const foods =[pizzaCheckbox,hotDogCheckbox,hamburgerCheckbox,popcornCheckbox,chypaChypsCheckbox]

//############################################################################
// buttons 
const submitButton = document.getElementById('submit-button')
const clearButton = document.getElementById('clear-button')
const creditCardWrapper = document.getElementById('card-wrapper')
const firstForm = document.getElementById('first-form')
const secondForm = document.getElementById('second-form')
const thirdForm = document.getElementById('third-form')
//############################################################################


let cardWrapper = document.getElementById('card-wrapper')
let emailDisabled = document.getElementById('email-disabled')
let cityDisabled = document.getElementById('city-disabled')
let streetDisabled = document.getElementById('street-disabled')
paymentInformation.forEach(payment=>{
    payment.addEventListener('change',(event)=>{
        console.log(`e:`,event.target);
        if(event.target.id==='credit-card'){
            console.log(`CREDIT CARD`)
            
            creditCardWrapper.classList.add('grid')
            
        } else {
            creditCardWrapper.classList.remove('grid')

        }
        paymentInformation.forEach(paymentInfo=>{
        if(paymentInfo.name !== event.target.name){
            paymentInfo.checked = false
        } 
    })
    })

})

cardsInformation.forEach(card=>{
    console.log(`card: `,card)
    card.addEventListener('change',(e)=>{
        console.log(`e.target: `,e.target)
        console.log(`card.id: `,card.id)
        cardsInformation.forEach(card2=>{
            if(card2.name !== e.target.name){
                card2.checked = false
            }

        })
    })
})


function clearBtn(){
    foods.forEach(food=>food.checked = false)
    paymentInformation.forEach(paymentInformation =>paymentInformation.checked = false)
    orderInformation.forEach(order=>order.value = '')
    // orderInformation.forEach(orderInformation=>{
    //     console.log(`order information :`,orderInformation)
    //     if(orderInformation?.value !==''){
    //         console.log(`order info is not clear`, orderInformation.value)
    //         orderInformation.value = ''
    //     } else {
    //         console.log(`value is not here`)
    //     }
    // })
    // orderInformationSelect.forEach(select => {
    //     console.log(`length:`, select.length);
    //     for (let i = 0; i !== select.length; i++){
    //         console.log(`i:`,i);
    //         console.log(`select:`, select[i], 'is selected: ', select[i].selected)
    //     }

        
    // })
    emailDisabled.selected = true
    cityDisabled.selected = true
    streetDisabled.selected = true
    console.log('emailSelector',emailSelector)
    cardsInformation.forEach(card=>{
        card.checked=false
    })
    creditCardWrapper.classList.remove('grid')
} 

// function submitForm() {
//     console.log('submitting form')
//     let order = {}
//     let foodChecked=[]
//     let regex = /-checkbox /
//     foods.forEach(food=>{
//         if(food.checked){
//             let regex = /-checkbox/
            
//             foodChecked.push({name:food.id.replace(regex,'')})
//         }
//     })
//     if(foodChecked.length === 0){
//         alert('не вибрали блюдо')
//     }
//     order.food = foodChecked

//     let notAddedOrderInformation = []
//     orderInformation.forEach(orderInfo=>{
//         console.log(orderInfo)
//         if(!orderInfo.value){
//             console.log('не заповнена анкета ', orderInfo)
//             notAddedOrderInformation.push(orderInfo.id)
//             // alert('не заповнена анкета ', orderInfo)
//         } else {
//             order[orderInfo.id] = orderInfo.value
//         }
//     })
//     let notSelectedOrderInformation =[]
//     orderInformationSelect.forEach(orderInfoSelect=>{
//         // console.log(`orderInfoSelect`,orderInfoSelect)
//         for(let i=0; i<orderInfoSelect.length;i++){
//             if(
// orderInfoSelect[i]?.id === 'email-disabled' && orderInfoSelect[i].selected  || orderInfoSelect[i]?.id === 'city-disabled' 
// && orderInfoSelect[i].selected || orderInfoSelect[i]?.id === 'street-disabled' && orderInfoSelect[i].selected
// )
// {
//     console.log(` if statement orderInfoSelect`, orderInfoSelect[i])
//     notSelectedOrderInformation.push(orderInfoSelect[i]?.id)
//     return
// }else {
//     if(orderInfoSelect[i]?.value){
//         order[orderInfoSelect[i]?.id]= orderInfoSelect[i]?.value
//     }
// }
//         }
        
//     })
//     console.log(`not selectedOrderInformation:`,notSelectedOrderInformation)
//     if(notSelectedOrderInformation.length > 0) {
//         console.log('не заповнена анкета до кінця')
//     }
//     if(emailDisabled.selected){
//         console.log('не заповнена анкета до кінця')
//         notAddedOrderInformation.push(emailDisabled)
//     } else if(streetDisabled.selected){
        
//         notAddedOrderInformation.push(streetDisabled)
//     } else if ( cityDisabled.selected){
//         notAddedOrderInformation.push(cityDisabled)

//     }
//     console.log(notAddedOrderInformation)
    
//     let paymentChecked = []
//     paymentInformation.forEach(paymentInfo=>{
//         console.log(`payment info:`,paymentInfo)
//         if(paymentInfo.checked){
//             paymentChecked.push(paymentInfo.id)
//         }
//     })
//     if(paymentChecked.length === 0 ){
//         // return alert('не заповнена анкета до кінця')

//     }
    
//     if(notAddedOrderInformation.length !== 0){
//          return alert('не заповнена анкета до кінця')
//     }

//     console.log(order)
//     alert('Замовлення було оформленно')
// }

function submitForm(){
    console.log('firstForm',firstForm.getElementsByTagName('pizza'))
    console.log('secondForm',secondForm)
    console.log('thirdForm',thirdForm)
    let foodChecked = []
    let order = {}
    foods.forEach(food=>{
        if(food.checked){
            let regex = /-checkbox/
            
            foodChecked.push({name:food.id.replace(regex,'')})
        }
    })
    if(foodChecked.length === 0){
        return alert('не вибрали блюдо')
    }
    order.food = foodChecked
        
    let notAddedOrderInformation = []
    orderInformation.forEach(orderInfo=>{
        console.log(orderInfo)
        if(!orderInfo.value){
            console.log('не заповнена анкета ', orderInfo)
            notAddedOrderInformation.push(orderInfo.id)
            // alert('не заповнена анкета ', orderInfo)
        } else {
            order[orderInfo.id] = orderInfo.value
        }
    })
    let notSelectedOrderInformation =[]
    orderInformationSelect.forEach(orderInfoSelect=>{
                // console.log(`orderInfoSelect`,orderInfoSelect)
        for(let i=0; i<orderInfoSelect.length;i++){
                    if(
            orderInfoSelect[i]?.id === 'email-disabled' && orderInfoSelect[i].selected  || orderInfoSelect[i]?.id === 'city-disabled' 
            && orderInfoSelect[i].selected || orderInfoSelect[i]?.id === 'street-disabled' && orderInfoSelect[i].selected
            )
            {
                console.log(` if statement orderInfoSelect`, orderInfoSelect[i])
                notSelectedOrderInformation.push(orderInfoSelect[i]?.id)
                return
            }else {
                if(orderInfoSelect[i]?.value){
                    order[orderInfoSelect[i]?.id]= orderInfoSelect[i]?.value
                }
            }
                }
                
    })
    console.log(`not selectedOrderInformation:`,notSelectedOrderInformation)
    if(notSelectedOrderInformation.length > 0) {
        console.log('не заповнена анкета до кінця')
    }
    if(emailDisabled.selected){
        console.log('не заповнена анкета до кінця')
        notAddedOrderInformation.push(emailDisabled)
    } else if(streetDisabled.selected){
        
        notAddedOrderInformation.push(streetDisabled)
    } else if ( cityDisabled.selected){
        notAddedOrderInformation.push(cityDisabled)

    }
    console.log(notAddedOrderInformation)
            
    let paymentChecked = []
    let cardSelected = []

    paymentInformation.forEach(paymentInfo=>{
        console.log(`payment info:`,paymentInfo)
        if(paymentInfo.checked){
            paymentChecked.push(paymentInfo.id)
        }
        if(paymentInfo.checked && paymentInfo.id === 'credit-card'){
            cardsInformation.forEach(card=>{
                if(card?.checked){
                    cardSelected.push(card)
                } 
            })
        }
    })
    if(cardSelected.length === 0 ){
        return alert('не заповнена анкета до кінця')
    }
    if(paymentChecked.length === 0 ){
        return alert('не заповнена анкета до кінця')

    }
    
    if(notAddedOrderInformation.length !== 0){
            return alert('не заповнена анкета до кінця')
    }
        
    
    clearBtn()
    alert('Замовлення було відправленно')

}