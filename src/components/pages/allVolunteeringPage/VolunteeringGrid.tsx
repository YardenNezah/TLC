import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchVolunteering } from '../../../store/volunteeringDataSlice';
import { fetchAssociations } from '../../../store/AssociationDataSlice';
import { useAppDispatch } from '../../../store/store';
import "./AllVolunteeringPage.scss"
import SubmitButton from '../../layout/button/SubmitButton';
const VolunteeringGrid = () => {

    const dispatch = useAppDispatch();
    const { volunteering } = useSelector((state: any) => state.volunteering);
    const { associations } =  useSelector((state: any) => state.associations);
  
    useEffect(() => {
      dispatch(fetchVolunteering());
      dispatch(fetchAssociations());
    }, []);

    return (
      <Fragment>
        <div className='feed'>
          {volunteering.map((item: any) => (
              <div className='feed-container'>
                  <div><h1>{item.name}</h1></div>
                  <div><h3>{item.date}</h3></div>
                  <div><h3>{item.address}</h3></div>
                  <SubmitButton value={"Sign up here"} onClick={()=>{}}></SubmitButton>
              </div>
          ))}
        </div>
      </Fragment>
    );
}

export default VolunteeringGrid;