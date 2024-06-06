import React, { useState } from 'react'
import { classNames } from 'primereact/utils';


import { RadioButton } from 'primereact/radiobutton';
// import { useState } from 'react';
const Collection = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const isSelected = (option) => selectedOptions.includes(option)
    const selectHandler = (option) => selectedOptions.indexOf(option) === -1 ? (setSelectedOptions([...selectedOptions, option])) : setSelectedOptions([...selectedOptions.filter((item)=> item !== option)])

    return (
        <div>
            Selected: {JSON.stringify(selectedOptions)}
            <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                <div className="text-900 text-xl font-medium mb-3 text-center">Faker Methods</div>
                <p className="text-700 mt-0 mb-4 text-center">Generate Fake Data</p>
                <div className="grid">
                <div className="col-12 lg:col-6 p-3">
                        <div style={{ borderRadius: '10px' }} className={classNames('shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer', { 'border-blue-500': isSelected(0) })} onClick={() => selectHandler(0)}>
                            <div className="flex align-items-center mb-4">
                                <div className="mr-3">
                                    <span className="inline-flex justify-content-center align-items-center bg-indigo-100" style={{ borderRadius: '4px', width: '45px', height: '45px' }}>
                                        <i className="pi pi-credit-card text-2xl text-indigo-600"></i>
                                    </span>
                                </div>
                                <div>
                                    <span className="text-900 text-xl mb-2 font-medium">Credit Card</span>
                                    <p className="m-0 text-600 font-medium text-sm">Magna fermentum iaculis</p>
                                </div>
                                <RadioButton name="payment" value={0} checked={isSelected(0)} onChange={() => selectHandler(0)} className="ml-auto" />
                                {/* checked: {isSelected(0)} */}
                            </div>
                            <p className="text-600 m-0 line-height-3">Nunc consequat interdum varius sit. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.</p>
                        </div>
                    </div>

                    <div className="col-12 lg:col-6 p-3">
                        <div style={{ borderRadius: '10px' }} className={classNames('shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer', { 'border-blue-500': isSelected(1) })} onClick={() => selectHandler(1)}>
                            <div className="flex align-items-center mb-4">
                                <div className="mr-3">
                                    <span className="inline-flex justify-content-center align-items-center bg-indigo-100" style={{ borderRadius: '4px', width: '45px', height: '45px' }}>
                                        <i className="pi pi-credit-card text-2xl text-indigo-600"></i>
                                    </span>
                                </div>
                                <div>
                                    <span className="text-900 text-xl mb-2 font-medium">Credit Card</span>
                                    <p className="m-0 text-600 font-medium text-sm">Magna fermentum iaculis</p>
                                </div>
                                <RadioButton name="payment" value={1} checked={isSelected(1)} onChange={() => selectHandler(1)} className="ml-auto" />
                                {/* checked: {isSelected(0)} */}
                            </div>
                            <p className="text-600 m-0 line-height-3">Nunc consequat interdum varius sit. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Collection