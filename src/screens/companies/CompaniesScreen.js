import React, { useContext } from 'react';
import { CompaniesContext } from '../../context/CompaniesContext';
import { ReactComponent as Trash } from '../../assets/Trash.svg';
import { ReactComponent as Edit } from '../../assets/Edit.svg';
import { useHistory } from 'react-router-dom';
import { removeFirebaseData } from '../../Firestore';

const CompaniesScreen = () => {
  const history = useHistory();
  const { companies } = useContext(CompaniesContext);

 
  return (
    <div>
      <h2 className="mb-5 text-2xl">Companies List</h2>
      {companies.map((doc, index) => {
        const comp = doc.data()
        // console.info(doc.id)
        return(<div
          key={index}
          className="shadow-md p-3 hover:shadow-lg cursor-pointer rounded-md bg-white flex justify-between border border-gray-200 my-5"
        >
          <div>
            <p>Company Name: <span className="font-semibold">{comp.name}</span></p>
            <p>Address: <span className="font-semibold">{comp.address}</span></p>
            <p>Nit: <span className="font-semibold">{comp.nit}</span></p>
            <p>Cellphone: <span className="font-semibold">{comp.cellphone}</span></p>
          </div>
          <div className="flex gap-5 items-center">
            <div 
              className="cursor-pointer hover:bg-slate-50 rounded-full h-12 w-12 flex items-center justify-center"
              onClick={() => {
                removeFirebaseData(doc.id)
              }}
            >
              <Trash />
            </div>
            <div
              className="cursor-pointer hover:bg-slate-50 rounded-full h-12 w-12 flex items-center justify-center"
              onClick={() => {
                history.push({
                  pathname: `companie/${doc.id}`,
                  state: { comp, action: 'update', id: doc.id }
                });
              }}
            >
              <Edit />
            </div>
          </div>
        </div>)
      })}
    </div>
  )
}

export default CompaniesScreen;