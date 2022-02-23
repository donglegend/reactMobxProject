import React from 'react';
import { Link } from 'react-router-dom';

function ReportView() {
    return (
        <div>
            报表浏览页
            <Link to={`/report/edit/1`}>编辑</Link>
        </div>
        
    )
}

export default ReportView;