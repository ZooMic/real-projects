import React from 'react'
import { useParams } from 'react-router-dom'
import SubLayout from '../../components/SupLayout/';
import SupTitle from '../../components/SupTitle/'



const EditQuizPage = () => {
    const { quizId } = useParams();
    return (
        <SubLayout>
            <SupTitle>Edit questions</SupTitle>
        </SubLayout>
    )
}

export default EditQuizPage;


  // {/* input question */}
            // {/* input answer 1* [checkbox for correct answer]*/}
            // {/* input add new answer, on focus another below appears */}
            // {/* SUBBMIT ADD/SAVE ETC.*/}
            // /**
            //  *          <div className="added-section">
            //             <div>id, question..., [REMOVE] [EDIT]</div>
            //             </div>
            //  */