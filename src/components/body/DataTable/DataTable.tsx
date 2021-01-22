// https://react.carbondesignsystem.com/?path=/docs/datatable-development--example

import React from 'react';
import { 
  DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, DataTableProps,
  TableToolbar, TableBatchAction, TableBatchActions, TableToolbarContent, TableToolbarSearch, TableToolbarMenu, TableToolbarAction, TableSelectAll, TableSelectRow,
  Button
} from 'carbon-components-react';
import { Delete16 as Delete, Save16 as Save, Download16 as Download } from '@carbon/icons-react'; 

// see docs on styles: https://www.carbondesignsystem.com/components/data-table/style



const dataTableProps: Partial<DataTableProps> = {
}

//rows prop -> data to display in the rows of table
//Each row in the rows prop should provide a unique id




const BatchActionsDataTable = ({rows, headers}: DataTableProps) => {
  return(
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
    <div className="bx--row data-table__r1">
    <div className="bx--col-lg-16">
    <div className = 'bx--data-table'>

      

        <DataTable rows={rows} headers={headers}>
      {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getSelectionProps,
        getBatchActionProps,
        onInputChange,
        selectedRows,
      }: {
        rows: any,
        headers: any,
        getHeaderProps: any,
        getRowProps: any,
        getSelectionProps: any,
        getBatchActionProps: any,
        onInputChange: any,
        selectedRows: any,
      }) => (
        <TableContainer /*title="DataTable with batch actions"*/>
          <TableToolbar>
            <TableBatchActions {...getBatchActionProps()}>
              <TableBatchAction
                tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                renderIcon={Delete}
                onClick={() => console.log('clicked')}
              >
                Delete
              </TableBatchAction>
              <TableBatchAction
                tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                renderIcon={Save}
                onClick={() => console.log('clicked')}
              >
                Save
              </TableBatchAction>
              <TableBatchAction
                tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                renderIcon={Download}
                onClick={() => console.log('clicked')}
              >
                Download
              </TableBatchAction>
            </TableBatchActions>
            <TableToolbarContent>
              <TableToolbarSearch
                tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                onChange={onInputChange}
              />
              <TableToolbarMenu
                tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
              >
                <TableToolbarAction primaryFocus onClick={() => alert('Alert 1')}>
                  Action 1
                </TableToolbarAction>
                <TableToolbarAction onClick={() => alert('Alert 2')}>
                  Action 2
                </TableToolbarAction>
                <TableToolbarAction onClick={() => alert('Alert 3')}>
                  Action 3
                </TableToolbarAction>
              </TableToolbarMenu>
              <Button
                tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                onClick={() => console.log('clicked')}
                size="small"
                kind="primary"
              >
                Add new
              </Button>
            </TableToolbarContent>
          </TableToolbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableSelectAll {...getSelectionProps()} />
                {headers.map((header: any) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: any) => (
                <TableRow {...getRowProps({ row })}>
                  <TableSelectRow {...getSelectionProps({ row })} />
                  {row.cells.map((cell: any) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
</div>
</div>
</div>
</div>
  )
}
  
export default BatchActionsDataTable; 

