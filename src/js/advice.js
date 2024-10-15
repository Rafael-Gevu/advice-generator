const adviceBtn = document.getElementById('advice-btn')








async function randomAdvices(){
    const url = 'https://api.adviceslip.com/advice' 
    const response = await fetch(url)
    return await response.json()
}

 async function randomAdvicesId(){
     const randomAdvicesDeck =  await randomAdvices();    
     return randomAdvicesDeck.slip.id
 }
 async function randomAdvicesAdvice(){
     const randomAdvicesDeck =  await randomAdvices();    
     return randomAdvicesDeck.slip.advice
 }
 
 
 adviceBtn.addEventListener('click', () => {
    getAdvice()
 })

 async function getAdvice(){
    const adviceNumber = document.getElementById('advice-number').innerText =`#${await randomAdvicesId()}`;
    const adviceText = document.querySelector('.advice-text').innerText = `"${await randomAdvicesAdvice()}"`;
 }
 getAdvice()