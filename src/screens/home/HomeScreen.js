/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import InputForm from '../../components/InputForm';
import { useHomeScreen } from './hooks';
import { useLocation } from 'react-router-dom';
const HomeScreen = () => {
  const { state } = useLocation();
  const [{ companyState }, { handleInputChange, addCompany, updateCompany, setCompanyState }] = useHomeScreen()

  useEffect(() => {
    if (state?.action === 'update') {
      setCompanyState(state.comp);
    }
  }, [])

  return (
    <>
      <div className="w-full">
        <p className="text-2xl my-5">{state?.action === 'update' ? `Update ${state?.comp?.name}` : "Create Company"}</p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

          <InputForm
            name="name"
            placeholder="Lite Thinking..."
            label="Company Name"
            handleInputChange={handleInputChange}
            value={companyState?.name}
          />

          <InputForm
            name="address"
            placeholder="Pereira CR-20 ..."
            label="Address"
            handleInputChange={handleInputChange}
            value={companyState?.address}
          />

          <InputForm
            name="nit"
            placeholder="NIT"
            label="NIT"
            handleInputChange={handleInputChange}
            value={companyState?.nit}
          />

          <InputForm
            name="cellphone"
            placeholder="333 000 0000"
            label="Phone Number"
            handleInputChange={handleInputChange}
            value={companyState?.cellphone}
            type="number"
          />

          <div className="flex items-center justify-between">
            {!companyState.name || !companyState.address || !companyState.nit || !companyState.cellphone ? (
              <button 
                  disabled = { true }
                  className = "bg-gray-500 cursor-not-allowed font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 text-slate-100" 
                  type = "button"
                >
                {state?.action === 'update' ? `Update` : "Create"}
              </button>
            ): (
                <button 
                  className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5" 
                  type = "button"
                  onClick = { (e) => {
                    e.preventDefault()
                if (state?.action === 'update') {
                  updateCompany(state.id)
                } else {
                  addCompany()
                }
                  }}
                >
                {state?.action === 'update' ? `Update` : "Create"}
              </button>
            )}

      </div>
    </form>
      </div >
    </>
  )
}

export default HomeScreen;