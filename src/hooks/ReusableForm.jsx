import React from 'react';

const ReusableForm = ({props,handleSubmit,submitBtnTxt='submit'}) => {

   
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log("Submited")
    //     console.log(e.target.name.value)
    //     console.log(e.target.email.value)
    //     console.log(e.target.password.value)
    // }
   
    const handleLocalSubmit = (e) =>{
        e.preventDefault();
       const data = {
        name: e.target.name.value ,
        password: e.target.password.value ,
        email: e.target.email.value ,
       }
       handleSubmit(data)
    }


    return (
        <div> <h2>{props}</h2>
            <form action="" onSubmit={handleLocalSubmit}>
                <input type="text" name='name'/>
                <br />
                <input type="email" name='email'/>
                <br />
                <input type="password" name='password'/>
                <br />
                <button>{submitBtnTxt}</button>
            </form>
            {/* <form action="">
                <input type="text" name=''/>
                <br />
                <input type="text" name=''/>
                <br />
                <input type="text" name=''/>
                <br />
                <button>Submit</button>
            </form> */}
        </div>
    );
};

export default ReusableForm;