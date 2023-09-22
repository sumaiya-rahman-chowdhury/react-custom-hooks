
import './App.css'
import ReusableForm from './hooks/ReusableForm.jsx'

function App() {
  const handleSignSubmit = (data) => {
    // e.preventDefault();
    console.log(data)
  }
  const handleUpdateSubmit = (data) => {
    console.log(data)

  }

  return (
    <>
      <ReusableForm props={"Update"} handleSubmit={handleUpdateSubmit}></ReusableForm>
      <ReusableForm props={"Sign In"}
        submitBtnTxt='Sign In'
        handleSubmit={handleSignSubmit}>
      </ReusableForm>
    </>
  )
}

export default App
