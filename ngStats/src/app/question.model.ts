export interface Question{
    /*
    QuestionID: number
    TotalResponses: number
    CorrectResponesL: number
    Correct%: number
    AverageTime: number
    // etc...
    */
   
   name: string;
   email: string;
   phone: string;
   company: {
        name: string;
   }
}