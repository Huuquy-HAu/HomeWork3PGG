import React from 'react'

type Props = {}

const CardSkeleton = (props: Props) => {
    const ar = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
        <h1>Loading . . . .</h1>
            {
                ar.map((value, index) => {
                    return (
                        <div className="card w-50" aria-hidden="true" key={index}>
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CardSkeleton