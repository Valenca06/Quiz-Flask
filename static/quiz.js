document.addEventListener("DOMContentLoaded", function () {
    let questions = [
        {
            numb: 1,
            question: "Qual dos seguintes materiais é mais fácil de reciclar?",
            answer: "B) Isopor",
            options: [
                "A) Vidro",
                "B) Isopor",
                "C) Borracha",
                "D) Tecidos sintéticos"
            ]
        },
        {
            numb: 2,
            question: "Qual dos seguintes gases é considerado um gás de efeito estufa?",
            answer: "C) Dióxido de carbono",
            options: [
                "A) Nitrogênio",
                "B) Oxigênio",
                "C) Dióxido de carbono",
                "D) Argônio"
            ]
        },
        {
            numb: 3,
            question: "Qual é o principal benefício das florestas para o clima global?",
            answer: "B) Regulação da temperatura.",
            options: [
                "A) Produção de madeira.",
                "B) Regulação da temperatura.",
                "C) Armazenamento de carbono.",
                "D) Provisão de habitat para animais."
            ]
        },
        {
            numb: 4,
            question: "O que é a pegada ecológica?",
            answer: "B) Medida do impacto ambiental causado por uma pessoa ou comunidade.",
            options: [
                "A) Quantidade de lixo produzido por uma pessoa.",
                "B) Medida do impacto ambiental causado por uma pessoa ou comunidade.",
                "C) Quantidade de energia consumida por uma residência.",
                "D) Área de florestas preservadas por um país."
            ]
        },
        {
            numb: 5,
            question: "	O que significa a sigla ODSna ONU?",
            answer: "A) Objetivos do Desenvolvimento Sustentável.",
            options: [
                "A) Objetivos do Desenvolvimento Sustentável.",
                "B) Organização de Desenvolvimento Social.",
                "C) Organização para a Defesa da Sustentabilidade.",
                "D) Objetivos de Defesa da Sociedade."
            ]
        },
        {
            numb: 6,
            question: "O que é sustentabilidade?",
            answer: "A) Utilização de recursos naturais de maneira a garantir sua disponibilidade para futuras gerações.",
            options: [
                "A) Utilização de recursos naturais de maneira a garantir sua disponibilidade para futuras gerações.",
                "B) Exploração máxima dos recursos naturais para desenvolvimento econômico rápido.",
                "C) Exclusivo uso de fontes de energia não renováveis.",
                "D) Manutenção do status quo sem considerar o impacto ambiental."
            ]
        },
        {
            numb: 7,
            question: "Qual prática agrícola ajuda a preservar a saúde do solo?",
            answer: "C) Rotação de culturas.",
            options: [
                "A) Monocultura.",
                "B) Uso excessivo de adubo.",
                "C) Rotação de culturas.",
                "D) Uso de agrotóxicos "
            ]
        },
        {
            numb: 8,
            question: "O que são áreas protegidas?",
            answer: "B) Territórios onde a conservação da natureza é prioritária e atividades humanas são restritas.",
            options: [
                "A) Regiões reservadas para exploração mineral.",
                "B) Territórios onde a conservação da natureza é prioritária e atividades humanas são restritas.",
                "C) Áreas destinadas exclusivamente à agricultura.",
                "D) Locais para desenvolvimento urbano intensivo. "
            ]
        },
        {
            numb: 9,
            question: "O que é desenvolvimento sustentável?",
            answer: "B) Desenvolvimento que visa atender às necessidades do presente sem comprometer a capacidade das futuras gerações de atenderem às suas próprias necessidades.",
            options: [
                "A) Desenvolvimento que não leva em consideração os recursos naturais.",
                "B) Desenvolvimento que visa atender às necessidades do presente sem comprometer a capacidade das futuras gerações de atenderem às suas próprias necessidades.",
                "C) Crescimento econômico a qualquer custo.",
                "D) Exclusiva ênfase no crescimento industrial. "
            ]
        },
       
        {
            numb: 10,
            question: "Qual a principal característica do Amianto que o impede de ser utilizado de forma sustentável ",
            answer: "A) Contaminação que pode levar a diversos danos para a matéria orgânica ",
            options: [
                "A) Contaminação que pode levar a diversos danos para a matéria orgânica ",
                "B) Alta resistência a degradação ",
                "C) Versatilidade Industrial ",
                "D) Flexibilidade "
            ]
        },
        {
            numb: 11,
            question: "Que período histórico gerou danos imensos a camada de ozônio ",
            answer: "D) Revolução industrial ",
            options: [
                "A)Era do Bronze",
                "B)Idade média",
                "C)Grandes navegações ",
                "D) Revolução industrial "
            ]
        },

        {
            numb: 12,
            question: "Qual o tipo de gás que foi amplamente utilizado no século 20 que causou danos a camada de ozônio e posteriormente a sua proibição em diversos países ",
            answer: "D)Clorofluorcarboneto",
            options: [
                "A) Argônio ",
                "B) Hélio ",
                "C)Oganessônio",
                "D)Clorofluorcarboneto"
            ]
        },
        
        {
            numb: 13,
            question: "Qual teoria defendia o desenvolvimento sustentável para solucionar problemas populacionais",
            answer: "B) Teoria Ecomalthusiana",
            options: [
                "A) Teoria Demográfica Reformista",
                "B) Teoria Ecomalthusiana",
                "C)Teoria Malthusiana",
                "D)Teoria Neomalthusiana"
            ]
        },
        
        {
            numb: 14,
            question: "A Conferência de Estocolmo teve como principal motivação:",
            answer: "C) A discussão sobre uma base de desenvolvimento sustentável",
            options: [
                "A) A discussão sobre o uso de armas químicas ",
                "B) A discussão sobre a paz mundial",
                "C) A discussão sobre uma base de desenvolvimento sustentável",
                "D) Discussão do livre comércio"
            ]
        },

    
        {
            numb: 15,
            question: "Que momento histórico teve maiores danos a biodiversidade mundial:",
            answer: "A)Colonialismo",
            options: [
                "A)Colonialismo",
                "B)Primavera Árabe ",
                "C)Segunda guerra Mundial",
                "D)Primeira Guerra Mundial "
            ]
        },




    ];
    //selecting all required elements
    const start_btn = document.querySelector(".start_btn button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");
    const result_box = document.querySelector(".result_box");
    const option_list = document.querySelector(".option_list");
    const time_line = document.querySelector("header .time_line");
    const timeText = document.querySelector(".timer .time_left_txt");
    const timeCount = document.querySelector(".timer .timer_sec");

    // if startQuiz button clicked
    start_btn.onclick = () => {
        info_box.classList.add("activeInfo"); //show info box
    }

    // if exitQuiz button clicked
    exit_btn.onclick = () => {
        info_box.classList.remove("activeInfo"); //hide info box
    }

    // if continueQuiz button clicked
    continue_btn.onclick = () => {
        info_box.classList.remove("activeInfo"); //hide info box
        quiz_box.classList.add("activeQuiz"); //show quiz box
        showQuetions(0); //calling showQestions function
        queCounter(1); //passing 1 parameter to queCounter
        startTimer(40); //calling startTimer function
        startTimerLine(0); //calling startTimerLine function
    }

    let timeValue = 40;
    let que_count = 0;
    let que_numb = 1;
    let userScore = 0;
    let counter;
    let counterLine;
    let widthValue = 0;

    const restart_quiz = result_box.querySelector(".buttons .restart");
    const quit_quiz = result_box.querySelector(".buttons .quit");

    // if restartQuiz button clicked
    restart_quiz.onclick = () => {
        quiz_box.classList.add("activeQuiz"); //show quiz box
        result_box.classList.remove("activeResult"); //hide result box
        timeValue = 40;
        que_count = 0;
        que_numb = 1;
        userScore = 0;
        widthValue = 0;
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the text of timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }

    // if quitQuiz button clicked
    quit_quiz.onclick = () => {
        window.location.reload(); //reload the current window
    }

    const next_btn = document.querySelector("footer .next_btn");
    const bottom_ques_counter = document.querySelector("footer .total_que");

    // if Next Que button clicked
    next_btn.onclick = () => {
        if (que_count < questions.length - 1) { //if question count is less than total question length
            que_count++; //increment the que_count value
            que_numb++; //increment the que_numb value
            showQuetions(que_count); //calling showQestions function
            queCounter(que_numb); //passing que_numb value to queCounter
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            startTimer(timeValue); //calling startTimer function
            startTimerLine(widthValue); //calling startTimerLine function
            timeText.textContent = "Time Left"; //change the timeText to Time Left
            next_btn.classList.remove("show"); //hide the next button
        } else {
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            showResult(); //calling showResult function
        }
    }

    // getting questions and options from array
    // Altere a função showQuetions para atribuir diretamente o manipulador de evento aos elementos de opção
    function showQuetions(index) {
        const que_text = document.querySelector(".que_text");

        let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
        let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
        que_text.innerHTML = que_tag;
        option_list.innerHTML = option_tag;

        const option = option_list.querySelectorAll(".option");

        // Adicione diretamente o manipulador de evento aos elementos de opção
        option.forEach((opt) => {
            opt.addEventListener("click", function () {
                optionSelected(this);
            });
        });
    }

    // creating the new div tags which for icons
    let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
    let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

    //if user clicked on option
    function optionSelected(answer) {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        let userAns = answer.textContent; //getting user selected option
        let correcAns = questions[que_count].answer; //getting correct answer from array
        const allOptions = option_list.children.length; //getting all option items

        if (userAns == correcAns) { //if user selected option is equal to array's correct answer
            userScore += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
            console.log("Correct Answer");
            console.log("Your correct answers = " + userScore);
        } else {
            answer.classList.add("incorrect"); //adding red color to correct selected option
            answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
            console.log("Wrong Answer");

            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Auto selected correct answer.");
                }
            }
        }
        for (i = 0; i < allOptions; i++) {
            option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
        }
        next_btn.classList.add("show"); //show the next button if user selected any option
    }

    function showResult() {
        info_box.classList.remove("activeInfo"); //hide info box
        quiz_box.classList.remove("activeQuiz"); //hide quiz box
        result_box.classList.add("activeResult"); //show result box
        const scoreText = result_box.querySelector(".score_text");
        if (userScore > 3) { // if user scored more than 3
            //creating a new span tag and passing the user score number and total question number
            let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
            scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
        }
        else if (userScore > 1) { // if user scored more than 1
            let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
            scoreText.innerHTML = scoreTag;
        }
        else { // if user scored less than 1
            let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
            scoreText.innerHTML = scoreTag;
        }
    }

    function startTimer(time) {
        counter = setInterval(timer, 1000);
        function timer() {
            timeCount.textContent = time; //changing the value of timeCount with time value
            time--; //decrement the time value
            if (time < 9) { //if timer is less than 9
                let addZero = timeCount.textContent;
                timeCount.textContent = "0" + addZero; //add a 0 before time value
            }
            if (time < 0) { //if timer is less than 0
                clearInterval(counter); //clear counter
                timeText.textContent = "Time Off"; //change the time text to time off
                const allOptions = option_list.children.length; //getting all option items
                let correcAns = questions[que_count].answer; //getting correct answer from array
                for (i = 0; i < allOptions; i++) {
                    if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                        option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                        console.log("Time Off: Auto selected correct answer.");
                    }
                }
                for (i = 0; i < allOptions; i++) {
                    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
                }
                next_btn.classList.add("show"); //show the next button if user selected any option
            }
        }
    }

    function startTimerLine(time) {
        counterLine = setInterval(timer, 29);
        function timer() {
            time += 1; //upgrading time value with 1
            time_line.style.width = time + "px"; //increasing width of time_line with px by time value
            if (time > 549) { //if time value is greater than 549
                clearInterval(counterLine); //clear counterLine
            }
        }
    }

    function queCounter(index) {

        let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
        bottom_ques_counter.innerHTML = totalQueCounTag;
    }
});