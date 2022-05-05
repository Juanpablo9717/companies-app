import { useState } from "react"
import { useHistory } from "react-router-dom";
import { addFirebaseData, updateFirebaseData } from "../../Firestore";

export const useHomeScreen = () => {
  const history = useHistory()
  const [companyState, setCompanyState] = useState({ name: "", address: "", nit: "", cellphone: "" })


  const handleInputChange = ({ target }) => {
    setCompanyState({
      ...companyState,
      [target.name]: target.value
    })
  }

  const addCompany = () => {
    addFirebaseData(companyState)
    setCompanyState({ name: "", address: "", nit: "", cellphone: "" })
    history.replace('/companies');
  }

  const updateCompany = (id) => {
    updateFirebaseData(id, companyState)
    setCompanyState({ name: "", address: "", nit: "", cellphone: "" })
    history.replace('/companies');
  }

  return [{ companyState }, { handleInputChange, addCompany, updateCompany, setCompanyState }]
}