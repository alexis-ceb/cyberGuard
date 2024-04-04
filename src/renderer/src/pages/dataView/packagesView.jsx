import dayjs from 'dayjs'

const packagesCustomColumns = {
  time: (value) => <div>{dayjs(value).format('LL LTS')}</div>,
  size_bytes: (value) => (
    <div>
      {value} bytes ({(value / 1024).toFixed(2)} KB)
    </div>
  )
}

const packagesColumns = [
  {
    key: 'time',
    label: 'TIME'
  },
  {
    key: 'sender_ip',
    label: 'SENDER IP'
  },
  {
    key: 'receiver_ip',
    label: 'RECEIVER IP'
  },
  {
    key: 'size_bytes',
    label: 'SIZE (BYTES)'
  }
]

const packages = [
  {
    id: 1,
    time: '2021-10-01T00:00:01Z',
    sender_ip: '192.168.1.1',
    receiver_ip: '192.168.8.3',
    size_bytes: 1024
  },
  {
    id: 2,
    time: '2021-10-01T00:05:00Z',
    sender_ip: '192.168.1.2',
    receiver_ip: '192.168.8.4',
    size_bytes: 2048
  },
  {
    id: 3,
    time: '2021-10-01T00:10:00Z',
    sender_ip: '192.168.1.3',
    receiver_ip: '192.168.8.5',
    size_bytes: 512
  },
  {
    id: 4,
    time: '2021-10-01T00:15:00Z',
    sender_ip: '192.168.1.4',
    receiver_ip: '192.168.8.6',
    size_bytes: 1536
  },
  {
    id: 5,
    time: '2021-10-01T00:20:00Z',
    sender_ip: '192.168.1.5',
    receiver_ip: '192.168.8.7',
    size_bytes: 1024
  }
]

export const PackagesViewData = {
  label: 'Packages',
  columns: packagesColumns,
  rows: packages,
  customColumns: packagesCustomColumns
}
