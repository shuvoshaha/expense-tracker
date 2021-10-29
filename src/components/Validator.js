export default function validator(formData) {
    const err = {}

    if (!formData.text.trim()) {
        err.text = "Name is required"
    }

    else if (typeof formData.text !== 'string') {
        err.text = "Name is not a character"
    }

    if (!formData.amount) {
        err.amount = "Amount is required";
    }



    return err;
}





