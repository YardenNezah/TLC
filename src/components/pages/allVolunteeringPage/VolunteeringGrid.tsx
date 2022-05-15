import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchVolunteering } from '../../../store/volunteeringDataSlice';
import { fetchAssociations } from '../../../store/AssociationDataSlice';
import { useAppDispatch } from '../../../store/store';
import "./AllVolunteeringPage.scss"
import SubmitButton from '../../layout/button/SubmitButton';
import VolunteeringPage from '../volunteeringPage/VolunteeringPage';
const VolunteeringGrid = () => {

    const dispatch = useAppDispatch();
    const { volunteering } = useSelector((state: any) => state.volunteering);
  
    useEffect(() => {
      dispatch(fetchVolunteering());
      dispatch(fetchAssociations());
    }, []);

    const [openVolunteeringCard, setOpenVolunteeringCard] = useState(false);
    const [volunteeringName, setVolunteeringName] = useState("");
    
    const openVolunteeringCardHandler = (volunteer: string) => {
      setOpenVolunteeringCard(true);
      setVolunteeringName(volunteer);
    };

    return (
      <Fragment>
         {openVolunteeringCard && (
           <Fragment>
             <button
             className="volunteering-container"
             onClick={() => setOpenVolunteeringCard(false)}
           ></button>
           <button
             className="close-volunteering-page"
             onClick={() => setOpenVolunteeringCard(false)}
           >
             X
           </button>
           <br />
          <VolunteeringPage volunteering={volunteeringName}></VolunteeringPage>
          </Fragment>
      )}
        <div className='feed'>
        {!openVolunteeringCard && volunteering.map((item: any) => (
              <div className='feed-container' key={item.name}>
                  <div><h1>{item.name}</h1></div>
                  <div><h3>{item.date}</h3></div>
                  <div><h3>{item.address}</h3></div>
                  <SubmitButton value={"Sign up here"} onClick={() => openVolunteeringCardHandler(item.name)}></SubmitButton>
              </div>
          ))}
        </div>
      </Fragment>
    );
}

export default VolunteeringGrid;