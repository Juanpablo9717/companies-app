import React, { useEffect, useState } from 'react'
import { CompaniesContext } from './context/CompaniesContext'
import { db, onSnapshot, collection } from './Firestore'
import AppRouter from './router/AppRouter'

export const App = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "companies");
    onSnapshot(colRef, (snapshot) => {
      setCompanies([])
      snapshot.docs.forEach((doc) => {
        setCompanies((prev) => [...prev, doc])
      })
  })
  }, [])
  return (
    <CompaniesContext.Provider value={{ companies, setCompanies }}>
      <AppRouter />
    </CompaniesContext.Provider>
  )
}
