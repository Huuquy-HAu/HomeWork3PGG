import React, { useState, useRef } from 'react'
import { IArrayPhoto } from '../../../models/photo'
import { useDispatch, useSelector } from "react-redux"
import './CardChild.css'

interface Props {
    photoDataItem: IArrayPhoto,
    photoDataIndex: number,
    changeEdditButton: any
}

const CardChild = (props: Props) => {
    const { photoDataItem, photoDataIndex, changeEdditButton } = props

    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    function handleLabelClick() {
        setIsEditing(true);
    }

    function handleInputBlur() {
        setIsEditing(false);
        changeEdditButton(true)

    }


    return (
        <>
            <div className={`card ${photoDataItem.id % 2 === 0 ? 'bg-secondary' : ''} mb-3 w-100`} style={{ maxWidth: '540px' }} key={photoDataIndex} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={photoDataItem.thumbnailUrl} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5></h5>
                            <label
                                className="card-title"
                                onClick={handleLabelClick}
                                contentEditable={isEditing}
                                onBlur={handleInputBlur}
                            >
                                {photoDataItem.title}
                            </label>
                            <p className="card-text">{Date.now()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardChild