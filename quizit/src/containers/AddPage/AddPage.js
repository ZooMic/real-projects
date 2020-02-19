import React from 'react'
import SubLayout from '../../components/SupLayout/'

const AddPage = (props) => {
    return (<SubLayout>
        <form>
            {/* input question */}
            {/* input answer 1* [checkbox for correct answer]*/}
            {/* input add new answer, on focus another below appears */}
            {/* SUBBMIT ADD/SAVE ETC.*/}
        </form>
        <div className="added-section">
            <div>id, question..., [REMOVE] [EDIT]</div>
        </div>
    </SubLayout>)
}

export default AddPage;