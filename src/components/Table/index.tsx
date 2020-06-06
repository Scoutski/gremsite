import React from 'react';
import { TableContainer, TableRow, TableRowLeft, TableRowRight } from './index.styles';
import { JOB_LOOKUP } from '../../helpers/jobTypes'

interface TableProps {
  headerName: string;
  jobKeys: string[];
  tableData: any;
}

const Table = ({ headerName, jobKeys, tableData }: TableProps) => {
  return (
    <TableContainer>
      <h3>{headerName}</h3>
      {jobKeys.length > 0 &&
        jobKeys.map((jobKey: any) => {
          // @ts-ignore
          if (JOB_LOOKUP[jobKey] === headerName) {
            return (
              <TableRow>
                <TableRowLeft>{jobKey.replace('_', ' ')} ({tableData[jobKey].length})</TableRowLeft>
                <TableRowRight>{tableData[jobKey].join(', ')}</TableRowRight>
              </TableRow>
            )
          }
        })
      }
    </TableContainer>
  )
}

export default Table;