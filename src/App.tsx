import {Container, Input, Button, Form, FormButton, Message} from "semantic-ui-react";
import {FormEvent, useState} from "react";

const App = () => {

    const [shop, setShop] = useState<string>("");
    const [amount, setAmount] = useState<any>(0.00);
    const [date, setDate] = useState<string>("--");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("submitting data...");
    }

    return (
        <Container className={"container"}>
            <div className={"info"}>
                <h1>Finance Sheets</h1>
                <p>Shop: {shop}, Amount: {amount}, Date: {date}</p>
            </div>
            <Form className={"main-form"} onSubmit={(e) => {handleSubmit(e)}}>
                <Form.Input fluid label={"Shop"} type={"text"} placeholder={"Amazon"} onChange={(e) => setShop(e.target.value)}/>
                <Form.Input fluid label={"Amount"} type={"number"} placeholder={34.99} onChange={(e) => setAmount(e.target.value)} min={0.00} step={0.01}/>
                <Form.Input fluid label={"Date"} type={"date"} onChange={(e) => setDate(e.target.value)}/>
                <FormButton fluid type={"submit"} color={"blue"}>Submit</FormButton>
            </Form>
        </Container>
    );
}

export default App;
