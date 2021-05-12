const correctAnswers=['B', 'A', 'B', 'A']
const form =document.querySelector('.quiz-form')
const result=document.querySelector('.result')
const displayScore=document.querySelector('.score')

form.addEventListener('submit', e=>{

    e.preventDefault()
    let score=0;
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index)=>{

        if (answer===correctAnswers[index]){
            score +=25;
    
        }
    })
    scrollTo(0,0)
    result.classList.remove('d-none')
    displayScore.textContent=`${score}%`
})
