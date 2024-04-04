import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'

const SimpleTable = ({ columns, rows, customColumns }) => {
  console.log(customColumns)
  const renderCell = React.useCallback(({ item, columnKey }) => {
    const cellValue = item[columnKey]

    if (customColumns[columnKey]) {
      return customColumns[columnKey](cellValue)
    }

    return <div>{cellValue}</div>
  }, [])

  return (
    <Table
      aria-label="DATA_VIEW"
      color="primary"
      removeWrapper
      shadow="none"
      className="h-full bg-background rounded-md overflow-y-scroll"
      selectionMode="single"
      isStriped
    >
      <TableHeader aria-label="DATA_VIEW_2" columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody aria-label="DATA_VIEW_3" items={rows}>
        {(item) => (
          <TableRow aria-label="DATA_VIEW_4" key={item.key}>
            {(columnKey) => <TableCell>{renderCell({ item, columnKey })}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default SimpleTable
