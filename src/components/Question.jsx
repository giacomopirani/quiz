import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({
    questionText, 
    answers, 
    onSelect, 
    selectedAnswer, 
    answerState,
    onSkipAnswer
}) {
    return (
         <div id="question">
              <QuestionTimer                 
                  timeout={10000} 
                  onTimeout={onSkipAnswer}
               />
              <h2>{questionText}</h2>
              <Answers 
                  answers={answers} 
                  selectedAnswer={selectedAnswer}
                  answerState={answerState}
                  onSelect={onSelect}
              />
           </div>
    );
}