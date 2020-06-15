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
          const jobObject = tableData.find((obj: any) => obj.name === jobKey);
          // @ts-ignore
          if (JOB_LOOKUP[jobKey] === headerName) {
            return (
              <TableRow key={jobKey}>
                <TableRowLeft>{jobKey.replace('_', ' ')} ({jobObject.userList.length})</TableRowLeft>
                <TableRowRight>{jobObject.userList.join(', ')}</TableRowRight>
              </TableRow>
            )
          } else {
            return null;
          }
        })
      }
    </TableContainer>
  )
}

export default Table;