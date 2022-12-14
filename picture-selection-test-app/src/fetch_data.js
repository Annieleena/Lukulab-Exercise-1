/*const ENDPOINT_URL = "https://legible-seal-72.hasura.app/v1/graphql";
const STUDENT_PROGRESS = `
    query {
        student_progress {
            Exercise_No
            Score_Progress
            Student_Id
            Student_Name
        }
    }
`;
export const fetchStudentProgress = async () => {
    const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: STUDENT_PROGRESS
        })
    });
    return await response.json();
};*/
const ENDPOINT_URL = "https://fun-moose-91.hasura.app/v1/graphql";
const Lukulab_Exercise_QUERY = `
    query {
         Lukulab_Exercise (
            order_by: {Exercise_No: asc}
            ) 
         {
            ID
		    Name
		    Type
		    Skill_tag
            Complexity_Level
            Picture
            Text
            Activeelements
            Timer
            Instructions
            Correctanswer
            AverageResult
            Audio
            Exercise_Set
            Exercise_No

        }
    }
`;
export const fetchLukulab_exercise = async () => {
    const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: Lukulab_Exercise_QUERY
        })
    });
    return await response.json();
};

