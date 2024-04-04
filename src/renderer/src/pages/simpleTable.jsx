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
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{renderCell({ item, columnKey })}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default SimpleTable
