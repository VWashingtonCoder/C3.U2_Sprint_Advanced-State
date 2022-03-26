import * as yup from "yup";

const formSchema = yup.object().shape({
    newQuestion: yup
        .string()
        .trim()
        .required("Give Us Your Best Question")
        .min(1, "The best questions are more than one char"),
    newTrueAnswer: yup
        .string()
        .trim()
        .required("No one likes to only be wrong. True choice required.")
        .min(1, "The best answers are more than one char"),
    newFalseAnswer: yup
        .string()
        .trim()
        .required("We can't always be right. False choice required.")
        .min(1, "The best answers are more than one char")
})

export default formSchema