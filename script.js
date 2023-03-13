const advice = document.getElementById('advice')
const phrase = document.getElementById('phrase')

async function getAPI(){
    const ApiKey = await fetch('https://api.adviceslip.com/advice')
    const ApiData = await ApiKey.json()
    return ApiData
}

async function advices(){
    const data = await getAPI()
    phrase.textContent = `"${data.slip.advice}"`
    advice.textContent = `#ADVICE ${data.slip.id}`
}

advices()
