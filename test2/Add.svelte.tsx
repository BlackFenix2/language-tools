<></>;function render() {

     let number1: number = 1
     let number2: number = 2
;
<>
<h1>{number1} + {number2} = {number1 + number2}</h1></>
return { props: {number1 , number2}, slots: {} }}

export default class {
    $$prop_def = __sveltets_partial(render().props)
    $$slot_def = render().slots
}