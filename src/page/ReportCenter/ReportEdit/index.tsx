import React from 'react';
import { useParams } from 'react-router-dom';


function ReportEdit() {

    const params = useParams<{id: string}>();
    console.log(params)
    return (
        <div>
            <h3>报表编辑</h3>
            <p>正在编辑的报表 {params.id}</p>
        </div>
    )
}

export default ReportEdit;