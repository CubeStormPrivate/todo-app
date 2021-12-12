import * as Yup from 'yup';


export const NewTaskSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, 'Nazwa jest za krótka')
        .required('Nazwa jest wymagana'),
    date: Yup
        .date(),
    isImportant: Yup
        .boolean()
        .required('Wartość jest wymagana')
})